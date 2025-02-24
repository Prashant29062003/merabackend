import fs from 'fs';
import express from 'express';
import users from './MOCK_DATA.json' assert { type: "json" };

// import users from './MOCK_DATA.json';

const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res)=> {
    res.send("Welcome to my wolrd!")
})

// for html 
app.get("/users", (req, res)=>{
    const html = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li>`).join(" ")}
        </ul>
    `;
    res.send(html);
})
app.get("/api/users", (req, res)=>(
    res.json(users)
))

// app.get("/api/users/:id", (req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.send(user)
// })

app.post("/api/users", (req,res)=>{
    // create new user
    const body = req.body;
    // console.log("Body: ", body);
    users.push({ id: users.length + 1, ...body});

    // ----------- file name -------- format we want ------- callback error handling---- //
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=> {
        return res.json({status: "success", id: users.length})
    })
})

// app.patch("/api/users/:id", (req,res)=>{
//     // TODO edit a user with id
//     return res.json({status: "pending"})
// })

// app.delete("/api/users/:id", (req,res)=>{
//     // TODO delete a user with id
//     return res.json({status: "pending"})
// })

// instead of reapeating same routes we can use "app.route"
app.route("/api/users/:id")
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.send(user)
    })
    .patch((req,res)=>{
        // edit user with id

        return res.json({status: "pending"})
    })
    .delete((req,res)=>{
        // delete user with id
        
        return res.json({status: "pending"})

    })

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));