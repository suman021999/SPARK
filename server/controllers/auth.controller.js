import {User}  from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const registerUser= async(req,res)=>{
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        if(!firstName || !lastName || !email|| !password|| !confirmPassword){
            return res.status(400).json({ msg: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
          }
          if (password.length < 8) {
            return res.status(400).json({ msg: "Password must be at least 8 characters long" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ msg: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user=new User({
            firstName,
            lastName,
            email,
            username: email.split("@")[0],
            password: hashedPassword,
        })
        await user.save()
        return res.status(201).json({ msg: "User registered successfully" });
    } 
    catch (err) {
        console.log("error",err)
        return res.status(500).json({ msg: "Internal Server Error" });
    }
       
} 



export const loginUser=async(req,res)=>{
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({msg:"user not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");
        if (!isPasswordCorrect) {
          return res.status(401).json({ msg: "Invalid credentials" });
        }
        const payload={
            id:user._id,
            name: user.username,
           }
           const token=jwt.sign(payload,process.env.SECRET_KEY,{ expiresIn: "857d" })  
           return res.status(200).json({token,user,msg:"Login succesfully"})       
    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error" });
    }   
} 

export const updateUserProfile = async (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, email, password, bio, category, username } = req.body;
  
    try {
      let updateFields = { firstName, lastName, bio, category };
  
      if (username) {
        const existingUser = await User.findOne({ username });
        if (existingUser && existingUser._id.toString() !== userId) {
          return res.status(400).json({ msg: "Username is already in use" });
        }
        updateFields.username = username;
      }
  
      if (email) {
        const existingEmail = await User.findOne({ email });
        if (existingEmail && existingEmail._id.toString() !== userId) {
          return res.status(400).json({ msg: "Email is already in use" });
        }
        updateFields.email = email;
      }
  
      if (password) {
        const salt = await bcrypt.genSalt(10);
        updateFields.password = await bcrypt.hash(password, salt);
      }
  
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: updateFields },
        { new: true, runValidators: true }
      );
  
      if (!user) return res.status(404).json({ msg: "User not found" });
  
      res.status(200).json({ msg: "Profile updated successfully", user });
  
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ msg: "Server error", error: error.message });
    }
  };
  



// Logout
export const logout = (req, res) => {
  return res
    .cookie("token", "", { expires: new Date(0), httpOnly: true })
    .json({
      message: "User logged out successfully.",
      success: true,
    });
};

export const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
      const user = await User.findById(userId).select("-password"); 
      if (!user) {
          return res.status(404).json({ msg: "User not found" });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ msg: "Server error", error: error.message });
  }
};


export const handleSave =async (req, res) => {
  const { userId, profileTitle, bio, bgColor,fillLineButton,layaout,selectFont,fontColor,themes,fontChange } = req.body;

  if (!userId) return res.status(400).json({ error: "User ID is required" });

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileTitle, bio, bgColor,layaout,fillLineButton,selectFont,fontColor,themes,fontChange },
      { new: true }
    );

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};   


