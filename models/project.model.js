models = require("./model.model.js");

module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: String,
    real_data: [String],
    created_by: String,
    models: [new mongoose.model("model").schema],
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Project = mongoose.model("project", schema);
  return Project;
};
