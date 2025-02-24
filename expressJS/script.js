// Express.js Framework

// Introduction to Express.js

const express = require("express");
const app = express();
const port = 8080

let bookData = [];
let bookId = 1;

// add new data 
app.post("/books", (req,res)=>{

    let { bookName, price } = req.body;
    let newBook = {id: bookId++, bookName, price };
    bookData.push(newBook);
    res.sendStatus(201).send(newBook);
})

app.get("books/:id",(req,res)=>{
    let book = bookData.find(t => t.id === parseInt(req.params.id))
    if(!book){
        return res.sendStatus(404).send("book is not available!");
    }
    res.sendStatus(200).send(book)
})

app.get("/",(req,res)=>{
    res.sendStatus(201).send(bookData);
})

app.listen(port, ()=>{
    console.log("===============================")
    console.log("server created at ",port);
    console.log("===============================")
    
})