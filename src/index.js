// require('dotenv').config()({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME, PORT } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()



.catch((err) =>{
    console.log("MONGO db connection failed !!! ", err);
})












/*
(async () => {
    try{
        await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
         app.on("errror", () => {
            console.log("ERRR:", error);
            throw error
         })
         app.listen(process.env.PORT,() => {
            console.log(`server running on port ${process.env.PORT}`);
         })
    } catch(error) {
        console.error("ERROR: ", error)
        throw err
    }
})()*/