import { Router } from "express";
import * as bookControllers from "../controllers/book.controller.js";

const router = Router();

// GET todos los libros
router.get("/books", bookControllers.getBooks);

// PUT restar stock (purchase)
router.put("/books/buy/:id", bookControllers.purchaseBook);

// GET libro por ID
router.get("/books/:id", bookControllers.getBook);

// POST nuevo libro
router.post("/books/", bookControllers.postBook);

// DELETE libro por ID
router.delete("/books/:id", bookControllers.deleteBook);

// PUT actualizar libro por ID
router.put("/books/:id", bookControllers.updateBook);

export default router;
