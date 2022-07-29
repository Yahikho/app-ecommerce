"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateBrand = exports.validateParamId = exports.validateUpdateBrand = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = __importDefault(require("../helpers/validateHelper"));
exports.validateUpdateBrand = [
    (0, express_validator_1.param)('id')
        .isNumeric()
        .withMessage('Field must be numeric.'),
    (0, express_validator_1.body)('name')
        .not().isEmpty()
        .withMessage('Field name must not be empty.'),
    (req, res, next) => {
        (0, validateHelper_1.default)(req, res, next);
    }
];
exports.validateParamId = [
    (0, express_validator_1.param)('id')
        .isNumeric()
        .withMessage('Field must be numeric.'),
    (req, res, next) => {
        (0, validateHelper_1.default)(req, res, next);
    }
];
exports.validateCreateBrand = [
    (0, express_validator_1.body)('name')
        .not().isEmpty()
        .withMessage('Field name must not be empty.'),
    (req, res, next) => {
        (0, validateHelper_1.default)(req, res, next);
    }
];
