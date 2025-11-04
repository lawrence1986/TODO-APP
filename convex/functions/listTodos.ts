import { mutation } from "./_generated/server";
import { query } from "./_generated/server";


export default query(async ({ db }) => {
  const results = await db.query("todos").orderBy("order", "desc").collect();
  return results;
});
