import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import database from "./db/database.js";
import authRouter from './routes/auth.routes.js';
import crudRoutes from './routes/user.routes.js';
import cookieParser from "cookie-parser";

const app = express(); // Correct initialization
dotenv.config();
database();

const corsOptions = {
  origin: [
    process.env.FRONTEND_URL || "http://localhost:3000",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/auth', authRouter);
app.use("/api", crudRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

