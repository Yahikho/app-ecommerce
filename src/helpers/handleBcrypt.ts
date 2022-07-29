import bcrypt from "bcrypt";

export const encrypt = async (txtPassword: string): Promise<string> => {
    return await bcrypt.hash(txtPassword, 10);
}