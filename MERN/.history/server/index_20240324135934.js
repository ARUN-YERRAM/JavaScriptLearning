const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.status(200).send("Hello World");
});

app.get("/register",(req,res) => {
    res.status(200).send("Register");
})

app.listen(3000,() => {
    console.log("Listening on port 3000");
});

