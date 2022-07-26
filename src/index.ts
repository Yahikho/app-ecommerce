import express from "express";
import dotenv from "dotenv";
import regiterEmail from "./routes/registerEmailRoutes";
import productosRouter from "./routes/productsRouter"; 
import routerBrands from "./routes/brandsRouter";

//Varibles
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());


//Routes
app.use(regiterEmail);
app.use(productosRouter);
app.use(routerBrands)


app.listen(PORT, () => {
 console.log( `Server running on port ${PORT}`);
});
