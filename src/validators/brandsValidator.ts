import { param } from "express-validator";
import { Request, Response } from "express";
import validateResult from "../helpers/validateHelper";

export const validateParamIdUrl = [
    param('id')
        .isNumeric()
        .withMessage('Campo id debe ser numérico.'),
        (req:Request, res:Response, next:any) => {
            validateResult(req,res, next);
        }
]