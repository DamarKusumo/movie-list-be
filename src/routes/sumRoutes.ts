import { Router } from "express";
import { sumHandler } from "../controllers/sumController";


const router = Router();

router.post("/sum", sumHandler);

export default router;