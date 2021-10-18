const express = require("express");


const router=express.Router();

const {getCategories,storeCategories,updatecategory,deletecategory,getcategoryDetail}= require("../Controllers/categoriesController")

router.get("/",getCategories)
router.post("/",storeCategories)
router.get("/:id", getcategoryDetail);
router.put("/:id", updatecategory);
router.delete("/:id", deletecategory);

module.exports=router;