const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');



app.use(bodyParser.json({limit:'50mb'}))
app.use(cors());



const user = require("./routes/userController");
app.use("/user",user)
 //localhost:3000/user istekleri buraya geliyor 
app.listen(8080,()=>{
    console.log('server ayakta');
})