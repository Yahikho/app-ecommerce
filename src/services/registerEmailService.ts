import { PrismaClient } from "@prisma/client";
import { createRegisterEmailModel, updateRegisterEmailModel_Email ,updateRegisterEmailModel_Code} from "../models/registerEmailModel";

const prisma = new PrismaClient();

export const getResgisterEmail_Email = async (email:string) => {

    return await prisma.registerEmail.findUnique({
        where: { email }
    });
}

export const createRegisterEmail = async (data:createRegisterEmailModel) => {
    return await prisma.registerEmail.create({
        data
    });
}

export const updateRegisterEmail_Email = async (email:string, data:updateRegisterEmailModel_Email) => {

    return await prisma.registerEmail.update({
        where: { email },
        data
    });

}

export const getResgisterEmail_Code = async (code_verify:number)  =>  {
    return await prisma.registerEmail.findUnique({
        where: { code_verify }
    });
}

export const updateRegisterEmail_Code = async (code_verify:number, data:updateRegisterEmailModel_Code) => {

    return await prisma.registerEmail.update({
        where: { code_verify },
        data
    });

}