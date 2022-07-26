import { Request, Response } from "express";
import { 
    getAllBrands as getAllBrandsService, 
    getBrand as getBrandService 
} from "../services/brandsService";

export const getAllBrands = async (_req:Request, res:Response): Promise<void> => {
    try{
        const brands = await getAllBrandsService();
        res.status(200);
        res.json({
            response: true,
            message : 'true',
            data: brands
        });
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'Ocurrio un error al realizar la petición.'
        });
    }
}

export const getBrand = async (req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id
        const brand = await getBrandService(Number(id))
        res.status(400);
        res.json({
            response: true,
            message : "true",
            data: brand
        });
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'Ocurrio un error al realizar la petición.'
        });
    }
}