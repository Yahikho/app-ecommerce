import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();
//const defaultEmailSendInfoEcommerce:string = process.env.EMAIL_INFO_ECOMMERCE || '';//Email por defecto para enviar información del ecommerce
//const defaultPasswordEmailSendEcommerce:string = process.env.EMAIL_INFO_ECOMMERCE || '';//Password por defecto para enviar información del ecommerce

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "jhonbermudezpa98@gmail.com",
        pass: "tthecxrcopnwzcwe"
    },
});
/*
transporter.verify().then(() => {
    console.log('Ready for send emails');
})
*/