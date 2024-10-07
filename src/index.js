// require('dotenv').config({path:'./env'});

import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import express from 'express'

const app = express();

dotenv.config();

// Approach 2 professional 

connectDB()
    .then(() => {
        // console.log("Hello");
        const port = process.env.PORT || 8000;
        // app.on((error)=>{
        //     console.log("server connection failed : ",error);
        //     throw error;
        // }); 
        app.listen(port, () => {
            console.log(`Server is listening on PORT :${port}`)
        });
    })
    .catch((error) => {
        console.log("mongodb connection failed !!!", error);
    })




























/*
// Approach 1 basic
import express from "express";

const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port : ${process.env.PORT} `);
        })
    } catch (error) {
        console.error("Error: ",error);
        throw error;
    }
})()
    */