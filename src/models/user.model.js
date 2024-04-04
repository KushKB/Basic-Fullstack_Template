import mongoose from 'mongoose'
const user=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            index:true,
            trim:true, // when we want to make any field searchable and with optimization
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        avatar:{
            type:String,            // cloudinary url
            required:true,
            unique:true,
        },
        coverimage:{
            type:String,            // cloudinary url
           
        },
        fullname:{
            type:String,
            required:true,
            index:true,
            trim:true,
        },
        password:{
            type:String,
            required:[true,"Password is required"],
        },
        watchhistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video",

            }
        ],
        refreshToken:{
            type:String,
        }

    },{timestamps:true} // This timestamp will give us createdAt , UpdatedAt
)
export const New_User=mongoose.model("New_User",user);