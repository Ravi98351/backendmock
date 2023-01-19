const express = require('express')
require('dotenv').config()
 const connect=require("./db connect/db")
const userRouter=require("./signup/sign.router")
 
const app=express()
const cors =require('cors')
 const port=process.env.PORT;

console.log(port)
app.use(express.json())
app.use(cors())

app.use("/signup",userRouter)
app.get('/',(req,res)=>res.send('hello'))

app.listen(8080,async()=>{
   
        await connect()
console.log(`listening at http://localhost:${port}`)
 

})