import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
    },
    confirm_password: {
      type: String,
    },
    avatar: {
      type: String, 
      required: false,
    },
    bio: {
      type: String, 
      trim: true,
      default: "" 
    },
    profileTitle: { 
      trim: true,
      type: String, 
      default: "" 
    },

    category: {
      type: String,
      enum: [
        "Business",
        "Creative",
        "Education",
        "Entertainment",
        "Fashion & Beauty",
        "Food & Beverage",
        "Government & Politics",
        "Health & Wellness",
        "Non-Profit",
        "Other",
        "Tech",
        "Travel & Tourism",
      ],
    },
  },


  { timestamps: true }
);

export const User=mongoose.model('User',userSchema)