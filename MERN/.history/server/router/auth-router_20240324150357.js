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

router.route("/").get(authcontrollers.home);

router.route('/register').get(controllers.register);

module.exports = router;

// server to router to controllers   