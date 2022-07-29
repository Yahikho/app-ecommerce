"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.getBrand = exports.getAllBrands = void 0;
const brandsService_1 = require("../services/brandsService");
const getAllBrands = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brands = yield (0, brandsService_1.getAllBrands)();
        res.status(200);
        res.json({
            response: true,
            message: 'true',
            data: brands
        });
    }
    catch (Error) {
        res.status(500);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.'
        });
    }
});
exports.getAllBrands = getAllBrands;
const getBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const brand = yield (0, brandsService_1.getBrand)(Number(id));
        res.status(400);
        res.json({
            response: true,
            message: "true",
            data: brand
        });
    }
    catch (Error) {
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
});
exports.getBrand = getBrand;
const createBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const searchBrand = yield (0, brandsService_1.getBrandByName)(body.name);
        if (searchBrand.length > 0) {
            res.status(200);
            res.json({
                response: false,
                message: "Brand already exists.",
            });
        }
        else {
            const brand = yield (0, brandsService_1.createNewBrand)(body);
            res.status(201);
            res.json({
                response: true,
                message: "Brand created successfully.",
                data: brand
            });
        }
    }
    catch (Error) {
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
});
exports.createBrand = createBrand;
const updateBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const searchBrand = yield (0, brandsService_1.getBrand)(id);
        if (searchBrand.length > 0) {
            res.status(200);
            res.json({
                response: false,
                message: "There is a brand with this name.",
            });
        }
        else {
            const brand = yield (0, brandsService_1.updateBrand)(id, data);
            res.status(201);
            res.json({
                response: true,
                message: "Brand updated successfully.",
                data: brand
            });
        }
    }
    catch (Error) {
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
});
exports.updateBrand = updateBrand;
const deleteBrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const searchBrand = yield (0, brandsService_1.getBrand)(id);
        if (searchBrand.length > 0) {
            const brand = yield (0, brandsService_1.deleteBrand)(id);
            res.status(201);
            res.json({
                respose: false,
                message: 'Brand has been removed.',
                date: brand
            });
        }
        else {
            res.status(200);
            res.json({
                respose: false,
                message: 'The brand does not exist.'
            });
        }
    }
    catch (Error) {
        res.status(400);
        res.json({
            respose: false,
            message: 'An error ocurred with the response.',
            data: Error
        });
    }
});
exports.deleteBrand = deleteBrand;
