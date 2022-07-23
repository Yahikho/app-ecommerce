import { body } from "express-validator";
import { Request, Response } from "express";
import validateResult from "../helpers/validateHelper";

export const validateInputEmail = [
    body('email')
        .not().isEmpty()
        .withMessage('Campo email imcompleto.')
        .isEmail()
        .withMessage('Valor ingresado no corresponde a un correo.'),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res,next);
    }
];

export const validateInputCode = [
    body('code')
        .isNumeric()
        .withMessage('El valor debe ser numercio.')
        .isLength({ min: 4, max: 4})
        .withMessage('EL valor ingresado debe contener 4 carateres.'),
    (req:Request, res:Response, next:any) => {
        validateResult(req,res, next);
    }
];
