const cloudinary = require("cloudinary").v2;
const User = require("../models/User");

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload and save image URL
const uploadAvatar = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "avatars",
    });

    const user = await User.findByIdAndUpdate(req.user.id, { avatar: result.secure_url }, { new: true });
    res.json({ success: true, avatar: user.avatar });
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
};

module.exports = { uploadAvatar };
