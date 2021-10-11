const db = require("../models");
const Project = db.projects;

// Create a new Project
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title && !req.body.created_by) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Project
  const project = new Project({
    title: req.body.title,
    created_by: req.body.created_by,
    synthetic_data: req.body.synthetic_data,
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
