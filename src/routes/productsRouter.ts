import  express from "express";

const productosRouter = express.Router();

productosRouter.get('ecommerce/products');
productosRouter.get('ecommerce/products:id');
productosRouter.post('ecommerce/products');
productosRouter.put('ecommerce/products:id')
productosRouter.delete('ecommerce/products:id')

export default productosRouter;