const express = require("express");
const app = express();

app.get("/",() => {
    res.status(200.send(""))
});

app.listen(3000,() => {
    console.log("Listening on port 3000");
});