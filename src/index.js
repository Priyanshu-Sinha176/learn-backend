﻿import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

connectDB()

    .then(() => {

        app.on( "error" , (error) => {
            console.log("Err : ", error);
            throw error
        });

        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is running at Port: ${process.env.PORT || 8000}`);
        });

    })

    .catch((err) => {
        console.log(`MONGODB CONNECTION FAILED!!!`, err);
    });
