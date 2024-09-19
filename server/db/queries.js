import pool from "./pool.js";

async function getItems(search) {
  let text =
    "SELECT title, price, description, image, inventory.category, rating_rate, rating_count FROM inventory JOIN categories ON inventory.category = categoryId";
  if (search) {
    text += " WHERE category = $1";
    var values = search;
  }
  const { rows } = await pool.query(text, values);
  return rows;
}

const db = { getItems };
export default db;
