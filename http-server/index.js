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
const url = require("url")

const PORT = 8000;
const myServer = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received.\n`;
    const myURl = url.parse(req.url, true);
    console.log(myURl);
    fs.appendFile("log.txt",log, (err, data)=>{
        if(err){
            console.log(err);
        }
        // Multi routing
        switch(myURl.pathname){
            case "/": res.end("WELCOME Again, NAMASTE!");
            break;
            case "/about":
                const {myname, age} = myURl.query;
                res.end(`HI ${myname}. your age is ${age}.`);
                break;

            case "/youtube":
                res.end(`your search result for ${myURl.query.search_query} are`)
                break
            default : res.end("404 Not Found!")
        }
    });
})
myServer.listen(PORT, () => console.log(`server strted at ${PORT}`))