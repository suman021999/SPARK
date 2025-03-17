import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.models.js";
import streamifier from "streamifier";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (buffer, userId) => {
  try {
    if (!buffer || !userId) {
      throw new Error("Missing file buffer or user ID");
    }
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

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: result.url },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error("User not found or update failed");
    }
    return result.url;
  } catch (err) {
    console.error("Upload error:", err);
    return null;
  }
};

export { uploadOnCloudinary };




export const deleteFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) throw new Error("Image URL required for deletion");
    const parts = imageUrl.split("/");
    const filename = parts.pop().split(".")[0];
    const folder = parts[parts.length - 1] === "avatars" ? "avatars/" : "";

    const publicId = `${folder}${filename}`;
    const result = await cloudinary.uploader.destroy(publicId);
    if (result.result !== "ok") {
      throw new Error("Failed to delete image from Cloudinary");
    }

    return true;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    return false;
  }
};
