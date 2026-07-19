import * as booksDatabase from "../database/book.database.js";

// Sin transformación, pasa directo a la capa de datos
export const getAllBooks = async () => {
  return await booksDatabase.findAllBooks();
};

// Lanza NOT_FOUND si el array de resultado está vacío
export const getBookById = async (id) => {
  const book = await booksDatabase.findBookById(id);
  if (!book) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

// Lanza NOT_FOUND si no había fila que borrar
export const deleteBookById = async (id) => {
  const book = await booksDatabase.removeBookById(id);
  if (!book) {
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
  if (!book) {
    throw { code: "NOT_FOUND" };
  }
  return book;
};

export const searchBook = async (query) => {
  return await booksDatabase.searchBook(query);
};

// export const searchBookByName = async (title) => {
//   const book = await booksDatabase.searchBookByName(title);
//   if (!book) {
//     throw { code: "NOT_FOUND" };
//   }
//   return book;
// };

export const decreaseStock = async (id) => {
  const book = await booksDatabase.findBookById(id);

  if (!book) {
    throw { code: "BOOK_NOT_FOUND" };
  }
  const resultStock = await booksDatabase.putpurchaseBook(id);
  if (!resultStock) {
    throw { code: "OUT_OF_STOCK" };
  }

  return resultStock;
};
