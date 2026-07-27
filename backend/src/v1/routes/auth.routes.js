import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/register", register);

export default router;
