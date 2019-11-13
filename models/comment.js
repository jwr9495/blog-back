const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  post_id: { type: mongoose.Types.ObjectId, ref: "Post" },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  contents: String
});

const Comment = model("Post", commentSchema);

function validateComment(comment) {
  const Schema = Joi.object({
    post_id: Joi.string(),
    author: Joi.string(),
    contents: Joi.string(),
    date: Joi.date()
  });
  return Schema.validate(comment);
}
module.exports = {
  Comment,
  validateComment
};
