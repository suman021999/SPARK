import User  from "../models/user.models.js"
import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"




export const registerUser= async(req,res,next)=>{

    try {

        const{name,email,password}=req.body
        console.log(req.body)
        console.log(name,email,password,mobile)

        const hashedPassword=bcrypt.hashSync(password,10)

        const user=new User({
            name,
            email,
            phone,
            password:hashedPassword,
        })
        await user.save()

       return res.status(200).json({message:'okk'})
    
       
    } 
    catch (error) {
        next(err)
        console.log("error",error)
    }
       
} 



export const loginUser=(req,res)=>{

    try {
       return res.status(200).json({message:'okk'})
    
       
    } catch (error) {

        console.log("error",error)
    }
       
} 