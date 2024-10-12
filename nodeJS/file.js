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
// fs.readFile("intro.md","utf8", (err,data)=>{    //Async not gives any data in return (it's return type is void)
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// read file(fs.readFileSync) - Sync method
// try {
//     const data = fs.readFileSync("intro.txt","utf8");   // Sync always gives some return value
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }



// fs.appendFileSync("./intro.md","\nhay there!")
// fs.appendFileSync("./intro.md",`\n ${Date.now()}`)

// fs.cpSync("fileNotes.md","copyFileNotes.md") //copy of file
// fs.unlinkSync("./copyFileNotes.md") //delete file

// fs.mkdir //only for making directries
// fs.mkdirSync("docs/a/b", {recursive: true}); //{recursive: true} ie. infinitely allows to make directry
// fs.mkdirSync("docs/a.txt", {recursive: true});




