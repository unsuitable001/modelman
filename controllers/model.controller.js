const db = require("../models");
const model = db.models;
const project = db.projects;

// Updates a model.
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const project_id = req.params.project_id;
  const id = req.params.id;

  project.findById(project_id, function (err, result) {
    if (!err) {
      if (!result) {
        res.status(404).send("Project was not found");
      } else {
        if (req.body.title) result.models.id(id).title = req.body.title;
        if (req.body.parameters)
          result.models.id(id).parameters = req.body.parameters;
        if (req.body.synthetic_data)
          result.models.id(id).synthetic_data = req.body.synthetic_data;

        result.markModified("models");
        result.save(function (saveerr, saveresult) {
          if (!saveerr) {
            res.status(200).send(saveresult.models.id(id));
          } else {
            res.status(500).send({
              message: err.message || "Some error occurred while saving model.",
            });
          }
        });
      }
    } else {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving project/model.",
      });
    }
  });
};

// Adds a model to project.
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const project_id = req.params.project_id;

  project.findById(project_id, function (err, result) {
    if (!err) {
      if (!result) {
        res.status(404).send("Project was not found");
      } else {
        result.models.push(req.body);
        result.markModified("models");
        result.save(function (saveerr, saveresult) {
          if (!saveerr) {
            res.status(200).send(saveresult);
          } else {
            res.status(500).send({
              message:
                saveerr.message || "Some error occurred while saving project.",
            });
          }
        });
      }
    } else {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving project.",
      });
    }
  });
};

// Removes a model from a project.
exports.remove = (req, res) => {
  const project_id = req.params.project_id;
  const id = req.params.id;

  project.findById(project_id, function (err, result) {
    if (!err) {
      if (!result) {
        res.status(404).send("Project was not found");
      } else {
        result.models.id(id).remove(function (removeerr, removresult) {
          if (removeerr) {
            res.status(400).send(removeerr.message);
          }
        });
        result.markModified("models");
        result.save(function (saveerr, saveresult) {
          if (!saveerr) {
            res.status(200).send(saveresult);
          } else {
            res.status(500).send({
              message:
                saveerr.message || "Some error occurred while saving project.",
            });
          }
        });
      }
    } else {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving project/model.",
      });
    }
  });
};
