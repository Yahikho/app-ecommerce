import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../helpers/generateToken'

const prisma = new PrismaClient();

const verifyEmailCode = async (req:Request, res:Response) => {

    const code_verify:number =  Number(req.body.code);
    
    try{
        
        const getEmailToVerify = await prisma.verifyEmail.findUnique({
            where: { code_verify }
        });

        if(getEmailToVerify !== null){

            const tokenData = await verifyToken(getEmailToVerify.token);

            if(tokenData !== null){
                const updateValidatedEmail = await prisma.verifyEmail.update({
                    where: { code_verify },
                    data: {
                        validated: true
                    }
                });

                if(updateValidatedEmail !== null){
                    res.json({
                        response : true,
                        message : "Email verificado con exito."
                    });
                }else{
                    res.json({
                        response : false,
                        message : "No se logo ejecutar la petición."
                    });
                }
            }else{
                res.json({
                    response : false,
                    message: "Token expiro."
                })
            }
            
        }else{
            res.status(500).json({
                response : false,
                message : "Codigo no existe."
            });
        }

    }catch(error){
        res.status(500).json({
            respnse : false,
            message : "No se logro crear la petición.",
            error
        });
    }
}

export default verifyEmailCode;