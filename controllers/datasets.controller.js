const db = require("../models");
const Project = db.projects;
const Model = db.models;
const uploadFile = require("../middleware/upload");

// Saves a real dataset to the bucket.
exports.upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const project_id = req.params.project_id;
    Project.updateOne(
      { _id: project_id },
      { $push: { real_data: req.file.filename } },
      function (error, success) {
        if (error) {
          res.status(500).send({
            message: `Failed to update project: ${req.params.project_id}. ${err}`,
          });
        } else {
          res
            .status(200)
            .send({ message: "file uploaded", file: req.file.filename });
        }
      }
    );
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

exports.generate = (req, res) => {
  try {
    // TODO: Implement actual synthetic data generation algo here.
    const project_id = req.params.project_id;
    const model_id = req.params.id;
    let datasetName = Date.now().toString() + "syn";
    Project.updateOne(
      { _id: project_id, "models._id": model_id },
      { $push: { "models.$.synthetic_data": datasetName } },
      function (error, success) {
        if (error) {
          res.status(500).send({
            message: `Failed to update model: ${req.params.model_id}. ${err}`,
          });
        } else {
          res
            .status(200)
            .send({ message: "file generated", file: datasetName });
        }
      }
    );
  } catch (err) {
    res.status(500).send({
      message: `Could not generate the file: ${datasetName}. ${err}`,
    });
  }
};

exports.removeSynthetic = (req, res) => {
  try {
    // TODO: Implement actual data removal logic here.
    const project_id = req.params.project_id;
    const model_id = req.params.id;
    const datasetName = req.params.name;
    Project.updateOne(
      { _id: project_id, "models._id": model_id },
      { $pull: { "models.$.synthetic_data": datasetName } },
      function (error, success) {
        if (error) {
          res.status(500).send({
            message: `Failed to update model: ${req.params.model_id}. ${err}`,
          });
        } else {
          res.status(200).send({ message: "file deleted", file: datasetName });
        }
      }
    );
  } catch (err) {
    res.status(500).send({
      message: `Could not fulfill the request. ${err}`,
    });
  }
};
