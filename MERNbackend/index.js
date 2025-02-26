const express = require('express')
const mdb = require('mongoose')
const dotenv = require('dotenv')
const Signup= require('./models/signupSchema')
const bcrypt = require('bcrypt')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3001
dotenv.config()
//console.log(process.env.MONGODB_URL)
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection is successfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to  Backend</h1>")
})
app.get("/static",(req,res)=>{
    res.sendFile("D:\\MERN-1\\day 1\\index.html")
})

app.post("/signup", async(req,res)=>{
    try{
       const{firstName,lastName,email,password,phoneNumber}=req.body;
       const hashedpassword= await bcrypt.hash(password,10)
    const newSignup = new Signup({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:hashedpassword,
        phoneNumber:phoneNumber,
    });
    newSignup.save();
    console.log("signup success");
    res.status(201).json({message:"Signup Successful",isSignUp:true})
    }catch(error){
        console.log("signup error");
        res.status(201).json({message:"Signup unSuccessful",isSignUp:false})
    }
  }
);
app.get('/getsignupdet',async(req,res)=>{
  const signup=Signup.findOne({email:email})
  console.log(signup)
  res.send("signup details fetched")
});
app.post("/login", async(req, res) => {
  try {
    const{email,password}=req.body
    const exitingUser=await Signup.findOne({email:email})
    console.log(exitingUser)
    if(exitingUser!=null){
      const isValidPassword=await bcrypt.compare(password,exitingUser.password)
      console.log(isValidPassword)
      if(isValidPassword){
        res.status(201).json({message:"login successfull",isLoggedin:true})
      }
      else{
        res.status(201).json({message:"incorrect password",isLoggedin:false})
      }
    }
    else{
      res.status(201).json({message:"user not found sigup first",isLoggedin:false})
    }
    res.json({message:"login fetched"})
  } catch (error) {
    console.log("login error");
    res.status(400).json({message:"login error check your code",isLoggedin:false})
  }
});






app.listen(PORT,()=>console.log("Server Started Successfully"))