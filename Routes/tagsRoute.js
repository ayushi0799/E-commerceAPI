const express = require("express");


const router=express.Router();

const {storeTags,getTags,getTagDetail,updateTag,deleteTag}= require("../Controllers/tagsController")

router.get("/",getTags)
router.post("/",storeTags)
router.get("/:id", getTagDetail);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);


module.exports=router;