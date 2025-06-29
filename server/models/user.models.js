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
      default: ""
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
    default: false
   },
   layaout: {
      type: String,
      required: true,
      default: "stack"
    },
    selectFont: {
      type: String,
      required: true,
      default: "Roboto"
    },
    fontChange: {
      fontFamily: { type: String, default: "Roboto" },
      url: { type: String, default: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" }
    },
    fontColor: {
      type: String,
      required: true,
      default: "#000000"
    },
    themes: {
      type: String,
      required: true,
      default: "default"
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
