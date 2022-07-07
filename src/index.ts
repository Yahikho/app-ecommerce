import express from 'express';
import dotenv from 'dotenv';
import routerVerifyEmail from '../src/routes/verifyEmail'


//Varibles
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());


//Routes
app.use(routerVerifyEmail);



app.listen(PORT, () => {
 console.log( ` Server running on port ${PORT}`);
});
