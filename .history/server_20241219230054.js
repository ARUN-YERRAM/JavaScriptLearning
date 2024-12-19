// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Route to serve JSON data
app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, '.fata.json'); // Path to JSON file

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Error reading data');
        } else {
            res.json(JSON.parse(data)); // Parse and send JSON data
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
