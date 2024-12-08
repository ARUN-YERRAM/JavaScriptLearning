const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth",router);


// app.get("/",(req,res) => {
    // res.status(200).send("Hello World By without router");
// });

// app.get("/register",(req,res) => {
    // res.status(200).send("Register");
// });

app.listen(5000,()=>{
    console.log("Server running at 5000 Prot Number");
})



By routes