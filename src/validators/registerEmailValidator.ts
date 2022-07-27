import { body } from "express-validator";
import { Request, Response } from "express";
import validateResult from "../helpers/validateHelper";

export const validateInputEmail = [
    body('email')
        .not().isEmpty()
        .withMessage('Field email must not be empty.')
        .isEmail()
        .withMessage('Field email must be email'),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res,next);
    }
];

export const validateInputCode = [
    body('code')
        .isNumeric()
        .withMessage('Field must be numeric.')
        .isLength({ min: 4, max: 4})
        .withMessage('Number of characters must be 4'),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res, next);
    }
];
