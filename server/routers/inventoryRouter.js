import { Router } from "express";
import { getMessages } from "../controllers/inventoryCtrls.js";
const router = Router();

router.get("/", getMessages);

export default router;
