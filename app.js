const express=require('express');
const app=express();

app.use('/',(rer,res,next)=>{
    console.log('/');
    res.send('<h1>hi</h1>')
    next();
});

app.use('/add',(req,res,next)=>{
    console.log('/add');
    next();
});
app.use('/',(req,res,next)=>{
    console.log('2/');
    next();
})
app.listen(3000);