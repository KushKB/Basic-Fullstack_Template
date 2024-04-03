import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.DATABASE_URI}/${DB_Name}`);
        console.log(`\n MongoDB connected! , DB host : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(`This is error :- ${error}`);
        process.exit(1);
    }
}
export default connectDB;