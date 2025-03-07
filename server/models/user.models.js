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
  },
  { timestamps: true }
);


// userSchema.pre("save", function (next) {
//   if (this.confirmPassword !== this.password) {
//     return next(new Error("Passwords do not match"));
//   }
//   next();
// });

export const User=mongoose.model('User',userSchema)