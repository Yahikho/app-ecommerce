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
exports.updateRegisterEmailByCode = exports.getResgisterEmailByCode = exports.updateRegisterEmailByEmail = exports.createRegisterEmail = exports.getResgisterEmailByEmail = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getResgisterEmailByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.registerEmail.findMany({
        where: { email }
    });
});
exports.getResgisterEmailByEmail = getResgisterEmailByEmail;
const createRegisterEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.registerEmail.create({
        data
    });
});
exports.createRegisterEmail = createRegisterEmail;
const updateRegisterEmailByEmail = (email, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.registerEmail.update({
        where: { email },
        data
    });
});
exports.updateRegisterEmailByEmail = updateRegisterEmailByEmail;
const getResgisterEmailByCode = (code_verify) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.registerEmail.findUnique({
        where: { code_verify }
    });
});
exports.getResgisterEmailByCode = getResgisterEmailByCode;
const updateRegisterEmailByCode = (code_verify, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.registerEmail.update({
        where: { code_verify },
        data
    });
});
exports.updateRegisterEmailByCode = updateRegisterEmailByCode;
