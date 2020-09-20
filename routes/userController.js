const express=require('express');
const app=express.Router();

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send(req.body.userName);
})
module.exports=app;