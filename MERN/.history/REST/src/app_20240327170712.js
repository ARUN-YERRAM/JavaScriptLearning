const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");

const app = express();

const port = process.env.PORT || 3000;

// we will handle post req    

app.use(express.json());

app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const i = await addingMensRecords.save();
        res.send
    }catch(e){
        res.send(e);
    }
})
// app.get("/",async(req,res)=>{
//     res.send("Hello World");
// })
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})