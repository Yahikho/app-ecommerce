import express from "express";

import { 
    validateParamIdUrl,
    validateName
} from "../validators/brandsValidator"; 
import { 
    getAllBrands, 
    getBrand, 
    createBrand,
} from "../controllers/brandsController";

const routerBrands = express.Router()

routerBrands.get('/ecommerce/brands', getAllBrands);
routerBrands.get('/ecommerce/brands/:id',validateParamIdUrl, getBrand);
routerBrands.post('/ecommerce/brands', validateName, createBrand);
/*routerBrands.put('ecommerce/brands:id');
routerBrands.delete('ecommerce/brands:id');*/

export default routerBrands;