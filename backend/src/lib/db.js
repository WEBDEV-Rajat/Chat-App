import mongoose from "mongoose";
import dotenv from "dotenv";  

dotenv.config();

export const connectDB = async(req,res) => {
   try{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
   } catch(error){
    console.log("MongoDB connection error : " , error);
   }
}