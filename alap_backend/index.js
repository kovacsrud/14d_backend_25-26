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
});

app.post('/termekek',(req,res)=>{

    console.log(req.body); 
    adatok.push(req.body);

    res.status(201).json({message:"Adat beillesztve!"});

});

app.put('/termek',(req,res)=>{
    let adat=req.body;
    let modositando=adatok.findIndex(x=>x.id==adat.id);
    if(modositando>-1){
        adatok[modositando]=adat;
        res.status(200).json({message:"Adat módosítva!"});
    } else {
        res.status(404).json({message:"Az adat nem található!"});
    }

});

app.delete('/termek/:id',(req,res)=>{
    let id=req.params.id;
    adatok=adatok.filter(x=>x.id!=id);
    res.status(200).json({message:"Adat törölve!"});

});

