import { mutation } from "./_generated/server";
import { query } from "./_generated/server";


export default mutation(async ({ db }, todo) => {
  const now = Date.now();
  const doc = {
    title: todo.title,
    description: todo.description ?? "",
    dueDate: todo.dueDate ?? null,
    completed: false,
    createdAt: now,
    order: todo.order ?? now
  };
  return await db.insert("todos", doc);
});
