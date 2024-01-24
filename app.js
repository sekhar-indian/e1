const express=require('express');
const app=express();

app.use((res,req,next)=>{
    console.log('hi')
    next();
})
app.use((req,res,next)=>{
    console.log('end');
    next()
})
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(3000);