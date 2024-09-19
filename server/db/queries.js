import pool from "./pool.js";

async function getItems(search) {
  let text =
    "SELECT itemid, title, price, description, image, categories.name AS category, rating_rate, rating_count FROM inventory JOIN categories ON inventory.category = categoryid";
  if (search) {
    text += " WHERE categoryId = $1";
    var values = [search];
  }
  const { rows } = await pool.query(text, values);
  return rows;
}

const db = { getItems };
export default db;
