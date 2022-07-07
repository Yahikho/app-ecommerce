import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createCode = async ():Promise<number> => {

    let randonCode:number = 0;
    let getCodes:number = 0;

    while(randonCode === getCodes){
        randonCode = Math.floor(( Math.random() * (9999 * 1 + 1)) + 1);
        const result = await prisma.verifyEmail.findUnique({
            where: { code_verify : randonCode },
            select: { code_verify : true }
        });

        getCodes = result?.code_verify === undefined ? 0 : result?.code_verify;
    }

    return randonCode;
}

export default createCode