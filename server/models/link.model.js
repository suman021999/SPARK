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
        createdLinks:{
            type:Schema.Types.ObjectId,
            ref:'link',
            required:false
          },
        savedLinks:{
            type:Schema.Types.ObjectId,
            ref:'link',
            required:false
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