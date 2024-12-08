const express = require("express");
const router = express.Router();

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome");
// });

router.get("/",(req,res)=>{
    res.status(200).send("Welcome");
});