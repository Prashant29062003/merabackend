const fs = require('fs');

const folderName = "myFolder";

try {
    // creating folder
    fs.mkdirSync(folderName);
    console.log(`Folder "${folderName}" created successfully!`);
    
    // creating file
    fs.readFileSync("myFolder/bio.txt", "Good day, my name is Prashant Kumar.");
} catch (err) {
    console.error("Error creating folder:", err);
}