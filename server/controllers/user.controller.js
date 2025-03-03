import user from "../models/user.models.js"
import links from '../models/link.model.js'


const user=async(req,res,next)=>{
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