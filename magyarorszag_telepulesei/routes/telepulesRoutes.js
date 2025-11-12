const express=require('express');
const router=express.Router();

const{telepuleslista}=require('../controllers/telepulesContoller');

router.get('/',telepuleslista);


module.exports=router;