import express from "express";
import { validateUpdateBrand, validateParamId, validateCreateBrand } from "../validators/brandsValidator"; 
import { 
    getAllBrands, 
    getBrand, 
    createBrand,
    updateBrand,
    deleteBrand
} from "../controllers/brandsController";

const routerBrands = express.Router()

routerBrands.get('/ecommerce/brands', getAllBrands);
routerBrands.get('/ecommerce/brands/:id',validateParamId, getBrand);
routerBrands.post('/ecommerce/brands', validateCreateBrand, createBrand);
routerBrands.put('/ecommerce/brands/:id',validateUpdateBrand, updateBrand);
routerBrands.delete('/ecommerce/brands/:id', validateParamId, deleteBrand);

export default routerBrands;