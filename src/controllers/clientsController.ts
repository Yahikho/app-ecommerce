import { Request, Response } from "express";
import { encrypt } from "../helpers/handleBcrypt"
import { 
    createClient as createClientService,
    getClientByEmail as getClientByEmailService
} from "../services/clientsService"
import { getResgisterEmailByEmail as getResgisterEmailByEmailService} from "../services/registerEmailService";
import { createClientModel } from "../models/clientsModel";

export const createClient = async (req: Request, res: Response) => {
    try {
        const hashPassword: string = await encrypt(req.body.password);
        const data :createClientModel = {
                                            email : req.body.email,
                                            password : hashPassword
                                        };
        const searchClient = await getClientByEmailService(data.email);
        if(searchClient.length > 0){
            res.status(200);
            res.json({
                response: false,
                message: "There is a client with this email.",
            });
        }else{
            const registerEmail = await getResgisterEmailByEmailService(data.email);
            if(registerEmail.length > 0){
                if(registerEmail[0].validated){
                    await createClientService(data);
                    res.status(201);
                    res.json({
                        response: true,
                        message: "Client created successfully.",
                    });  
                }else{
                    res.status(200);
                    res.json({
                        response: false,
                        message: "E-mail has not been verified.",
                    });
                }
            }else{
                res.status(200);
                    res.json({
                        response: false,
                        message: "E-mail has not been registered.",
                    });
            }
        }
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
}