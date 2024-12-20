const express = require('express');
const cors = require('cors');
const fs= require('fs');
const path = require('path');

const app = express();

const PORT = 3000;


app.get('/',(req,res) => {
    
})
app.listen(PORT,() => {
    console.log('Server is listening on PORT http://localhost:${PORT}');
})