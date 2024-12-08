const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    points:{
        type:Number,
        required:true
    }
})