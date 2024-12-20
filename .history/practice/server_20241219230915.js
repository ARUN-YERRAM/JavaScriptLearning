const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Route to serve JSON data
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read the file' });
        }
        res.json(JSON.parse(data));
    });
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the JSON Server! Access data at /data');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.listen(PORT,()=>{
    console.log('Server is running at http://localhost:${PORT}')
})