const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.urlencoded({entended:false}));
app.use(express(express.json));

app.use('/',require('./router'));
app.listen(5000,()=>{
    console.log("Servidor ejecutandose en http://localhost:5000")
});