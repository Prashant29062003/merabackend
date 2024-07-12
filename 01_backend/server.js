const express = require('express')
require('dotenv').config()

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Prashant Kumar.")
})

app.get("/login", (req, res) => {
    res.send("Login success!")
})

app.get("/meraNaam", (req,res) => {
    res.send("<h1>Mera naam Prashant Kumar.</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})