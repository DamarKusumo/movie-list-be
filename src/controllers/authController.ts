import { Request, Response } from 'express';
import { createUser } from '../services/createUser';
import { login } from '../services/login';
import { hashPassword } from '../services/encryptService';

export const loginHandler = async (req: Request, res: Response) => {
    const result = await login(req.body.email, req.body.password);
    if (result.id) {
        res.status(200).json({ token: result.id, email: result.email, name: result.name });
    } else {
        res.status(401).json({ message: result });
    }
};

export const registerHandler = async (req: Request, res: Response) => {
    const result = await createUser(req.body.name, req.body.email, req.body.password);
    res.status(201).json(result);
};

export const encryptHandler = async (req: Request, res: Response) => {
    const result = await hashPassword(req.body.password);
    res.status(201).json(result);
};