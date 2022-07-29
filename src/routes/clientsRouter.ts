import express from "express";
import { createClient } from "../controllers/clientsController";

const routerClients = express.Router()

routerClients.post('/ecommerce/auth/clientes/register', createClient);

export default routerClients;