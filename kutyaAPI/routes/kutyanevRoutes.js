const express=require('express');
const router=express.Router();

const {kutyanevek,ujKutyanev,modositKutyanev,torolKutyanev}=require('../controllers/kutyanevController');

router.get('/',kutyanevek);
router.post('/',ujKutyanev);
router.put('/',modositKutyanev);
router.delete('/:id',torolKutyanev);

module.exports=router;
