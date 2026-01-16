const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let adat=[
    {
        id:1,
        adat:"Szöveg1"
    },
    {
        id:2,
        adat:"Szöveg2"
    },
    {
        id:3,
        adat:"Szöveg3"
    },
    {
        id:4,
        adat:"Szöveg4"
    }
]


app.listen(8000,()=>{console.log("Fut a backend")});

app.get('/',(req,res)=>{
    res.send('Backend tesztelés');
});

app.get('/adatok',(req,res)=>{
    res.status(200).json(adat);
});

app.post('/adatok',(req,res)=>{
    adat.push(req.body);
    res.status(201).json({message:"Új adat beszúrva"});
});

app.delete('/adatok',(req,res)=>{
    const torlendo=req.body.id;
    adat=adat.filter(x=>x.id!=torlendo);
    res.status(200).json({message:"Adat törölve!"});
})