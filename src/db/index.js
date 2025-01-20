import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'; 

/*
you can use .env here or in main index.js 
it is advised to use it in main because we want to load data as ssson as possible 

import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
*/

const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! \n DB NAME: ${DB_NAME} \n HOST: ${connectionInstance.connection.host}`);
    }
    
    catch (error) {
        console.error(`Failed to connect to MongoDB. Error: ${error.message}`);
        process.exit(1)
    }

}

export default connectDB