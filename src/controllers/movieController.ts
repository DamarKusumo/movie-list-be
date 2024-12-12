import { Request, Response } from 'express';
import { getMovies, getMoviesByID } from '../services/movieService';

export const getMoviesHandler = async (req: Request, res: Response) => {
    const result = await getMovies();
    res.status(200).json(result);
};

export const getMoviesByIDHandler = async (req: Request, res: Response) => {    
    const id = Number(req.params.id);
    const result = await getMoviesByID(id);
    res.status(200).json(result);
};