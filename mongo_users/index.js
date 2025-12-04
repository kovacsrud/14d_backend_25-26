const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(8000,()=>console.log("Fut..."));

app.get('/',(req,res)=>{
    res.send("User regisztráció");
})
