
import {Link} from '../models/link.model.js'
import {User} from '../models/user.models.js'
import { uploadOnCloudinary } from "../utils/clodinary.js"




// Upload Profile Image Controller

export const uploadProfileImage = async (req, res) => {
  try {
    console.log("Received request to upload profile image");
    if (!req.file) {
      console.error("No file received");
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("File received:", req.file);

    const userId = req.user.id; 

    if (!userId) {
      console.error("User ID not found in request");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = await uploadOnCloudinary(req.file.path);

    if (!result ||!result.url) {
      return res.status(500).json({ error: "Cloudinary upload failed" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.url },
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile image updated",
      avatar: result.url,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



// remove Profile Image Controller

export const removeProfileImage = async (req, res) => {
  try {
    const userId = req.user.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: null }, // Set avatar to null
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile image removed",
    });
  } catch (error) {
    console.error("Error removing profile image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};













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


// user get
// router.get
// ("/avatar/:id",

//  const Userget =async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json({ avatar: user.avatar });
//   } catch (err) {
//     res.status(404).json({ error: "User not found" });
//   }
// };