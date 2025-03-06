import user, { User } from "../models/user.models.js"
import links from '../models/link.model.js'
import authmiddleware from '../middlewares/auth.middleware.js'



export const user=async(req,res,next)=>{
    try {
        const{id}=req.user
        const user=await user.findById(id)

        if(!user){
            return res.status(404).json({msg:"user not found"})

        }
         res.json(user).status(200)
    } catch (error) {
        next(error)
    }
}

// delete

export const linkdelete=async(req,res,next)=>{
    try {
        const{id}=req.user
        const user=await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        res.json({msg:'user deleted successfully'}).status(200)
    } catch (err) {
        next(err)
    }
}

// post

// const linkCreated=async(req,res,next)=>{
//     try {
        
//     } catch (err) {
//         next(err)
//     }
// }

//update

export const linkupdate=async(req,res,next)=>{
    try {
        const {id}=req.user
        const user=await user.findByIdAndDelete(id,req.body)
        if(!user){
            return res.status(404).json({msg:'user not found'})
        }
        res.json(user).status(200)
    } catch (err) {
        next(err)
    }
}