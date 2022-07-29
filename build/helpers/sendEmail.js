"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const defaultEmailSendInfoEcommerce = process.env.EMAIL_INFO_ECOMMERCE || ''; //Email por defecto para enviar información del ecommerce
const defaultPasswordEmailSendEcommerce = process.env.EMAIL_INFO_ECOMMERCE_PASSWORD || ''; //Password por defecto para enviar información del ecommerce
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: defaultEmailSendInfoEcommerce,
        pass: defaultPasswordEmailSendEcommerce
    },
});
