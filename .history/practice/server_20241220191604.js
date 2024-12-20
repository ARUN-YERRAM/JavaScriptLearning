const express = require('express');
const cors = require('cors');
const fs= require('fs');
const path = require('path');

const app = express();

const PORT = 3000;


app.get('/data',(req,res) => {
    const filePath = path.join(__dirname,'data.json');
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err){
            res.status(400).json({message:"Error reading Data"});
            console.log(err);
        }
        const jsonData = JSON.parse(data)


    })
})
app.get('/',(req,res) => {
    res.send('Hello World');
})
app.listen(PORT,() => {
    console.log('Server is listening on PORT http://localhost:${PORT}');
})