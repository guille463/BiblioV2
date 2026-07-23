import * as booksDatabase from "../database/book.database.js";

/**
 * @returns {Promise<Book[]>}
 */
export const getAllBooks = async () => {
  return await booksDatabase.findAllBooks();
};

/**
 * @param {string|number} id
 * @returns {Promise<Book>}
 * @throws {{code: 'NOT_FOUND'}} Si el libro no existe.
 */
export const getBookById = async (id) => {
  const book = await booksDatabase.findBookById(id);
  if (!book) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

/**
 * @param {string|number} id
 * @returns {Promise<Book>} El libro eliminado.
 * @throws {{code: 'NOT_FOUND'}} Si no había fila que borrar.
 */
export const deleteBookById = async (id) => {
  const book = await booksDatabase.removeBookById(id);
  if (!book) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

/**
 * No valida los datos de entrada: la validación vive en el controlador.
 * @param {BookInput} data
 * @returns {Promise<Book>}
 */
export const createBook = async (data) => {
  return await booksDatabase.insertBook(data);
};

/**
 * @param {string|number} id
 * @param {BookInput} data
 * @returns {Promise<Book>}
 * @throws {{code: 'NOT_FOUND'}} Si el libro no existe.
 */
export const editBookById = async (id, data) => {
  const book = await booksDatabase.updateBookById(id, data);
  if (!book) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

/**
 * @param {string} query
 * @returns {Promise<Book[]>} Array vacío si no hay coincidencias.
 */
export const searchBook = async (query) => {
  return await booksDatabase.searchBook(query);
};

/**
 * Descuenta stock de un solo libro.
 *
 * La comprobación previa con findBookById existe únicamente para distinguir
 * "no existe" de "sin stock"
 *
 * @param {string|number} id
 * @param {number} quantity - Entero >= 1, validado en el controlador.
 * @returns {Promise<Book>} El libro con el stock ya descontado.
 * @throws {{code: 'BOOK_NOT_FOUND'}} Si el libro no existe.
 * @throws {{code: 'OUT_OF_STOCK'}} Si el stock es insuficiente.
 */
export const decreaseStock = async (id, quantity) => {
  const book = await booksDatabase.findBookById(id);

  if (!book) {
    throw { code: "BOOK_NOT_FOUND" };
  }
  const resultStock = await booksDatabase.putpurchaseBook(id, quantity);
  if (!resultStock) {
    throw { code: "OUT_OF_STOCK" };
  }

  return resultStock;
};
