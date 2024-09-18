import db from "../db/queries.js";

export async function getMessages(req, res) {
  const { search } = req.query;
  const items = db.getItems(search);
}
