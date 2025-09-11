const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


let adatok=[
    {
        "id":1,
        "termeknev":"nyomtató",
        "marka":"Canon"
    },
    {
        "id":2,
        "termeknev":"egér",
        "marka":"Logitech"
    },
    {
        "id":3,
        "termeknev":"router",
        "marka":"TPLink"
    },
    {
        "id":4,
        "termeknev":"nyomtató",
        "marka":"Xerox"
    }

];


app.listen(8000,()=>console.log('Fut a szerver'));

app.get('/',(req,res)=>{
    res.send("Alap backend");
});

app.get('/nevjegy',(req,res)=>{
    res.json({nevjegy:"Alap backend 1.0"});
});


app.get('/termekek',(req,res)=>{
    
    res.json(adatok);
})