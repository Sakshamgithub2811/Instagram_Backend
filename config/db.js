const mongoose = require('mongoose');

const connectToDB = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is Connect To DB");
    }
    catch(error){
        console.log("MongoDB connection is failed");
        process.exit(1);
    }
}
