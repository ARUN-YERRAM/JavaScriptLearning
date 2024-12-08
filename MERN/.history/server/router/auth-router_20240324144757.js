const express = require("express");
const router = express.Router();

const home = require("../controllers/auth-controller");
// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome");
// });

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome By router");
// });

// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome by router routing");
// });

router.route("/").get(home)
router.route('/register').get((req,res)=>{
    res.status(200).send("Welcome to register by router");
});

module.exports = router;

// server to router to controllers   