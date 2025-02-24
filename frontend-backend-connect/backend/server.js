import express from "express";

const app = express();

const jokes = {
    joke_1: {
        id: 1,
        text: "Hay it's me myself."
    },
    joke_2: {
        id: 2,
        text: "Meet a cat with her lunch while wathcing tom&jerry."
    },
    joke_3: {
        id: 3,
        text: "life. If you can't realize the matrix."
    },
}
const port = process.env.PORT || 3000;
app.get("/", (req,res)=>{
    res.send(jokes);
})

app.listen(port || 8080, (req,res)=>{
    console.log(`Server Started... at port ${port}`);
})