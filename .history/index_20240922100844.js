import express from "express";

const app = express();

app.get("/",(req,res) => {
    console.log("Hello World");

    return "Hello World";
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})


app.delete('/delete-ap',(req,res) => {

});