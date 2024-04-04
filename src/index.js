
/*import mongoose from "mongoose";
import { DB_Name } from "./constants";
const app=express();
const PORT=process.env.PORT;
mongoose.connect("mongodb://:127.0.0.1:/27017/test");// This is not the proff. approach
require('dotenv').config({path:'./env'});    // This disturbs the consistency of code
import express  from "express";
---------------------------------------------------------------------------------------------------
---> Second way to make connection, also have to make changes in package.json in scripts:{"dev":"nodemon -r dotenv/config --experimental-json-modules src/index.js"}
*/

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({
    path:'./.env',
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("You are listening")
    })
    app.on("error",(error)=>{
        console.log("This is error part of the application");
    })
})
.catch(
    (err)=>{
        console.log("Connection failed",error);
    }
)








/*---------> First Way to make connection 

// IIFE (Immediately Invoked Function Expression)   -- Use of IIFE in the next line

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        app.on("error",(error)=>{
            console.log("Application not able to establish connection with the database");
            throw error;
        })

        app.listen(PORT,()=>{
            console.log(`process is listening on ${PORT}`);
        });
    }
    catch(error){
        console.log("Error : ",error);
        throw error;
    }
})
const User=new mongoose.Schema({},{timestamps:true});

export const New_User=mongoose.model("New_User",User);

*/