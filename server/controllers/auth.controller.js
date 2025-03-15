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
           const token=jwt.sign(payload,process.env.SECRET_KEY,{ expiresIn: "57d" })

          //  return res.status(200).json({token,msg:"Login succesfully"})     
           return res.status(200).json({token,user,msg:"Login succesfully"})     
          
    } 
    
    catch (err) {
        console.log("error",err)
        return res.status(500).json({ msg: "Internal Server Error" });
    }
       
} 
// namepage

export const updateUserProfile = async (req, res) => {

    const { userId } = req.params;
    console.log("Received userId:", userId);

    const { bio, category } = req.body;
    console.log("Received Data:", { bio, category })

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { bio, category },
        { new: true, runValidators: true }
      );
  
      if (!user) {return res.status(404).json({ msg: "User not found" })}

      console.log("Updated User:", user);

        res.status(200).json({ user });

    } catch (error) {
      res.status(500).json({ msg: "Server error", error: error.message });
    }
  };


// Logout

export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
      message: "user logged out successfully.",
      success: true,
    });
  };










