import { Clients, PrismaClient } from "@prisma/client";
import { createClientModel } from "../models/clientsModel";
const prisma: PrismaClient = new PrismaClient();

export const createClient = async (data: createClientModel): Promise<Clients> => {
    return await prisma.clients.create({
        data
    });
}

export const getClientByEmail = async (email: string): Promise<Clients[]> => {
    return await prisma.clients.findMany({
        where:{
            email
        }
    });
}
