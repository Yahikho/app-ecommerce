"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.registerEmail = void 0;
const registerEmailService_1 = require("../services/registerEmailService");
const generateToken_1 = require("../helpers/generateToken");
const sendEmail_1 = require("../helpers/sendEmail");
const registerEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const token = yield (0, generateToken_1.getTokenRegisterEmail)(email);
    const code_verify = yield generateRandomCode();
    const data = {
        email,
        code_verify,
        token
    };
    const infoRegisterEmail = yield (0, registerEmailService_1.getResgisterEmailByEmail)(email);
    if (!infoRegisterEmail) {
        const newRegisterEmail = yield (0, registerEmailService_1.createRegisterEmail)(data);
        res.status(201).json({
            response: true,
            message: 'Verification code sent.',
            data: newRegisterEmail
        });
    }
    else {
        const updateRegisterEmail = yield (0, registerEmailService_1.updateRegisterEmailByEmail)(email, { code_verify, token, validated: false });
        res.status(201).json({
            response: true,
            message: 'Verification code sent again.',
            data: updateRegisterEmail
        });
    }
    yield sendEmail_1.transporter.sendMail({
        to: email,
        subject: "Verification code email e-commerce",
        html: `<html>
                <body>
                     <div class="content-mail">
                        <p>Below is your verification code for your email.</p>
                        <section>
                            <span>${code_verify}</span>
                        </section>
                    </div>
                </body>
                </html>`
    });
});
exports.registerEmail = registerEmail;
const generateRandomCode = () => __awaiter(void 0, void 0, void 0, function* () {
    let randomCode = 0;
    let codeDB = 0;
    while (randomCode === codeDB) {
        randomCode = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000); //Random number between 9999 - 10000
        const res = yield (0, registerEmailService_1.getResgisterEmailByCode)(randomCode);
        codeDB = (res === null || res === void 0 ? void 0 : res.code_verify) === undefined ? 0 : res === null || res === void 0 ? void 0 : res.code_verify;
    }
    return randomCode;
});
const verifyEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = Number(req.body.code);
    const registerEmailData = yield (0, registerEmailService_1.getResgisterEmailByCode)(code);
    if (registerEmailData) {
        const tokenVerify = yield (0, generateToken_1.verifyToken)(registerEmailData.token);
        if (tokenVerify !== null) {
            const updateRegisterEmail = yield (0, registerEmailService_1.updateRegisterEmailByCode)(code, { validated: true });
            if (updateRegisterEmail) {
                res.status(201);
                res.json({
                    response: true,
                    message: 'Email verified successfully.',
                    data: updateRegisterEmail
                });
            }
            else {
                res.status(500);
                res.json({
                    response: false,
                    message: 'An error ocurred with the response.',
                });
            }
        }
        else {
            res.status(401);
            res.json({
                response: false,
                message: "Token expired."
            });
        }
    }
    else {
        res.status(403);
        res.json({
            response: false,
            message: "Verification code does not exist."
        });
    }
});
exports.verifyEmail = verifyEmail;
