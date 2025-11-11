const mysql=require('mysql');

const conn=mysql.createConnection(
    {
        user:"root",
        password:"",
        database:"magyar_telepulesek_2025"
    }
);

const jogallaslista=(req,res)=>{
    conn.query("select jogallas from jogallas",(err,rows)=>{
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(rows);

    })

};

module.exports={
    jogallaslista
}