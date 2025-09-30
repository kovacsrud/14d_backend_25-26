const express=require('express');
const cors=require('cors');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak_good_unique.db');
const {kutyanevek,kutyafajtak}=require('./dbrepo');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>console.log("Fut a szerver"));

app.get('/',(req,res)=>{
    res.send('Rendelő backend');
});

app.get('/kutyanevek',(req,res)=>{
    db.all("select * from kutyanevek",(error,rows)=>{
        if(error){
            res.json(error);
        } else {
            if(rows.length>0){
                res.status(200).json(rows);
            } else {
                res.status(404).json({message:"Nincs ilyen adat!"});
            }
        }
    })
});

app.get('/kutyafajtak',(req,res)=>{
    db.all("select * from kutyafajtak",(error,rows)=>{
        if(error) return res.json(error);
        if(rows.length>0) return res.status(200).json(rows);

        return res.status(404).json({messge:"Nincs ilyen adat!"});
    })
});

app.get('/kutyanevek2',(req,res)=>{
    kutyanevek(db).then(adat=>res.status(200).json(adat)).catch(err=>res.send(err));
})

app.get('/kutyafajtak2',(req,res)=>{
    kutyafajtak(db).then(adat=>res.status(200).json(adat)).catch(err=>res.send(err))
})

app.get('/kutyanevek3',async (req,res)=>{
    try {
        const adatok=await kutyanevek(db);
        res.status(200).json(adatok);
        
    } catch (error) {
        res.send(error);
    }
});