const express = require("express");
// const http = require("http");

const app = express();
app.get("/", (req,res)=>{
    return res.send("Hello From Home Page.");
})
app.get("/about",(req,res)=>{
    return res.send("Send request from about page.");``
})

app.listen(8000, ()=> console.log("Server Started via express."))
// const myServer = http.createServer();

// myServer.listen(8000, ()=> console.log("Server started."))