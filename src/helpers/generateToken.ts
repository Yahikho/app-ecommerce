import  jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secretTK:string = 'SECRET_TOKEN';

export const getTokenVerify = async (email:string) => {
    return jwt.sign(
        {
            email
        },
        process.env.JWT_SECRET || secretTK,
        {
            expiresIn: "2m"
        }
    )
}

export const verifyToken = async (token:string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || secretTK)
    } catch (error) {
        return null;
    }
}