const {logout}= require("../Controllers/logoutController");
const express = require("express");
const router = express.Router();

router.get("/",logout);
module.exports = router;