import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./db/database.js"
import authRouter from './routes/auth.routes.js'
import cookieParser from "cookie-parser"


const app=express()
dotenv.config()
database()



// app.use(cors(corsOptions))

// const corsOptions = {
//     origin:"http://localhost:5173",
//     credentials:true
//   }
app.use(express.json())
app.use(cookieParser())

// router
app.use('api/v1/auth',authRouter)
// app.use("/api", crudRoutes);        // CRUD routes

const port=process.env.PORT||3000

app.listen(console.log(`server run on ${port}`))