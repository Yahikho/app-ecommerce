import  express from "express";
import  createItemVerifyEmail from "../controllers/verifyEmails";
import { validateInputEmail, validateInputCode } from "../validators/varifyEmailValidate";
import verifyEmailCode from "../controllers/verifyCodeEmail"; 

const routerVerifyEmail = express.Router();

routerVerifyEmail.post('/auth', validateInputEmail , createItemVerifyEmail);
routerVerifyEmail.post('/auth/valideCodeEmail', validateInputCode, verifyEmailCode);

export default routerVerifyEmail;