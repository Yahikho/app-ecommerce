import { PrismaClient } from "@prisma/client";
import { Brand } from "../models/brandsModel";

const prisma: PrismaClient = new PrismaClient();

export const getAllBrands = async (): Promise<Brand[]> => {
    return await prisma.brands.findMany();
}

export const getBrand = async (id: number): Promise<any> => {
    return await prisma.brands.findUnique({
        where:{
            id
        }
    });
}

/*export const createNewBrand = async (): Promise<Brand> => {
    return await prisma.brands.create({
        data
    });
}*/