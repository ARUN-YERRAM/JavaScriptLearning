import express from "express";

const app = express();

app.get("/",(req,res) => {
    console.log("Hello World");

    return "Hello World";
})

