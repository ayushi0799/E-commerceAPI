const {log} = require("../Controllers/loginController");
const express = require('express');
const router = express.Router();
router.get("/",log)

module.exports = router;