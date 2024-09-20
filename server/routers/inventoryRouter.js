import { Router } from "express";
import {
  getItems,
  getCart,
  getCartItems,
} from "../controllers/inventoryCtrls.js";
const router = Router();

router.get("/", getItems);
router.get("/cart", getCart);
router.get("/cartdetails", getCartItems);

export default router;
