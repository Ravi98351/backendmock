
 const express = require('express')
const Signup = require('./sign.model')
const jwt = require("jsonwebtoken");
const app=express.Router()

 app.get("/",(req,res)=>{
    res.send("hello wellcome to signup")
 })


 app.post("/signup",async(req,res)=>{
const {email,password}=req.body;
console.log("body",req.body)

const existingUser = await Signup.findOne({ email });
if (existingUser) {
  return res.send({ status: false, message: "User already exist!" });
}

const user = await Signup.create({
    email,
    password,
    
  });
  return res.send({ status: true, message: "You have signup Successfully" });
});

//::::::::::::::::::::::::::::::::::::::::::::::: LOGIN ::::::::::::::::::::::::::::::::::

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Signup.findOne({ email, password });
    if (!user) {
      return res.send({ Token: "", message: "Wrong Credential!" });
    }
  
    const Token = jwt.sign(
      {
        id:Signup._id,
       password:Signup.password,
        email: Signup.email,
      },
      "SECRETKEY",
      { expiresIn: "30 days" }
    );
  
   
    return res.send({
      Token: Token,
      message: "You have Loged IN Successfully",
    });
  });
  
  module.exports = app;




 

