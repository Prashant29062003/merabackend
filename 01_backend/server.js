const express = require('express')
require('dotenv').config()

const app = express();
const port = 4000;
const githubData = {
    "login": "Prashant29062003",
    "id": 112088696,
    "node_id": "U_kgDOBq5WeA",
    "avatar_url": "https://avatars.githubusercontent.com/u/112088696?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Prashant29062003",
    "html_url": "https://github.com/Prashant29062003",
    "followers_url": "https://api.github.com/users/Prashant29062003/followers",
    "following_url": "https://api.github.com/users/Prashant29062003/following{/other_user}",
    "gists_url": "https://api.github.com/users/Prashant29062003/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Prashant29062003/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Prashant29062003/subscriptions",
    "organizations_url": "https://api.github.com/users/Prashant29062003/orgs",
    "repos_url": "https://api.github.com/users/Prashant29062003/repos",
    "events_url": "https://api.github.com/users/Prashant29062003/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Prashant29062003/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 3,
    "following": 4,
    "created_at": "2022-08-25T12:22:19Z",
    "updated_at": "2024-06-26T05:38:52Z"
  }

app.get("/", (req, res) => {
    res.send("Prashant Kumar.")
})

app.get("/github", (req, res) =>{
    res.json(githubData)
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