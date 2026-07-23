import { pool } from "../db.js";

/**
 * Recupera todos los libros ordenados por id.
 * @returns {Promise<Book[]>}
 */
export const findAllBooks = async () => {
  const { rows } = await pool.query("SELECT * FROM books ORDER BY id");
  return rows;
};

/**
 * Busca un libro por su clave primaria.
 * @param {string|number} id
 * @returns {Promise<Book|null>} null si no existe la fila.
 */
export const findBookById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return rows[0] || null;
};

/**
 * Elimina un libro y devuelve la fila borrada.
 * @param {string|number} id
 * @returns {Promise<Book|null>} null si no había fila que borrar.
 */
export const removeBookById = async (id) => {
  const { rows } = await pool.query(
    "DELETE FROM books WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0] || null;
};

/**
 * Inserta un libro nuevo.
 * @param {BookInput} data
 * @returns {Promise<Book>}
 */
export const insertBook = async (data) => {
  const { rows } = await pool.query(
    "INSERT INTO books (title, author, isbn, genre, year, stock, price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      data.title,
      data.author,
      data.isbn,
      data.genre,
      data.year,
      data.stock,
      data.price,
    ],
  );
  return rows[0];
};

/**
 * Reemplaza todos los campos de un libro.
 * @param {string|number} id
 * @param {BookInput} data
 * @returns {Promise<Book|null>} null si el id no existe.
 */
export const updateBookById = async (id, data) => {
  const { rows } = await pool.query(
    "UPDATE books SET title = $1, author = $2, isbn = $3, genre = $4, year = $5, stock = $6, price = $7 WHERE id = $8 RETURNING *",
    [
      data.title,
      data.author,
      data.isbn,
      data.genre,
      data.year,
      data.stock,
      data.price,
      id,
    ],
  );
  return rows[0] || null;
};

/**
 * Busca por coincidencia parcial en título, autor, isbn o género.
 * @param {string} query - Texto sin comodines; se envuelve en % internamente.
 * @returns {Promise<Book[]>}
 */
export const searchBook = async (query) => {
  const { rows } = await pool.query(
    "SELECT * FROM books WHERE title ILIKE $1 OR author ILIKE $1 OR isbn ILIKE $1 OR genre ILIKE $1 ORDER BY id",
    [`%${query}%`],
  );
  return rows;
};

/**
 * Descuenta stock de forma atómica.
 * La condición `stock >= $2` en el propio UPDATE evita race conditions:
 * si no hay stock suficiente, no se actualiza ninguna fila.
 * @param {string|number} id
 * @param {number} quantity - Entero >= 1.
 * @returns {Promise<Book|null>} null si no existe o no hay stock suficiente.
 */
export const putpurchaseBook = async (id, quantity) => {
  const result = await pool.query(
    "UPDATE books SET stock = stock - $2 WHERE id = $1 AND stock >= $2 RETURNING *",
    [id, quantity],
  );
  return result.rows[0] || null;
};
