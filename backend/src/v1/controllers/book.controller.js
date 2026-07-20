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

export const searchBook = async (req, res) => {
  try {
    const books = await bookServices.searchBook(req.params.query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};

// export const getBookByName = async (req, res) => {
//   try {
//     const book = await bookServices.searchBookByName(req.params.title);
//     res.json(book);
//   } catch (error) {
//     console.log(error);
//   }
// };

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
    console.error(error);
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

/**
 * Decrementar vel stock del libro en 1
 * @param {import('express).Request} req - req.params.id: id(libro)
 * @param {import('express).Request} res - book
 */
export const purchaseBook = async (req, res) => {
  const { id } = req.params;
  const quantity = Number(req.body.quantity);

  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({ error: "Cantidad no valida" });
  }

  try {
    const updated = await bookServices.decreaseStock(id, quantity);
    res.json(updated);
  } catch (err) {
    if (err.code === "BOOK_NOT_FOUND") {
      return res.status(404).json({ error: err.message });
    }
    if (err.code === "OUT_OF_STOCK") {
      return res.status(409).json({ error: err.message });
    }
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
};

export default {
  getBooks,
  searchBook,
  //getBookByName,
  getBook,
  postBook,
  deleteBook,
  updateBook,
  purchaseBook,
};
