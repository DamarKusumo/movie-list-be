import { Router } from "express";
import { getMoviesHandler, getMoviesByIDHandler } from "../controllers/movieController";

const router = Router();

router.get("/", getMoviesHandler);
router.get("/:id", getMoviesByIDHandler);

export default router;