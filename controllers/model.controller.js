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
            res.status(400).send(saveerr.message);
          }
        });
      }
    } else {
      res.status(400).send(err.message);
    }
  });
};