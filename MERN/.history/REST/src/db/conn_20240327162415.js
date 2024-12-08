const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:false
}).then(()=>{
    console.log("connection successfull")
}).catch(()=>{
    console.log("no connection")
})