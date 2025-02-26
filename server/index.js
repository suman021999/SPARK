import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./db/database.js"

const app=express()
dotenv.config()
database()


app.use(cors({
    credentials:true
}))

const port=process.env.PORT||3000

app.listen(console.log(`server run on ${port}`))