const express=require('express');
const Router=express.Router();
Router.get('/login',(req,res)=>{
    res.send(`
    <form action='/' method='POST'>
    <input type='text' name='name'>
    <button>login</button>
    </form>
    `)
})

Router.post('/',(req,res)=>{
    res.send(`
    <form action='/' method='POST'>
    <input type='text' >
    <button>submit</button>
    </form>
    `)
    req.send()
})
Router.get('/w',(req,res)=>{
    res.send('<h1>hi</h1>')
})
module.exports=Router;