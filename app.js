const express=require('express');
const app=express();
const router=require('./routes/admin');
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(router);

app.use((req,res,next)=>{
res.status(404).send('<h1>eror</h1>')
})
app.listen(3000);