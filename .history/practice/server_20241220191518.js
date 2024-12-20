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
            console.log(err);
        }

    })
})
app.get('/',(req,res) => {
    res.send('Hello World');
})
app.listen(PORT,() => {
    console.log('Server is listening on PORT http://localhost:${PORT}');
})