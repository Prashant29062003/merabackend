// Express.js Framework

// Introduction to Express.js

const express = require("express");
const app = express();
const port = 3000

app.get("/",(req,res)=>{
    res.send("Prashant Kumar.")
})

app.listen(port, ()=>{
    console.log("===============================")
    console.log("server created at ",port);
    console.log("===============================")
    
})