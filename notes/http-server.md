## http
```js
const http = require("http");

const PORT = 3000 
const meraServer = http.createServer((request, response) =>{
    console.log(request.headers);
    console.log("New Request recieve");
    response.end("Hello Server...")
});

meraServer.listen(PORT, () => console.log(`server started at ${PORT}`))

```