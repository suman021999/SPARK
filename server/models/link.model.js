import mongoose, { Schema } from "mongoose";


const linkSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
            
        },
        createdBy:{
            type:Schema.Types.ObjectId,
            ref:'user',
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
    },
    { timestamps: true }
)






export const Link=mongoose.model('Link',linkSchema)