const express=require('express');
const Router=express.Router();
const fs=require('fs');
Router.get('/',(req,res)=>{
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/login' method='POST'>
    <input type='text' id='username' name='title'>
    <button type='submit'>login</button>
    </form>
    `)
 
})

Router.post('/login',(req,res)=>{
    fs.writeFile('Output.txt',`${req.body.title}:`, (err) => {
        err ? console.log(ee) : console.log('n') 
    })
    res.redirect('/logined')

   
})
Router.get('/logined',(req,res)=>{

    fs.readFile('Output.txt', 'utf8',(err,data)=>{
   
    if(err){
        data:'no data'
    }
        res.send(` 
        <p>${data}</p> 
        <form action='/logined' method='POST'>
             <input type='text' id='massage' name='ms'>
             <button type='submit'>submit</button>
        </form>
        `);
    });


})
Router.post('/logined',(req,res)=>{
    fs.writeFile('Output.txt',`${req.body.ms}`,{flag:'a'}, (err) => {
        err ? console.log(err) : res.redirect('/logined');
    })
   
})
module.exports=Router;