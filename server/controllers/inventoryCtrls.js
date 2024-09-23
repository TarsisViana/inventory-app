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

export async function addItemCart(req, res) {
  const { id, amount } = req.body;
  await db.addToCart(id, amount);
  res.end("200");
}

export async function deleteCartItem(req, res) {
  await db.cartDelete(req.params.id);
  res.end("200");
}

export async function updateItemAmount(req, res) {
  const { id, amount } = req.body;
  await db.updateAmount(id, amount);
  res.end("200");
}
