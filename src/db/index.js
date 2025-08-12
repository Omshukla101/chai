import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  // Debug print to ensure we load the env var
  console.log("MONGODB_URL from env:", JSON.stringify(process.env.MONGODB_URL));

  if (!process.env.MONGODB_URL) {
    console.error("❌ MONGODB_URL is missing from .env");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
