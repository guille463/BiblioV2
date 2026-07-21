import { createContext, use } from "react";

export const BooksContext = createContext(null);
export const BooksDispatchContext = createContext(null);

export function useBooksState() {
  const ctx = use(BooksContext);
  if (ctx === null) throw new Error("useBooksState fuera de BooksProvider");
  return ctx;
}

export function useBooksDispatch() {
  const ctx = use(BooksDispatchContext);
  if (ctx === null) throw new Error("useBooksDispatch fuera de BooksProvider");
  return ctx;
}
