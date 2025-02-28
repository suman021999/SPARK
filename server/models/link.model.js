import mongoose, { Schema } from "mongoose";


const linkSchema = new Schema(
    {

    },
    { timestamps: true }
)






export const Link=mongoose.model('Link',linkSchema)