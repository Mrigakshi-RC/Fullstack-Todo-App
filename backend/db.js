const mongoose = require("mongoose");

const mongoUrl = SOME_URL;

mongoose.connect(mongoUrl);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
