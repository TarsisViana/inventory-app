import { Router } from "express";
const router = Router();

router.get("/", getItems);

export default router;
