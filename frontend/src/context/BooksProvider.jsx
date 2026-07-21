import { useReducer } from "react";
import { BooksContext, BooksDispatchContext } from "./books-context.js";
import { booksReducer, initialState } from "./books-reducer.js";

export function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(booksReducer, initialState);
  console.log(state);

  return (
    <BooksContext value={state}>
      <BooksDispatchContext value={dispatch}>{children}</BooksDispatchContext>
    </BooksContext>
  );
}
