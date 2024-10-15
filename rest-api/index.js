const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

// Routes
// for HTML document format
app.get("/users", (req,res)=>{
    const html = `
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    `
    return res.send(html);
})

// for any platform - REST API
app.get("/api/users", (req,res)=>{
    return res.json(users);
})
/** ---------------------------
 * This "api/users/:id is repeating it self so if we want to do at once so,"
app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.send(user);
})
app.patch("/api/users/:id", (req,res)=>{
    // TODO: Edit the User with id
    console.log("Editing user Pending.");
})
app.delete("/api/users/:id", (req,res)=>{
    // TODO: Delete the User with id
    console.log("Deleting user Pending.");
})
--------------------------------------------*/

// Grouping ...
app
    .route("api/users/:id")
    .get((req,res)=>{
        const id = req.params.id;
        const user = users.find((user)=> user.id === id);
        return res.send(user)
    })
    .patch((req,res)=>{
        // TODO: Edit the User with id
        console.log("Editing user Pending.");
    })
    .delete((req,res)=>{
        // TODO: Delete the User with id
        console.log("Deleting user Pending.");
    })

app.post("api/users", (req,res)=>{
    // TODO: Create new User
    console.log("Creating user Pending.");
})


// app.get("/login",(req,res)=>{
//     res.send("Hello user welcome to Login page.")
// })


app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})