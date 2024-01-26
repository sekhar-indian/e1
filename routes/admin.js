const express=require('express');
const Router=express.Router();

Router.get('/',(req,res)=>{
    res.send(`
    <form action='/admin/add-product' method='POST'>
    <input type='text' name='nn'>
    <button >submit</button>
    </form>
    `)
})

Router.post('/add-product',(req,res)=>{
    res.send('<h1>welcome</h1>')
})

module.exports=Router;
