import db from "../db/queries.js";

export async function getItems(req, res) {
  const { search } = req.query;
  const items = await db.inventorySearch(search);

  res.json(items);
}

export async function getCart(req, res) {
  const items = await db.getCart();
  res.json(items);
}

export async function getCartItems(req, res) {
  const items = await db.getCartItems();
  res.json(items);
}
