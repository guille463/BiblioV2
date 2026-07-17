import { data } from "react-router-dom";
import { pool } from "../db.js";

/**
 * @returns {Promise<Array<Object>>} Todas las filas de books
 */
export const findAllBooks = async () => {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
};

/**
 * @param {string|number} id
 * @returns {Promise<Object|null>} Libro encontrado o null
 */
export const findBookById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return rows[0] || null;
};

/**
 * @param {string|number} id
 * @returns {Promise<Object|null>} Libro eliminado oo null
 */
export const removeBookById = async (id) => {
  const { rows } = await pool.query(
    "DELETE FROM books WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0] || null;
};

/**
 * @param {{title:string, author:string, isbn:string, genre:string, year:number, stock:number}} data
 * @returns {Promise<Object>} Libro creado
 */
export const insertBook = async (data) => {
  const { rows } = await pool.query(
    "INSERT INTO books (title, author, isbn, genre, year, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [data.title, data.author, data.isbn, data.genre, data.year, data.stock],
  );
  return rows[0];
};

/**
 * @param {string|number} id
 * @param {{title:string, author:string, isbn:string, genre:string, year:number, stock:number}} data
 * @returns {Promise<Object|null>} Libro actualizado o null
 */
export const updateBookById = async (id, data) => {
  const { rows } = await pool.query(
    "UPDATE books SET title = $1, author = $2, isbn = $3, genre = $4, year = $5, stock = $6 WHERE id = $7 RETURNING *",
    [data.title, data.author, data.isbn, data.genre, data.year, data.stock, id],
  );
  return rows[0] || null;
};

//CAMBIAR A getBookByName
export const searchBookByName = async (title) => {
  const { rows } = await pool.query(
    "SELECT * FROM books WHERE title ILIKE $1",
    [`%${title}%`],
  );
  return rows || null;
};

//CAMBIAR el titulo por id

export const putpurchaseBook = async (id) => {
  const result = await pool.query(
    "UPDATE books SET stock = stock - 1 WHERE id = $1 AND stock > 0 RETURNING *",
    [id],
  );
  return result.rows[0] || null;
};
