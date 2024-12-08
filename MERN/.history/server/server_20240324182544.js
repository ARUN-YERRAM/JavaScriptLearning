const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");

app.use("/api/auth",authRoute);


// app.get("/",(req,res) => {
    // res.status(200).send("Hello World By without router");
// });

// app.get("/register",(req,res) => {
    // res.status(200).send("Register");
// });

app.listen(5000,()=>{
    console.log("Server running at 5000 Prot Number");
})


// By simple get method, routes, controllers...........