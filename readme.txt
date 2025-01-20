node src/db/index.js - to run 

we can use below if we dont want to create seperate index.js inside db 

import express from "express";
const app = express()

; ( async () => {

    try {

        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on( "error" , (error) => {

            console.log("Err : ", error);
            throw error
        })

        app.listen(process.env.Port , () => {
            console.log(`App is listening on Port : ${process.env.Port}` );
        })

    } 
    
    catch (error) {
        console.error("Error: " , error)
        throw error
    }
}) () 

* App.use is usued only with middleware or configration setting
* jwt is a brearer token
