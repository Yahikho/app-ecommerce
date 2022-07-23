import express from 'express';
import dotenv from 'dotenv';
import regiterEmail from './routes/registerEmailRoutes'


//Varibles
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middlewares
app.use(express.json());


//Routes
app.use(regiterEmail);



app.listen(PORT, () => {
 console.log( `Server running on port ${PORT}`);
});
