import { Request, Response } from "express";
import { registerEmailModel } from "../models/registerEmailModel";
import { PrismaClient } from "@prisma/client";
import { getTokenRegisterEmail } from "../helpers/generateToken";
import createCode from "../helpers/createCodeVerify";
import { transporter } from "../helpers/sendEmail"; 

const prisma = new PrismaClient();
const registerEmail = async (req:Request, res:Response) => {

    const  { email } = req.body
    const token = await getTokenRegisterEmail(email);
    const code_verify = await createCode();

    const data:registerEmailModel = {
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
                response : true,
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
            to: email,
            subject: "Código de verificación de correo",
            html: `<html>
                    <head>
                    <style>
                        .principal{
                            width:100%;
                            display: flex;
							justify-content: center;
							align-items: center;
                        }
                        .content-mail{
                            width: 20em;
                            background-color: #94CDFA;
                        }
                        p{
                            color:#000000;
                            font-size:15px;
                            padding:10px;
                        }
                        section{
                            text-align: center;
                        }
                        span{
                            padding: 0 20px;
                            color:#000000;
                            font-size:38px;
                            border: 1px solid #000000;
                            border-radius: 5px;
                            background-color:#269EFB;
                        }
                    </style>
                    </head>
                    <body>
                        <div class="principal">
                            <div class="content-mail">
                                <p>A continución su código de verificación de e-mail</p>
                                <section>
                                    <span>${code_verify}</span>
                                </section>
                            </div>
                        </div>
                    </body>
                    </html>`
        });
    }catch (error) {
        res.status(500).send({error});
    }
}

export default registerEmail;