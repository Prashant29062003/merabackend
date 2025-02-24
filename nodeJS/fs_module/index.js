const fs = require("fs");

// creating a file
// fs.writeFileSync("read.txt", "Hello my name is Prashnat Kumar.");

// fs.writeFileSync("read.txt", "Hello my name is Akanksha Rani.");

// append at end of the file content
// fs.appendFileSync("read.txt", "and I am 20 yrs old.")

const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);  // output: <Buffer 48 65 6c 6c 6f 20 6d 79 20 6e 61 6d 65 20 69 73 20 41 6b 61 6e 6b 73 68 61 20 52 61 6e 69 2e 61 6e 64 20 49 20 61 6d 20 32 30 20 79 72 73 20 6f 6c 64 ... 1 more byte>

console.log("Buffer Data: ", buf_data); // logs raw binay data
console.log("Readable Data: ", buf_data.toString());    // logs readable data