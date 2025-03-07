import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./db/database.js"
import authRouter from './routes/auth.routes.js'
import cookieParser from "cookie-parser"


const app=express()
dotenv.config()
database()

const corsOptions = {
  origin: "http://localhost:5176",
  credentials:true,
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api/v1/auth',authRouter)
// app.use("/api", crudRoutes);        // CRUD routes

const port=process.env.PORT||3000

app.listen(port,()=>console.log(`server run on ${port}`))