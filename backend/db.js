const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://mrigakshi:pupu2000mongo@cluster0.ot7uljv.mongodb.net/Todos";

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
