require('dotenv').config()
const express = require('express')


 const connect=require("./db connect/db")
const userRouter=require("./signup/sign.router")
 const cors =require('cors')
const app=express()

 const port=process.env.PORT;

console.log(port)
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.get('/',(req,res)=>res.send('hello'))

app.listen(port,async()=>{
   
        await connect()
console.log(`listening at http://localhost:${port}`)
 

})
