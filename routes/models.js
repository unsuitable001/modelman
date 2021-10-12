var express = require("express");
var router = express.Router();
const model = require("../controllers/model.controller.js");
const dataset = require("../controllers/datasets.controller.js");

/* POST creates a new model under a project */
router.post("/:project_id", model.create);

/* PATCH updates a model */
router.patch("/:project_id/:id", model.update);

/* PATCH updates a model */
router.patch("/:project_id/:id/remove", model.remove);

/* PATCH creates synthetic data */
router.patch("/:project_id/:id/generate", dataset.generate);

module.exports = router;
