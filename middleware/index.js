const express=require('express');
const cors=require('cors');
const{tesztmw}=require('./mw/tesztmw');
const{log}=require('./mw/log');
const{sqllog}=require('./mw/sqllog');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(tesztmw);
app.use(log);
app.use(sqllog);


app.listen(8000,()=>console.log("Running"));

app.get('/',(req,res)=>{
    res.send("Middleware-ek");
})

app.get('/adatok',(req,res)=>{
    res.json({adat:123});
})

app.post('/adatok',(req,res)=>{
    res.json(req.body);
})