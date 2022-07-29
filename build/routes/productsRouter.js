"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productosRouter = express_1.default.Router();
productosRouter.get('ecommerce/products');
productosRouter.get('ecommerce/products:id');
productosRouter.post('ecommerce/products');
productosRouter.put('ecommerce/products:id');
productosRouter.delete('ecommerce/products:id');
exports.default = productosRouter;
