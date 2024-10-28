import http from 'http';
import dotenv from 'dotenv'

// Intilize dotenv to load environment variable
dotenv.config();

const Port = process.env.PORT || 8000;
const server = http.createServer((req, res)=>{
    // res.write("hello Motto!");
    // res.setHeader('Content-type', "text/html"); // --> here we get response in html format
    // res.setHeader('Content-type', "text/plain");
    // res.statusCode = 200; // By default - getting response at status with 200 OK
    // res.statusCode = 404;

    // console.log(req.url);
    // console.log(req.method);

    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.writeHead(200, {"Content-Type": "text/html"})
    
    // const jsonData = {message: "Server Error"}
    // const text = `<h1>hello Prashant Kumar!</h1>
    // <p>My name is Prashant Kumar. Nice to meet you!</p>`
    // res.end(text);
    // res.end(JSON.stringify(jsonData)); // we can directly write in end method same as write method

    // Routing
    try {
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200, { "Content-Type": "text-html"});
                res.end(`<h1>Home page</h1>`)
            }else if (req.url === '/about'){
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end('<h1>About Page - Prashant Kumar.</h1>')
            }
            else{
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(`<h1>${res.statusCode} Not found.</h1>`)
            } 
        }else{
            throw new Error("Method not found.")
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(`${res.statusCode} ${res.statusMessage}`)
    }
    

    console.log(req.url);
    console.log(req.method);


});



server.listen(Port,()=>{
    console.log(`welcome to the server at ${Port}`);
})