import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
        `mongodb+srv://princedhiman73573:prince90@sharing0.wt79u.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);

        console.log(`\n MongoDB connection Successfull !! DB HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MongoDB connection Error", error);
        process.exit(1);
    }
}


export default connectDB;