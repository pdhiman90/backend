import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `mongodb://localhost:27017/${DB_NAME}`);
        console.log(`\n MongoDB connection Successfull !! DB HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MongoDB connection Error", error);
        process.exit(1);
    }
}


export default connectDB;