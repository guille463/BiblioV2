import * as booksDatabase from "../database/book.database.js";

// Sin transformación, pasa directo a la capa de datos
export const getAllBooks = async () => {
  return await booksDatabase.findAllBooks();
};

// Lanza NOT_FOUND si el array de resultado está vacío
export const getBookById = async (id) => {
  const book = await booksDatabase.findBookById(id);
  if (book.length === 0) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

// Lanza NOT_FOUND si no había fila que borrar
export const deleteBookById = async (id) => {
  const book = await booksDatabase.removeBookById(id);
  if (book.length === 0) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

// Sin validación de datos antes de insertar
export const createBook = async (data) => {
  return await booksDatabase.insertBook(data);
};

// Lanza NOT_FOUND si no había fila que actualizar
export const editBookById = async (id, data) => {
  const book = await booksDatabase.updateBookById(id, data);
  if (book.length === 0) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};
