import { Request, Response } from 'express';
import { sum } from '../services/sumService';

export const sumHandler = (req: Request, res: Response) => {
    const result = sum(req.body.x, req.body.y);
    res.status(201).json(result);
};
