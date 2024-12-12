import prisma from "./dbService";

export const getMovies = async () => {
    const movies = await prisma.movie.findMany();
    return movies;
};

export const getMoviesByID = async (id: number) => {
    const movies = await prisma.movie.findMany({
        where: {
            id: id
        },
    });
    return movies;
};