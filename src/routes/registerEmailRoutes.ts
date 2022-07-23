import express from "express";
import { validateInputEmail, validateInputCode } from "../validators/registerEmailValidator";
import { registerEmail, verifyEmail } from "../controllers/registerEmailsController";

const regiterEmail = express.Router();

regiterEmail.post('/auth/registerEmail', validateInputEmail , registerEmail);
regiterEmail.post('/auth/valideCodeEmail', validateInputCode, verifyEmail);

export default regiterEmail;