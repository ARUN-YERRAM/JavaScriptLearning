const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");

const app = express();

const port = process.env.PORT || 3000;

// we will handle post req    
app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords = new MensRanking({
            "ranking":1,
            "name":"Christian Coleman",
            "dob":"06 march",
            "country":"INDIA",
            ""
        })
    }catch(e){

})
app.get("/",async(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})