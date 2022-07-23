import express from "express";
import registerEmail from "../controllers/registerEmailsController";
import verifyEmailCode from "../controllers/registerCodeEmailController"; 

import { validateInputEmail, validateInputCode } from "../validators/registerEmailValidator";


const routerVerifyEmail = express.Router();

routerVerifyEmail.post('/auth/registerEmail', validateInputEmail , registerEmail);
routerVerifyEmail.post('/auth/valideCodeEmail', validateInputCode, verifyEmailCode);

export default routerVerifyEmail;