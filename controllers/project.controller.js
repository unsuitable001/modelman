const db = require("../models");
const Project = db.projects;

// Create a new Project
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.title &&
    !req.body.created_by &&
    !req.body.models &&
    !req.body.models.parameters &&
    !req.body.models.parameters.batch_size &&
    !req.body.models.parameters.training_cycles
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Project
  const project = new Project({
    title: req.body.title,
    created_by: req.body.created_by,
    real_data: req.body.real_data,
    models: req.body.models,
  });

  // Save Project in the database
  project
    .save(project)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project.",
      });
    });
};
