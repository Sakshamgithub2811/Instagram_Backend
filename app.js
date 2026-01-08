const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.Port || 3000;
// console.log(PORT);


app.get('/',(req,res)=>{
    res.send("Welcome to the home page");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port , ${PORT}`);
});