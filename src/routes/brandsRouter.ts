import express from "express";

import { validateParamIdUrl } from "../validators/brandsValidator"; 
import { getAllBrands, getBrand } from "../controllers/brandsController";

const routerBrands = express.Router()

routerBrands.get('/ecommerce/brands', getAllBrands);
routerBrands.get('/ecommerce/brands/:id',validateParamIdUrl, getBrand);
/*routerBrands.post('ecommerce/brands');
routerBrands.put('ecommerce/brands:id');
routerBrands.delete('ecommerce/brands:id');*/

export default routerBrands;