const express=require('express')
const app=express()
const login=require('./Routes/login')
const message=require('./Routes/message')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
// app.use((req,res,next)=>{
//     res.send('<h1>Chat App</h1>')
// })
app.use(login)
app.use(message)
app.listen(4000)