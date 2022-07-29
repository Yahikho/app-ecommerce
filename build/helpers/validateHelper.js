"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(400);
        res.json({
            response: false,
            message: 'Parameter error.',
            errors: err.array()
        });
    }
};
exports.default = validateResult;
