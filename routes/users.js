var express = require("express");
var router = express.Router();
const user = require("../controllers/user.controller.js");
const common = require("../controllers/common.controller.js");

/* POST create a new user. */
router.post("/", user.create);

/* GET all the projects of an user */
router.get("/:id/projects", common.findAllProjects);

module.exports = router;
