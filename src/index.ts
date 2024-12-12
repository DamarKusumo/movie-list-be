import express, { Request, Response } from "express";
import sumRoutes from "./routes/sumRoutes";
import authRoutes from "./routes/authRoutes";
import movieRoutes from "./routes/movieRoutes";
import dotenv from 'dotenv'; 
import { encryptHandler } from "./controllers/authController";
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = (process.env.PORT || "3000");

app.use(express.json());
const options: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

app.use(cors(options));
app.options('*', cors(options));
app.use("/", sumRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.post("/encrypt", encryptHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
