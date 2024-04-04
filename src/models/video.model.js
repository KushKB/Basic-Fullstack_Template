import mongoose from "mongoose";
const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String,        // cloudinary url
        required:true,
    },
    thumbmail:{
        type:String,        // cloudinary url
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:[true,"Enter the title"],
        unique:true,
    },
    duration:{
        type:Number,            // cloudinary url
        required:true,
    },
    views:{
        type:Number,
        default:0,
        required:true,
    }, 
    isPublished:{
        type:Boolean,
        default:true,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"New_User",
        required:true,
    },
},{timestamps:true})

const Video=mongoose.model("Video",videoSchema);