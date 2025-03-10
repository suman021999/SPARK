import mongoose, { Schema } from "mongoose";

const linkSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    avatar: {
      type: String, //cloudeniry url
      required: true,
    },
    createdLinks: {
      type: Schema.Types.ObjectId,
      ref: "link",
      required: false,
    },
    savedLinks: {
      type: Schema.Types.ObjectId,
      ref: "link",
      required: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Link = mongoose.model("Link", linkSchema);









// const mongoose = require('mongoose');
// const { Schema } = mongoose; // Import Schema

// const userSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     avatar: {
//         type: String, // Cloudinary URL
//         required: true,
//     },
//     createdLinks: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Link', // Capitalized reference
//         required: false
//     }],
//     savedLinks: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Link', // Capitalized reference
//         required: false
//     }],
//     createdBy: {
//         type: Schema.Types.ObjectId,
//         ref: 'User', // Capitalized reference
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('User', userSchema);
