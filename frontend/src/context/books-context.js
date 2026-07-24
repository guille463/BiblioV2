import { createContext, use } from "react";

/** @type {import('react').Context<BooksState|null>} */
export const BooksContext = createContext(null);

/** @type {import('react').Context<import('react').Dispatch<BooksAction>|null>} */
export const BooksDispatchContext = createContext(null);

/**
 * Lee el estado global de libros.
 * @returns {BooksState}
 * @throws {Error} Si se llama fuera de BooksProvider.
 */
export function useBooksState() {
  const ctx = use(BooksContext);
  if (ctx === null) throw new Error("useBooksState fuera de BooksProvider");
  return ctx;
}

/**
 * Obtiene el dispatch
 * @returns {import('react').Dispatch<BooksAction>}
 * @throws {Error} Si se llama fuera de BooksProvider.
 */
export function useBooksDispatch() {
  const ctx = use(BooksDispatchContext);
  if (ctx === null) throw new Error("useBooksDispatch fuera de BooksProvider");
  return ctx;
}
