import { Router } from "express";
import * as bookControllers from "../controllers/book.controller.js";
import { requireAuth, requireRole } from "../middlewares/auth.middleware.js";

const router = Router();

// GET todos los libros
router.get("/books", bookControllers.getBooks);

// PUT restar stock
router.put("/books/buy/:id", requireAuth, bookControllers.purchaseBook);

// GET libro por ID
router.get("/books/:id", bookControllers.getBook);

// POST nuevo libro — admin
router.post(
  "/books/",
  requireAuth,
  requireRole("admin"),
  bookControllers.postBook,
);

// DELETE libro por ID — admin
router.delete(
  "/books/:id",
  requireAuth,
  requireRole("admin"),
  bookControllers.deleteBook,
);

// PUT actualizar libro por ID — admin
router.put(
  "/books/:id",
  requireAuth,
  requireRole("admin"),
  bookControllers.updateBook,
);

export default router;
