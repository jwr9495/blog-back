const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { Schema, model } = mongoose;

const tagSchema = new Schema({
  name: String,
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }]
});

const Tag = model("Tag", tagSchema);

function validateTag(tag) {
  const Schema = Joi.object({
    name: Joi.string(),
    author: Joi.string(),
    posts: Joi.string()
  });
  return Schema.validate(tag);
}
module.exports = {
  Tag,
  validateTag
};
