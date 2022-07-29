"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInputCode = exports.validateInputEmail = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = __importDefault(require("../helpers/validateHelper"));
exports.validateInputEmail = [
    (0, express_validator_1.body)('email')
        .not().isEmpty()
        .withMessage('Field email must not be empty.')
        .isEmail()
        .withMessage('Field email must be email'),
    (req, res, next) => {
        (0, validateHelper_1.default)(req, res, next);
    }
];
exports.validateInputCode = [
    (0, express_validator_1.body)('code')
        .isNumeric()
        .withMessage('Field must be numeric.')
        .isLength({ min: 4, max: 4 })
        .withMessage('Number of characters must be 4'),
    (req, res, next) => {
        (0, validateHelper_1.default)(req, res, next);
    }
];
