import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

// This function connects to MongoDB using Mongoose
const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database")
    } catch (error) {
        console.log('error connecting to mongodb', error);
    }
}

export default connectToMongoDB;