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
exports.createClient = void 0;
const handleBcrypt_1 = require("../helpers/handleBcrypt");
const clientsService_1 = require("../services/clientsService");
const registerEmailService_1 = require("../services/registerEmailService");
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashPassword = yield (0, handleBcrypt_1.encrypt)(req.body.password);
        const data = {
            email: req.body.email,
            password: hashPassword
        };
        const searchClient = yield (0, clientsService_1.getClientByEmail)(data.email);
        if (searchClient.length > 0) {
            res.status(200);
            res.json({
                response: false,
                message: "There is a client with this email.",
            });
        }
        else {
            const registerEmail = yield (0, registerEmailService_1.getResgisterEmailByEmail)(data.email);
            if (registerEmail[0].validated) {
                const client = yield (0, clientsService_1.createClient)(data);
                res.status(201);
                res.json({
                    response: true,
                    message: "Client created successfully.",
                    data: client
                });
            }
            else {
                res.status(200);
                res.json({
                    response: true,
                    message: "E-mail has not been verified.",
                });
            }
        }
    }
    catch (Error) {
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
});
exports.createClient = createClient;
