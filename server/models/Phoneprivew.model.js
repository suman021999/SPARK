import mongoose, { Schema } from "mongoose";

const phonePreviewSchema = new Schema(
  {
    avatar: String,
    username: String,
    bio: String,
    profileTitle: String,

    userLinks: [
      {
        url: String,
        platform: String,
      }
    ],

    userShop: [
      {
        title: String,
        image: String,
        price: String,
        url: String,
      }
    ],

    bgColor: String,
    textColor: String,
    selectedButtonStyle: String,
    layoutbox: String,
    fontChange: String,
    fontColor: String,
    theam: String,
  },
  { timestamps: true }
);

export const PhonePreview = mongoose.model("PhonePreview", phonePreviewSchema);
