const express = require("express");


const router=express.Router();

const {storeProducts,getProducts,updateProduct,getProductDetail,deleteProduct}= require("../Controllers/productsController")

router.get("/",getProducts)
router.post("/",storeProducts)
router.get("/:id", getProductDetail);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports=router;