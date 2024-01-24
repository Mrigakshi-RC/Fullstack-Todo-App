const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: z.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};
