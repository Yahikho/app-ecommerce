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

/*export const createNewBrand = async (): Promise<Brand> => {
    return await prisma.brands.create({
        data
    });
}*/