const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controller");

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome");
// });

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome By router");
// });

// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome by router routing");
// });

router.route("/").get(home);

router.route('/register').get(register);

module.exports = router;

// server to router to controllers   