const db = require("../models");
const Project = db.projects;

// Find all the projects of an user.
exports.findAllProjects = (req, res) => {
  const created_by = req.params.id;
  var condition = created_by
    ? { created_by: { $regex: new RegExp(created_by), $options: "i" } }
    : {};

  Project.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
