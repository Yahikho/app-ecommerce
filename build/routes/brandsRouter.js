"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const brandsValidator_1 = require("../validators/brandsValidator");
const brandsController_1 = require("../controllers/brandsController");
const routerBrands = express_1.default.Router();
routerBrands.get('/ecommerce/brands', brandsController_1.getAllBrands);
routerBrands.get('/ecommerce/brands/:id', brandsValidator_1.validateParamId, brandsController_1.getBrand);
routerBrands.post('/ecommerce/brands', brandsValidator_1.validateCreateBrand, brandsController_1.createBrand);
routerBrands.put('/ecommerce/brands/:id', brandsValidator_1.validateUpdateBrand, brandsController_1.updateBrand);
routerBrands.delete('/ecommerce/brands/:id', brandsValidator_1.validateParamId, brandsController_1.deleteBrand);
exports.default = routerBrands;
