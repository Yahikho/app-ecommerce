import { body } from "express-validator";
import { Request, Response } from "express";
import validateResult from "../helpers/validateHelper";

export const validateInputEmail = [
    body('email')
        .exists()
        .isEmail(),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res,next);
    }
];

export const validateInputCode = [
    body('code')
        .isNumeric()
        .isLength({ min: 4, max: 4}),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res, next);
    }
];
