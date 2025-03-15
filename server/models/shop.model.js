import mongoose, { Schema } from "mongoose";

 const shopSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    clicks: {
      type: Number,
      default: 0, // Track the number of times the link is clicked
    },
    isActive: {
      type: Boolean,
      default: true, // Allow enabling/disabling links
    }
  },
  { timestamps: true }
);

export const Shop = mongoose.model("Shop", shopSchema);