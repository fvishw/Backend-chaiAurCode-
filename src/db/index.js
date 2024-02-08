// require("dotenv").config({ path: "/.env" });
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("DBconnected !!!");
  } catch (error) {
    console.error(`Mongodb error:${error}`);
    process.exit(1);
  }
};
export default connectDB;
