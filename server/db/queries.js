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
  const query = "SELECT itemid as id, amount FROM cart ORDER BY itemid";
  const { rows } = await pool.query(query);
  return rows;
}

async function getCartItems() {
  const query =
    "SELECT inventory.itemid AS id, title, price, description, image, categories.name AS category, rating_rate, rating_count, amount FROM inventory JOIN categories ON inventory.category = categoryid JOIN cart ON inventory.itemid=cart.itemid ORDER BY cartid";
  const { rows } = await pool.query(query);
  return rows;
}

async function addToCart(id, amount) {
  const query =
    "INSERT INTO cart (itemid, amount) OVERRIDING SYSTEM VALUE VALUES ($1,$2) ON CONFLICT(itemid) WHERE itemid>=0 DO UPDATE SET amount = EXCLUDED.amount + cart.amount";
  await pool.query(query, [id, amount]);
}

async function cartDelete(id) {
  const query = "DELETE FROM cart WHERE itemid = $1";
  await pool.query(query, [id]);
}

async function updateAmount(id, amount) {
  const query = "UPDATE cart SET amount = $1 WHERE itemid = $2";
  await pool.query(query, [amount, id]);
}

const db = {
  inventorySearch,
  getCart,
  getCartItems,
  addToCart,
  cartDelete,
  updateAmount,
};
export default db;
