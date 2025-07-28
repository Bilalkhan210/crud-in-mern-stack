import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


export const contactdb = ()=>{
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("datbase connect")})}