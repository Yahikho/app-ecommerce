"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerEmailValidator_1 = require("../validators/registerEmailValidator");
const registerEmailsController_1 = require("../controllers/registerEmailsController");
const regiterEmail = express_1.default.Router();
regiterEmail.post('/auth/registerEmail', registerEmailValidator_1.validateInputEmail, registerEmailsController_1.registerEmail);
regiterEmail.post('/auth/valideCodeEmail', registerEmailValidator_1.validateInputCode, registerEmailsController_1.verifyEmail);
exports.default = regiterEmail;
