const tesztmw=(req,res,next)=>{
    console.log("Middleware teszt");
    next();
}

module.exports={tesztmw};