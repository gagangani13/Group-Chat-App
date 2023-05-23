const express=require('express')
const router=express.Router()
const fs=require('fs')

router.get('/',(req,res,next)=>{
    fs.readFile('chats.txt',{encoding:'utf-8'},(err,data)=>{ //async operation
        if (err){
            console.log(err);
            data='No chats'
        }
        res.send(`${data}<form action='/' onSubmit={document.getElementById('username').value=localStorage.getItem('Username')} method='POST'><label>Send Message</label><input type='text' name='Message'/><input type='hidden' id='username' name='Username'/><button type='submit'>Send</button></form>`)
        
    })
    // res.send("<form action='/' onSubmit={document.getElementById('username').value=localStorage.getItem('Username')} method='POST'><label>Send Message</label><input type='text' name='Message'/><input type='hidden' id='username' name='Username'/><button type='submit'>Send</button></form>") // moved up bcz this is synchronus and data can't be updated bcz it will be async
})
router.post('/',(req,res,next)=>{
    fs.writeFileSync('chats.txt',`${req.body.Username}:${req.body.Message} `,{flag:'a'})
    console.log(req.body.Message)
    res.redirect('/')

})
module.exports=router