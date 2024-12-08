const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");

const app = express();

const port = process.env.PORT || 3000;

// we will handle post req    
app.post("/mens",async())
app.get("/",async(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})