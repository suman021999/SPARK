import {User} from '../models/user.models.js'
import { uploadOnCloudinary,deleteFromCloudinary } from "../utils/clodinary.js"
import { Link } from "../models/link.model.js";


// router.put("/update-profile/:userId",

// export const uploadProfiletext= async (req, res) => {
//   try {
//     const { profileTitle, bio } = req.body;

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.userId,
//       { profileTitle, bio },
//       { new: true }
//     );

//     res.json({ success: true, message: "Profile updated", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// }


// Upload Profile Image Controller

export const uploadProfileImage = async (req, res) => {
  try {
    // console.log("Received request to upload profile image");

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // console.log("File received:", req.file);

    const userId = req.body.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Upload image buffer directly to Cloudinary
    const imageUrl = await uploadOnCloudinary(req.file.buffer, userId);

    if (!imageUrl) {
      return res.status(500).json({ error: "Cloudinary upload failed" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile image updated",
      avatar: imageUrl,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// remove Profile Image Controller
export const removeProfileImage = async (req, res) => {
  try {
    // const userId = req.body;
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

 if (user.avatar) {
  const deleted = await deleteFromCloudinary(user.avatar);
  if (!deleted) return res.status(500).json({ error: "Cloudinary deletion failed" });
}

 await User.findByIdAndUpdate(userId, { avatar: null });

    res.status(200).json({
      success: true,
      message: "Profile image removed",
    });
  } catch (error) {
    console.error("Error removing profile image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// createlink

export const createLink = async (req, res) => {
  try {
    
    const { url, title } = req.body;
    const userId = req.user?.id; 

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }


    if (!url || !title) {
      return res.status(400).json({ message: "Title and URL are required" });
    }

    const newLink = new Link({ userId, url, title });
    await newLink.save();

    res.status(201).json({ message: "Link created successfully", link: newLink });
  } catch (error) {
    console.error("Error creating link:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get all links for a use

export const getUserLinks = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }
    const userId = req.user.id;
    const links = await Link.find({ userId });

    res.status(200).json(links);
  } catch (error) {
    console.error("Error fetching user links:", error);
    res.status(500).json({ message: "Server error", error });
  }
};



// Get a single link by ID
export const getLinkById = async (req, res) => {
  try {
    const { linkId } = req.params;
    const link = await Link.findById(linkId);

    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.status(200).json(link);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a link
export const updateLink = async (req, res) => {
  try {
    const { linkId } = req.params;
    const { url, title } = req.body;
    const userId = req.user?.id; 

        if (!userId) {
          return res.status(401).json({ message: "Unauthorized: No user ID found" });
        }
    const updatedLink = await Link.findByIdAndUpdate(
      linkId,
      { url, title },
      { new: true }
    );

    if (!updatedLink) {
      return res.status(404).json({ message: "Link not found" });
    }

    res.status(200).json({ message: "Link updated successfully", link: updatedLink });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};







// // Delete a link
// export const deleteLink = async (req, res) => {
//   try {
//     const { linkId } = req.params;

//     const deletedLink = await Link.findByIdAndDelete(linkId);

//     if (!deletedLink) {
//       return res.status(404).json({ message: "Link not found" });
//     }

//     res.status(200).json({ message: "Link deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };



