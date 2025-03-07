import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import User from "../models/user.models.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, userId) => {
  try {
    if (!localFilePath || !userId) {
      throw new Error("Missing file path or user ID");
    }

    if (!fs.existsSync(localFilePath)) {
      throw new Error("File does not exist at given path");
    }

    // Upload file to Cloudinary
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("Uploaded to Cloudinary:", res.url);

    // Update user's profile image in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileImage: res.url },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error("User not found or update failed");
    }

    console.log("Updated User:", updatedUser);

    // Remove the local file
    fs.unlinkSync(localFilePath);

    return res;
  } 
  
  
  
  catch (err) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };
