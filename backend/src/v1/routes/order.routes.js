import { Router } from "express";
import { postOrder } from "../controllers/order.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();
router.post("/order", requireAuth, postOrder);

export default router;
