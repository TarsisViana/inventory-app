import pool from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
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
