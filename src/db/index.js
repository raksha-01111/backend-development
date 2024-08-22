import mongoose from "mongoose";
import { DB_NAME, PORT } from "../constants.js";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
         const connectionInstance = await mongoose.connect
         (`mongodb+srv://rakshatembhare4:raksha123@cluster0.gchj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/${DB_NAME}`)
         console.log(`\n MongoDB connected !! DB HOST:$
            {connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
};

export default connectDB;