var express = require("express");
var router = express.Router();
const project = require("../controllers/project.controller.js");
const dataset = require("../controllers/datasets.controller.js");

/* POST create a new project. */
router.post("/", project.create);

/* PATCH updates a project */
router.patch("/:id", project.update);

/* POST uploads a new real dataset */
router.post("/:project_id/upload", dataset.upload);

module.exports = router;
