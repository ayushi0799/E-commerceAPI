const express = require("express")
const router = express.Router();
const {siginGet,signinPost,userAuth} = require("../Controllers/signinController")

router.get("/",siginGet);
router.post("/",signinPost);
router.get("/:data",userAuth);

module.exports = router