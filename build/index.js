"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registerEmailRoutes_1 = __importDefault(require("./routes/registerEmailRoutes"));
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
const brandsRouter_1 = __importDefault(require("./routes/brandsRouter"));
const clientsRouter_1 = __importDefault(require("./routes/clientsRouter"));
//Varibles
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
//Routes
app.use(registerEmailRoutes_1.default);
app.use(productsRouter_1.default);
app.use(brandsRouter_1.default);
app.use(clientsRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
