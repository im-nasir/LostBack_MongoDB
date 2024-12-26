import dotenv from "dotenv";
import express from 'express'
import conectDB from "./db/dbindex.js";

dotenv.config({
    path: './.env'
})



conectDB()

/*
(  async () => {
    try{
       await mongoose.connect(`$process.env.MONGODB_URI/${DB_NAME}`)
       app.on("ERROR", (error) => {
        console.log("ERR:" , error);
        throw error
       })

       app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })

    }
    catch(error) {
        console.error("ERROR", error)
        throw error 
    }
} )()
*/