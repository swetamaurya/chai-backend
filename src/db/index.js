import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'  // Ensure this is the correct path to your environment file
});

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
