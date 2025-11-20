const express=require('express');
const router=express.Router();

const{telepuleslista,telepules}=require('../controllers/telepulesContoller');

router.get('/',telepuleslista);
router.get('/telepulesnev/:telepulesnev',telepules);



module.exports=router;