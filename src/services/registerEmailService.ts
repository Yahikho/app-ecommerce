import { PrismaClient, RegisterEmail } from "@prisma/client";
import { 
    createRegisterEmailModel, 
    updateRegisterEmailModel_Email,
    updateRegisterEmailModel_Code
} from "../models/registerEmailModel";

const prisma: PrismaClient = new PrismaClient();

export const getResgisterEmailByEmail = async (email:string): Promise<RegisterEmail[]> => {
    return await prisma.registerEmail.findMany({
        where: { email }
    });
}

export const createRegisterEmail = async (data:createRegisterEmailModel): Promise<RegisterEmail> => {
    return await prisma.registerEmail.create({
        data
    });
}

export const updateRegisterEmailByEmail = async (email:string, data:updateRegisterEmailModel_Email): Promise<RegisterEmail> => {

    return await prisma.registerEmail.update({
        where: { email },
        data
    });

}

export const getResgisterEmailByCode = async (code_verify:number): Promise<any>  =>  {
    return await prisma.registerEmail.findUnique({
        where: { code_verify }
    });
}

export const updateRegisterEmailByCode = async (code_verify:number, data:updateRegisterEmailModel_Code): Promise<RegisterEmail> => {
    return await prisma.registerEmail.update({
        where: { code_verify },
        data
    });

}