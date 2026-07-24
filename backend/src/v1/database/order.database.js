import { pool } from "../db.js";

/**
 * Crea un pedido dentro de una transacción.
 *
 * Secuencia: descuenta stock de cada libro -> inserta la cabecera del pedido
 * -> inserta las líneas. Cualquier fallo hace ROLLBACK completo, de modo que
 * no queda stock descontado sin pedido asociado.
 *
 * Si rowCount es 0 significa que el libro no existe o no hay stock suficiente.
 *
 * @param {OrderItem[]} items - Sin ids duplicados
 * @returns {Promise<OrderResult>}
 * @throws {{code: 'OUT_OF_STOCK', bookId: number}} Si algún libro no admite el descuento.
 */
export const insertOrder = async (items) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const updatedBooks = [];

    for (const { bookId, quantity } of items) {
      const result = await client.query(
        "UPDATE books SET stock = stock - $2 WHERE id = $1 AND stock >= $2 RETURNING *",
        [bookId, quantity],
      );
      if (result.rowCount === 0) {
        throw { code: "OUT_OF_STOCK", bookId };
      }

      updatedBooks.push(result.rows[0]);
    }

    const orderResult = await client.query(
      "INSERT INTO orders DEFAULT VALUES RETURNING *",
    );
    const order = orderResult.rows[0];

    for (const { bookId, quantity } of items) {
      await client.query(
        "INSERT INTO order_items (order_id, book_id, quantity) VALUES ($1, $2, $3)",
        [order.id, bookId, quantity],
      );
    }

    await client.query("COMMIT");
    return { order, books: updatedBooks };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};
