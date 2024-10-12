const fs = require("fs");

// By default it is work with Asyncronously (Recommended for non-blocking operations)
// fs.writeFile("intro.txt","Hello my name is Prashant Kumar.",(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("file has been written.");
// })

// Syncronous method
// try {
//     fs.writeFileSync("intro.md","## Hey there...");
//     console.log("file has been written!");
// } catch (error) {
//     console.log(error);
// }

// read file - Async method
fs.readFile("intro.md","utf8", (err,data)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

// read file(fs.readFileSync) - Sync method
try {
    const data = fs.readFileSync("intro.txt","utf8");
    console.log(data);
} catch (error) {
    console.log(error);
}

fs.writeFile("fileNotes.md",
    `## Summary of Common fs Methods:
    1. Reading Files: fs.readFile(), fs.readFileSync()
    1. Writing Files: fs.writeFile(), fs.writeFileSync()
    1. Appending Files: fs.appendFile(), fs.appendFileSync()
    1. Deleting Files: fs.unlink(), fs.unlinkSync()
    1. Creating Directories: fs.mkdir(), fs.mkdirSync()
    1. Deleting Directories: fs.rmdir(), fs.rmdirSync()
    1. Getting Stats: fs.stat(), fs.statSync()
    1. Watching Files: fs.watch()`,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file has been written!");
    }

)