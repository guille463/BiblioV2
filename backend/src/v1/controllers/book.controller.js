import * as bookServices from "../services/book.services.js";

/**
 * Obtiene todos los libros.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>} JSON con array de libros, status 200
 */
export const getBooks = async (req, res) => {
  const books = await bookServices.getAllBooks();
  res.json(books);
};

/**
 * Obtiene un libro por ID.
 * @param {import('express').Request} req - req.params.id: ID del libro
 * @param {import('express').Response} res
 * @returns {Promise<void>} 200 con libro | 404 si no existe | 400 ID inválido | 500 error interno
 */
export const getBook = async (req, res) => {
  try {
    const book = await bookServices.getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    if (error.code === "NOT_FOUND") {
      return res.status(404).json({ message: "Book not found" });
    }
    if (error?.code === "22P02") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    res.status(500).json({ message: "Internal error" });
  }
};

/**
 * Elimina un libro por ID.
 * @param {import('express').Request} req - req.params.id: ID del libro
 * @param {import('express').Response} res
 * @returns {Promise<void>} 200 con libro eliminado | 404 | 400 ID inválido | 500
 */
export const deleteBook = async (req, res) => {
  try {
    const book = await bookServices.deleteBookById(req.params.id);
    res.json(book);
  } catch (error) {
    if (error.code === "NOT_FOUND") {
      return res.status(404).json({ message: "Book not found" });
    }
    if (error.code === "22P02") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    res.status(500).json({ message: "Internal error" });
  }
};

/**
 * Crea un libro nuevo.
 * @param {import('express').Request} req - req.body: datos del libro
 * @param {import('express').Response} res
 * @returns {Promise<void>} 201 con libro creado | 500 error interno
 */
export const postBook = async (req, res) => {
  try {
    const book = await bookServices.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};

/**
 * Actualiza un libro por ID.
 * @param {import('express').Request} req - req.params.id: ID; req.body: campos a actualizar
 * @param {import('express').Response} res
 * @returns {Promise<void>} 200 con libro actualizado | 404 | 400 ID inválido | 500
 */
export const updateBook = async (req, res) => {
  try {
    const book = await bookServices.editBookById(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    if (error.code === "NOT_FOUND") {
      return res.status(404).json({ message: "Book not found" });
    }
    if (error.code === "22P02") {
      return res.status(400).json({ message: "Invalid ID" });
    }
    res.status(500).json({ message: "Internal error" });
  }
};

export default { getBooks, getBook, postBook, deleteBook, updateBook };
