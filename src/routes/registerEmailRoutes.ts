import express from "express";
import { validateInputEmail, validateInputCode } from "../validators/registerEmailValidator";
import { registerEmail, verifyEmail } from "../controllers/registerEmailsController";
//import verifyEmailCode from "../controllers/registerCodeEmailController"; 

const routerVerifyEmail = express.Router();

routerVerifyEmail.post('/auth/registerEmail', validateInputEmail , registerEmail);
routerVerifyEmail.post('/auth/valideCodeEmail', validateInputCode, verifyEmail);

export default routerVerifyEmail;