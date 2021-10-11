var express = require("express");
var router = express.Router();
const project = require("../controllers/project.controller.js");

/* POST create a new project. */
router.post("/", project.create);

module.exports = router;
