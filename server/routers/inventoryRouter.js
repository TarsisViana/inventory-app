import { Router } from "express";
import {
  getItems,
  getCart,
  getCartItems,
  addItemCart,
  deleteCartItem,
  updateItemAmount,
} from "../controllers/inventoryCtrls.js";
const router = Router();

router.get("/", getItems);

router.get("/cart", getCart);
router.get("/cartdetails", getCartItems);
router.post("/cart/add", addItemCart);
router.delete("/cart/:id", deleteCartItem);
router.put("/cart", updateItemAmount);

export default router;
