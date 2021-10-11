var express = require("express");
var router = express.Router();
const user = require("../controllers/user.controller.js");

/* POST create a new user. */
router.post("/", user.create);

module.exports = router;
