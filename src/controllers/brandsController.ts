import { Request, Response } from "express";
import { 
    getAllBrands as getAllBrandsService, 
    getBrand as getBrandService,
    createNewBrand as createNewBrandService,
    updateBrand as updateBrandService,
    deleteBrand as deleteBrandService,
    getBrandByName as getBrandByNameService
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
        res.status(500);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.'
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
            message: 'An error ocurred with the response.'
        });
    }
}

export const createBrand = async (req: Request, res: Response): Promise<void> => {
    try{
        const body = req.body;
        const searchBrand = await getBrandByNameService(body.name);
        if(searchBrand.length > 0){
            res.status(200);
            res.json({
                response: false,
                message: "There is a brand with this name.",
            });
        }else{
            const brand = await createNewBrandService(body);
            res.status(201);
            res.json({
                response: true,
                message: "Brand created successfully.",
                data: brand
            });
        }       
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.'
        });
    }
}

export const updateBrand = async (req: Request, res: Response): Promise<void> => {
    try{

        const id = Number(req.params.id);
        const data = req.body;

        const searchBrand = await getBrandService(id);
        if(searchBrand.length > 0){
            res.status(200);
            res.json({
                response: false,
                message: "There is a brand with this name.",
            });
        }else{
            const brand = await updateBrandService(id,data);
            res.status(201);
            res.json({
                response: true,
                message: "Brand updated successfully.",
                data: brand
            });
        }
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.'
        });
    }

}

export const deleteBrand = async (req: Request, res: Response): Promise<void>  => {
    try{
        const id = Number(req.params.id);
        const searchBrand = await getBrandService(id);
        if(searchBrand.length > 0){
            const brand = await deleteBrandService(id);
            res.status(201);
            res.json({
                respose: false,
                message: 'Brand has been removed.',
                date: brand
            });
        }else{
            res.status(200);
            res.json({
                respose: false,
                message: 'The brand does not exist.'
            });
        }
    }catch(Error){
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.'
        });
    }
}