const express = require("express");


const router=express.Router();

const {storeRoles,getRoles,updateRole,getRoleDetail,deleteRole}= require("../Controllers/rolesController")

router.get("/",getRoles)
router.post("/",storeRoles)
router.get("/:id", getRoleDetail);
router.put("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports=router;