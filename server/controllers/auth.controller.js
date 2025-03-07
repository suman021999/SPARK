import {User}  from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import authmiddleware from '../middlewares/auth.middleware.js'



export const registerUser= async(req,res,next)=>{

    try {

        const{name,email,password,confirm_password}=req.body
        console.log(req.body)
        console.log(name,email,password,confirm_password)

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



export const loginUser=async(req,res,next)=>{

    try {

        const{email,password}=req.body
        const user=await User.findOne({email})
        const isPasswordCorrect=bcrypt.compare(password, user.password)
        if(!user){
            return res.status(401).json({msg:"user not found"})
        }
       
        if(!isPasswordCorrect){
            return res.status(401).json({msg:"inviled credentials"})
        }

        const payload={
            id:user._id,
            name:user.name
           }
           const token=jwt.sign(payload,process.env.SECRET_KEY)
           return res.status(200).json({token,msg:"Login succesfully"})

    
       
    } 
    catch (error) {
        next(err)
        console.log("error",error)
    }
       
} 

// Logout

export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
      message: "user logged out successfully.",
      success: true,
    });
  };