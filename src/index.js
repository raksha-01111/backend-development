// require('dotenv').config()({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants"; 
import connectDB from "./db/index";


dotenv.config({
    path: './env'
})


connectDB()












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