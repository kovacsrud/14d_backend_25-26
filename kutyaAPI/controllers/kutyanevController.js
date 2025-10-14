const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak_good_unique.db');

const kutyanevek=(req,res)=>{
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

}

const ujKutyanev=(req,res)=>{
    const{kutyanev}=req.body;
    db.run("insert into kutyanevek (kutyanev) values(?)",[kutyanev],error=>{
        if(error) return res.send(error);
        return res.status(201).json({message:"Adat beszúrva!"});
    })
}

const modositKutyanev=(req,res)=>{
    const{Id,kutyanev}=req.body;
    db.run("update kutyanevek set kutyanev=? where Id=?"
        ,[kutyanev,Id])
        ,error=>{
            if(error) return res.send(error);
            return res.status(200).json({message:"Adat módosítva!"});
        }

}

const torolKutyanev=(req,res)=>{
 const id=req.params.id;
    db.run("delete from kutyanevek where Id=?",[id],error=>{
        if(error) return res.send(error);
        return res.status(200).json({message:"Adat törölve!"});
    })
}

module.exports={
    kutyanevek,
    ujKutyanev,
    modositKutyanev,
    torolKutyanev
}