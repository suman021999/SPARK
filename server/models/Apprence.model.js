import mongoose, { Schema } from "mongoose";

const apprenceSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    grid:{
      type: String,
      required: true,
    },
    stack:{
      type: String,
      required: true,
    },
    carousel:{
      type: String,
      required: true,
    },
    fill:{
      type: String,
      required: true,
    },
    outline:{
      type: String,
      required: true,
    },
    hardshadow:{
      type: String,
      required: true,
    },
    softshadow:{
      type: String,
      required: true,
    },
    Special:{
      type: String,
      required: true,
    },
    buttoncolor:{
      type: String,
      required: true,
    },
    buttonfontcolor:{
      type: String,
      required: true,
    },
    fonts:{
      type: String,
      required: true,
    },
    color:{
      type: String,
      required: true,
    },
    themes:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const Apprence= mongoose.model("Apprence", apprenceSchema);