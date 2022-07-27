import { body, param } from "express-validator";
import { Request, Response } from "express";
import validateResult from "../helpers/validateHelper";

export const validateParamIdUrl = [
    param('id')
        .isNumeric()
        .withMessage('Field must be numeric.'),
        (req:Request, res:Response, next:any) => {
            validateResult(req,res, next);
        }
]

export const validateName = [
    body('name')
        .not().isEmpty()
        .withMessage('Field name must not be empty.'),
        (req:Request, res:Response, next:any) => {
            validateResult(req,res, next);
        }
]