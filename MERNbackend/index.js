const express = require('express')
const mdb = require('mongoose')
const dotenv = require('dotenv')
const Signup= require('./models/signupSchema')
const bcrypt = require('bcrypt')
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
        console.log("error");
        res.status(201).json({message:"Signup unSuccessful",isSignUp:false})
    }

    
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "USER NOT FOUND", isLogin: false });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
      console.log("LOGIN SUCCESS");
      return res
        .status(200)
        .json({ message: "Login successful", isLogin: true });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid credentials", isLogin: false });
    }
  } catch (error) {
    return res.status(500).json({ message: "CATCH ERROR", isLogin: false });
  }
});

app.listen(PORT,()=>console.log("Server Started Successfully"))