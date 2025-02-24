const express = require("express");
// const http = require("http");

const app = express();
app.get("/", (req,res)=>{
    return res.send("Hello From Home Page.");
})
app.get("/about",(req,res)=>{
    return res.send("Send request from about page.");
})

app.listen(8000, ()=> console.log("Server Started via express."))
// const myServer = http.createServer();

// myServer.listen(8000, ()=> console.log("Server started."))


// express - ^4.21.1
// 1st version -> Major Fixes
// 2nd -> Recommended Fixes
// 3rd -> Minor Fixes

// ^ (carrot symbol) -> ie. any 2nd and third but not 1st(major change like 5th version or something)
// ~ (squigly line) -> ie. only 3rd(Minor Fixes) are exceptable eg. ~14.21.1


// eg.
// {
//     "dependencies": {
//       "foo": "1.0.0 - 2.9999.9999",
//       "bar": ">=1.0.2 <2.1.2",
//       "baz": ">1.0.2 <=2.3.4",
//       "boo": "2.0.1",
//       "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
//       "asd": "http://asdf.com/asdf.tar.gz",
//       "til": "~1.2",
//       "elf": "~1.2.3",
//       "two": "2.x",
//       "thr": "3.3.x",
//       "lat": "latest",
//       "dyl": "file:../dyl"
//     }
//   }