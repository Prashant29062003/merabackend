const fs = require("fs");

// non-blocking... operation
console.log(1);
fs.readFile("fileNotes.md","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
console.log(2);