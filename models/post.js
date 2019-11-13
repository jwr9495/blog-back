const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: String,
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  contents: String,
  date: { type: Date, default: Date.now },
  commnents: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }]
});

const Post = model("Post", postSchema);

function validatePost(post) {
  const Schema = Joi.object({
    title: Joi.string(),
    author: Joi.string(),
    contents: Joi.string(),
    date: Joi.date(),
    commnents: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string())
  });
  return Schema.validate(post);
}
module.exports = {
  Post,
  validatePost
};
