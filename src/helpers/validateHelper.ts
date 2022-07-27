import { validationResult } from "express-validator";
import { Request, Response } from "express";

const validateResult = (req:Request, res:Response, next:any) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(err:any){
        res.status(400)
        res.json({ 
                response    : false, 
                message     : 'Parameter error.',
                errors      : err.array() })
    }
}

export default validateResult;