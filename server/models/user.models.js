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
      default: "",
    },
    profileTitle: {
      trim: true,
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "#000000",
    },
    fillLineButton:{
    type: String,
    required: true,
   },
   layaout: {
      type: String,
      required: true,
    },
    selectFont: {
      type: String,
      required: true,
    },
    fontColor: {
      type: String,
      required: true,
    },
    themes: {
      type: String,
      required: true,
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

export const User = mongoose.model("User", userSchema);
