const db = require("../models");
const Project = db.projects;
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
