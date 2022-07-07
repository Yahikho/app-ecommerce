import { Request, Response } from "express";
import { CreateVerifyEmail } from "../models/verifyEmails";
import { PrismaClient } from "@prisma/client";
import { getTokenVerify } from "../helpers/generateToken";
import createCode from "../helpers/createCodeVerify";
import { transporter } from "../helpers/sendEmail"; 

const prisma = new PrismaClient();
const defaultEmailSendInfoEcommerce:string = process.env.EMAIL_INFO_ECOMMERCE || '';
console.log(defaultEmailSendInfoEcommerce)
const createItemVerifyEmail = async (req:Request, res:Response) => {

    const  { email } = req.body
    const token = await getTokenVerify(email);
    const code_verify = await createCode();

    const data:CreateVerifyEmail = {
        email, 
        code_verify,
        token
    }

    try {

        const getInfoEmail = await prisma.verifyEmail.findUnique({
            where: { email }
        })

        if(getInfoEmail?.email === undefined){
            await prisma.verifyEmail.create({
                data
            });
    
            res.status(200).json({
                response : 'success',
                message: 'Codigo de verificación enviado'
            });
        }else{
            await prisma.verifyEmail.update({
                where: { email },
                data: { 
                    code_verify, 
                    token,
                    validated: false
                }
            });

            res.status(200).json({
                response : true,
                message: 'Codigo de verificación enviado nuevamente'
            });
        }

        await transporter.sendMail({
            from: "honbermudezpa98@gmail.com",
            to: email,
            subject: "Código de verificación de correo ecommerce",
            html: `<style>
                        .code-verify{color: red;}
                    </style>
                    <p class='code-verify'>${code_verify}</p> `
        });
        

    }catch (error) {
        res.status(500).send({error});
    }
}

export default createItemVerifyEmail;