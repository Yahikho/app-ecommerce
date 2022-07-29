import { Brands, PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export const getAllBrands = async (): Promise<Brands[]> => {
    return await prisma.brands.findMany();
}

export const getBrand = async (id: number): Promise<Brands[]> => {
    return await prisma.brands.findMany({
        where:{
            id
        }
    });
}

export const createNewBrand = async (data: Brands): Promise<Brands> => {
    return await prisma.brands.create({
        data
    });
}

export const updateBrand = async (id: number, data: Brands): Promise<Brands> => {
    return await prisma.brands.update({
        where: {
            id
        },
        data
    });
}

export const deleteBrand = async (id: number): Promise<Brands> => {
    return await prisma.brands.delete({
        where:{
            id
        }
    });
}

export const getBrandByName = async (name: string): Promise<Brands[]> => {
    return await prisma.brands.findMany({
        where:{
            name
        }
    });
}