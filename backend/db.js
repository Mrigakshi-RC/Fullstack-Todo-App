const mongoose = require("mongoose");
//mongodb+srv://mrigakshi:pupu2000mongo@cluster0.ot7uljv.mongodb.net/Todos

mongoose.connect(
  "mongodb+srv://mrigakshi:pupu2000mongo@cluster0.ot7uljv.mongodb.net/Todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
