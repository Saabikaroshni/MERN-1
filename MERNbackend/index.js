const express = require('express')
const mdb = require('mongoose')
const dotenv = require('dotenv')
const Signup= require('./models/signupSchema')
const app = express()
app.use(express.json())
const PORT = 3001
dotenv.config()
//console.log(process.env.MONGODB_URL)
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection successfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to  Backend</h1>")
// })
// app.get("/static",(req,res)=>{
//     res.sendFile("D:\\MERN-1\\day 1\\index.html")
// })

app.post("/signup",(req,res)=>{
    try{
       const{firstName,lastName,email,password,phoneNumber}=req.body;
    const newSignup = new Signup({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
       
        
    });
    newSignup.save();
    console.log("signup success");
    res.status(201).json({message:"Signup Successful",isSignUp:true})
    }catch(error){
        console.log("error");
        res.status(201).json({message:"Signup unSuccessful",isSignUp:false})
    }

    
});

app.listen(PORT,()=>console.log("Server Started Successfully"))