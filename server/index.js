import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import database from "./db/database.js"
import userRegister from './routes/auth.routes.js'
import userLogin from './routes/auth.routes.js'

const app=express()
dotenv.config()
database()


app.use(cors({
    credentials:true
}))
// app.use(express.json())
// app.use(cookieParser())


app.use('api/v1/register',userRegister)
app.use('api/v1/login',userLogin)

const port=process.env.PORT||3000

app.listen(console.log(`server run on ${port}`))