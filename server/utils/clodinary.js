import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.models.js";
import streamifier from "streamifier";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload function (Direct Upload to Cloudinary)
const uploadOnCloudinary = async (buffer, userId) => {
  try {
    if (!buffer || !userId) {
      throw new Error("Missing file buffer or user ID");
    }

    // Convert buffer to a stream and upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "avatars",
          resource_type: "auto",
        },
        (error, uploadedFile) => {
          if (error) reject(error);
          else resolve(uploadedFile);
        }
      );
      streamifier.createReadStream(buffer).pipe(stream);
    });

    console.log("Uploaded to Cloudinary:", result.url);

    // Update user's profile image in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.url },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error("User not found or update failed");
    }

    console.log("Updated User:", updatedUser);
    return result.url;
  } catch (err) {
    console.error("Upload error:", err);
    return null;
  }
};

export { uploadOnCloudinary };
