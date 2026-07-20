import * as ordersDatabase from "../database/order.database.js";
import * as booksDatabase from "../database/book.database.js";

export const createOrder = async (items) => {
  try {
    const { order, books } = await ordersDatabase.insertOrder(items);
    return { order, books };
  } catch (err) {
    if (err.code === "OUT_OF_STOCK") {
      const book = await booksDatabase.findBookById(err.bookId);
      if (!book) {
        throw {
          code: "BOOK_NOT_FOUND",
          message: `No existe libro con id ${err.bookId}`,
        };
      }
      throw {
        code: "OUT_OF_STOCK",
        message: `Stock insuficiente de "${book.title}": quedan ${book.stock}`,
      };
    }
    throw err;
  }
};
