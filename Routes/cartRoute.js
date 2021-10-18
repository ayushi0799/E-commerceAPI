const express = require("express");


const router=express.Router();

const {storeCart,getCart,updatecart,getcartDetail,deletecart}= require("../Controllers/cartController")

router.get("/",getCart)
router.post("/",storeCart)
router.get("/:id", getcartDetail);
router.put("/:id", updatecart);
router.delete("/:id", deletecart);

module.exports=router;