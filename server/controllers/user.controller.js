import user, { User } from "../models/user.models.js"
import links from '../models/link.model.js'
import { uploadOnCloudinary } from "../utils/clodinary.js"
import User from "../models/user.models.js";
import { uploadOnCloudinary } from "../config/cloudinary.js";



// Upload Profile Image Controller
const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const userId = req.user.id; // Assuming user ID comes from auth middleware
    const result = await uploadOnCloudinary(req.file.path, userId);

    if (!result) {
      return res.status(500).json({ error: "Cloudinary upload failed" });
    }

    res.status(200).json({
      success: true,
      message: "Profile image updated",
      profileImage: result.url,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { uploadProfileImage };






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