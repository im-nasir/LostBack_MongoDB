import dotenv from "dotenv";
import express from 'express'
import conectDB from "./db/dbindex.js";

dotenv.config({
    path: './.env'
})



conectDB()
.then( () => {
    app.listen(process.env.PORT || 8000)
    console.log(` Server is running on PORT : ${process.env.PORT} `)
})
.catch((Error) => {
    console.log("MongoDB connection Failed", Error);
});


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