const express = require('express');
const cors = require('cors');
const fs= require('fs');
const path = require('path');

const app = express();

const PORT = 3000;


app.get('/data',(req,res) => {
    c
})
app.get('/',(req,res) => {
    res.send('Hello World');
})
app.listen(PORT,() => {
    console.log('Server is listening on PORT http://localhost:${PORT}');
})