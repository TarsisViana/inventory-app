import db from "../db/queries.js";

export async function getMessages(req, res) {
  const { search } = req.query;
  const items = await db.getItems(search);

  res.json(items);
}
