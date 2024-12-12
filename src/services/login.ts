import prisma from "./dbService";
import bcrypt from 'bcrypt';

export const login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return user;
        } else {
            return "Invalid password";
        }
    }
    return "User not found";
};
