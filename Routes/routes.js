const express = require("express");


const router=express.Router();

const {storeUser,getUsers, getuserDetail,
    updateuser,
    deleteUser,usersQuery}= require("../Controllers/userController")

//router.get("/",getUsers)
router.post("/",storeUser)
router.get("/:id", getuserDetail);
router.get("/", usersQuery);
router.put("/:id", updateuser);
router.delete("/:id", deleteUser);

module.exports=router;