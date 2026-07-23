import * as ordersDatabase from "../database/order.database.js";
import * as booksDatabase from "../database/book.database.js";

/**
 * Crea un pedido y traduce el error crudo de la capa de datos a un error
 * de dominio con mensaje legible.
 *
 * insertOrder lanza `{code:'OUT_OF_STOCK', bookId}` sin poder distinguir si el
 * libro no existe o si falta stock. Aquí se consulta el libro para decidir cuál
 * de los dos códigos corresponde y componer el mensaje.
 *
 * @param {OrderItem[]} items
 * @returns {Promise<OrderResult>}
 * @throws {{code: 'BOOK_NOT_FOUND', message: string}}
 * @throws {{code: 'OUT_OF_STOCK', message: string}}
 */
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
