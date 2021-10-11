var express = require("express");
var router = express.Router();
const model = require("../controllers/model.controller.js");

/* POST creates a new model under a project */
router.post("/:project_id", model.create);

/* PATCH updates a model */
router.patch("/:project_id/:id", model.update);

/* PATCH updates a model */
router.patch("/:project_id/:id/remove", model.remove);

module.exports = router;
