const express = require("express");


const router=express.Router();

const {storeOrders,getOrders,updateorder,deleteorder,getorderDetail}= require("../Controllers/ordersController")

router.get("/",getOrders)
router.post("/",storeOrders)
router.get("/:id", getorderDetail);
router.put("/:id", updateorder);
router.delete("/:id", deleteorder);


module.exports=router;