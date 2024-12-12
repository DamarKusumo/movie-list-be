import prisma from "./dbService";

export const createUser = async (name: string, email: string, password: string) => {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
    return user;
};