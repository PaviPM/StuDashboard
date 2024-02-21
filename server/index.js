const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();


app.get("/",(req,res)=>{
    res.json("Get Request")
})

app.post("/post",(req,res)=>{
    res.json("Get Request")
})

app.use(express.json());
dotenv.config();



app.listen(process.env.PORT, async()=>{
    console.log(`Connected at ${process.env.PORT}`);
})

