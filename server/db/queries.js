import pool from "./pool.js";

async function getItems(search) {
  let text =
    "SELECT name, price, description, img, category, rating_rate, rating_count FROM inventory JOIN categories ON inventory.category = categoryId";
  if (search) {
    text += " WHERE category = $1";
    var values = search;
  }
  const { rows } = await pool.query(text, values);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(string) {
  const { rows } = await pool.query(
    "SELECT username FROM usernames WHERE username LIKE '%" + string + "%'"
  );
  return rows;
}

async function deleteAll() {
  await pool.query("DELETE FROM usernames");
}

const db = { getAllUsernames, insertUsername, searchUsername, deleteAll };
export default db;
