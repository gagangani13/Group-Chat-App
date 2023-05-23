const express=require('express')
const router=express.Router()
router.get('/login',(req,res,next)=>{
    res.send("<form action='/' onSubmit={localStorage.setItem('Username',document.getElementById('Username').value)}  method='GET'><label>Username</label><input id='Username' type='text' name='Username'/><button type='submit'>Login</button></form>")
})

module.exports=router