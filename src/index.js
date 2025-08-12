import dotenv from "dotenv";
dotenv.config({ path: './.env' }); // must load first

import connectDB from "./db/index.js";
connectDB();


/*
import express from "express";
const app = express()


( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error", (error)=>{
      console.log("error", error);
      throw error
    })
    app.listen(process.env.PORT , ()=>{
      console.log(`app is listning in port${process.env.PORT}`);
    })
  } catch(error){
  console.log("ERROR:", error)
  throw error
  }
  
})()
  */