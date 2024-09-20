import pool from "./pool.js";

async function inventorySearch(search) {
  let text =
    "SELECT itemid AS id, title, price, description, image, categories.name AS category, rating_rate, rating_count FROM inventory JOIN categories ON inventory.category = categoryid";
  if (search) {
    text += " WHERE categoryId = $1";
    var values = [search];
  }
  const { rows } = await pool.query(text, values);
  return rows;
}

async function getCart() {
  const query = "SELECT itemid as id, amount FROM cart";
  const { rows } = await pool.query(query);
  return rows;
}

async function getCartItems() {
  const query =
    " SELECT inventory.itemid AS id, title, price, description, image, categories.name AS category, rating_rate, rating_count, amount FROM inventory JOIN categories ON inventory.category = categoryid JOIN cart ON inventory.itemid=cart.itemid";
  const { rows } = await pool.query(query);
  return rows;
}

const db = { inventorySearch, getCart, getCartItems };
export default db;
