var express = require("express");
var router = express.Router();
const model = require("../controllers/model.controller.js");

/* PATCH updates a model */
router.patch("/:project_id/:id", model.update);

module.exports = router;
