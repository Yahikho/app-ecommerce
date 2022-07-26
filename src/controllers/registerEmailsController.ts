import { Request, Response } from "express";
import { createRegisterEmailModel } from "../models/registerEmailModel";
import { 
        getResgisterEmail_Email,
        createRegisterEmail, 
        updateRegisterEmail_Email,
        getResgisterEmail_Code,
        updateRegisterEmail_Code
} from "../services/registerEmailService";
import { getTokenRegisterEmail, verifyToken } from "../helpers/generateToken";
import { transporter } from "../helpers/sendEmail";

export const registerEmail = async (req:Request, res:Response) => {

    const  { email } = req.body
    const token = await getTokenRegisterEmail(email);
    const code_verify = await generateRandomCode();

    const data:createRegisterEmailModel = {
        email, 
        code_verify,
        token
    }

    const infoRegisterEmail = await getResgisterEmail_Email(email);

    if(!infoRegisterEmail){
        const newRegisterEmail:createRegisterEmailModel = await createRegisterEmail(data);
        res.status(201).json({
            response : true,
            message: 'Codigo de verificación enviado.',
            data: newRegisterEmail
        });
    }else{
        const updateRegisterEmail = await updateRegisterEmail_Email(email, {code_verify, token, validated: false});
        res.status(201).json({
            response : true,
            message: 'Codigo de verificación enviado nuevamente',
            data: updateRegisterEmail
        });
    }

    await transporter.sendMail({
        to: email,
        subject: "Código de verificación de correo para e-commerce",
        html: `<html>
                <body>
                     <div class="content-mail">
                        <p>A continución su código de verificación de e-mail.</p>
                        <section>
                            <span>${code_verify}</span>
                        </section>
                    </div>
                </body>
                </html>`
    });
}

type GenerateRandomCode = () => Promise<number>;

const generateRandomCode:GenerateRandomCode = async () => {
    
    let randomCode:number = 0;
    let codeDB:number = 0;

    while(randomCode === codeDB){
        randomCode = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000);//Random number between 9999 - 10000
        const res = await getResgisterEmail_Code(randomCode);
        codeDB = res?.code_verify === undefined ? 0 : res?.code_verify;
    }
    return randomCode;
}

export const verifyEmail = async (req:Request, res:Response) => {

    const code:number =  Number(req.body.code);

    const registerEmailData = await getResgisterEmail_Code(code);

    if(registerEmailData){
        const tokenVerify = await verifyToken(registerEmailData.token);
        
        if(tokenVerify !== null){
            const updateRegisterEmail = await updateRegisterEmail_Code(code,{validated : true});
            
            if(updateRegisterEmail){
                res.status(201);
                res.json({
                    response : true,
                    message : 'Email verificado con exito.',
                    data: updateRegisterEmail
                });
            }else{
                res.status(500)
                res.json({
                    response : false,
                    message : 'No se logo ejecutar la petición.',
                });
            }
        }else{
            res.status(401)
            res.json({
                response : false,
                message: "Token expiro."
            });
        }

    }else{
        res.status(403)
        res.json({
            response : false,
            message : "Codigo no existe."
        });
    }
}
