// const http = require("http");

// const PORT = 3000 
// const meraServer = http.createServer((request, response) =>{
//     console.log(request.headers);
//     console.log("New Request recieve");
//     response.end("Hello Server...")
// });

// meraServer.listen(PORT, () => console.log(`server started at ${PORT}`))


// logging-data 
const http = require("http");
const fs = require("fs");

const PORT = 8000;
const myServer = http.createServer((req, res)=>{
    
    const log = `${Date.now()}: ${req.url} New Request Received.\n`;
    fs.appendFile("log.txt",log, (err, data)=>{
        if(err){
            console.log(err);
        }
        // Multi routing
        switch(req.url){
            case "/": res.end("WELCOME Again, NAMASTE!");
            break;
            case "/about": res.end("ABOUT ME");
            break;
            default : res.end("404 Not Found!")
        }
    });
})
myServer.listen(PORT, () => console.log(`server strted at ${PORT}`))