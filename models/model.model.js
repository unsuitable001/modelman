module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: String,
    parameters: {
      batch_size: Number,
      training_cycles: Number,
    },
    synthetic_data: [String],
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Model = mongoose.model("model", schema);
  return Model;
};
