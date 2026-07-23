import * as ordersServices from "../services/order.service.js";

/**
 * POST /order
 * Crea un pedido con varias líneas. Valida que items sea un array no vacío,
 * que cada bookId y quantity sean enteros >= 1, y que no haya libros repetidos.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>} 201 con {order, books} | 400 validación
 *   | 404 libro no encontrado | 409 stock insuficiente | 500 error interno.
 */
export const postOrder = async (req, res) => {
  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "El pedido debe contener items" });
  }

  for (const item of items) {
    const bookId = Number(item.bookId);
    const quantity = Number(item.quantity);

    if (!Number.isInteger(bookId) || bookId < 1) {
      return res.status(400).json({ error: "bookId no valido" });
    }
    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({ error: "Cantidad no valida" });
    }
  }

  const ids = items.map((i) => i.bookId);
  if (new Set(ids).size !== ids.length) {
    return res.status(400).json({ error: "Libros duplicados en el pedido" });
  }

  try {
    const result = await ordersServices.createOrder(items);
    res.status(201).json(result);
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
  postOrder,
};
