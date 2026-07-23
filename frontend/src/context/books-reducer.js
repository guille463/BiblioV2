export const initialState = { favIsbns: [], cart: [] };

/**
 * Reducer del estado global de libros: favoritos y carrito.
 *
 * Todas las ramas devuelven una referencia nueva; ninguna muta el estado
 * recibido. Es lo que permite a React detectar el cambio por identidad.
 *
 * @param {BooksState} state
 * @param {BooksAction} action
 * @returns {BooksState}
 * @throws {Error} Si el tipo de acción no está contemplado.
 */
export function booksReducer(state, action) {
  switch (action.type) {
    /**
     * Alterna un ISBN en favoritos.
     */
    case "TOGGLE_FAV": {
      const isbn = action.isbn;
      const exists = state.favIsbns.includes(isbn);
      return {
        ...state,
        favIsbns: exists
          ? state.favIsbns.filter((i) => i !== isbn)
          : [...state.favIsbns, isbn],
      };
    }

    /**
     * Añade una unidad. Si el libro ya está en el carrito incrementa la
     * cantidad, con tope en book.stock. Ignora la acción si stock <= 0.
     */
    case "ADD_TO_CART": {
      const book = action.book;
      if (book.stock <= 0) {
        return state;
      }
      const existing = state.cart.find((item) => item.book.id === book.id);
      const cart = !existing
        ? [...state.cart, { book, quantity: 1 }]
        : state.cart.map((item) =>
            item.book.id === book.id && item.quantity < book.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
      return { ...state, cart };
    }

    /** Elimina la línea completa, sea cual sea su cantidad. */
    case "REMOVE_FROM_CART": {
      const book = action.book;
      return {
        ...state,
        cart: state.cart.filter((item) => item.book.id !== book.id),
      };
    }

    /**
     * Resta una unidad. El filter posterior elimina la línea si la cantidad
     * llega a 0
     */
    case "REMOVE_ONE_FROM_CART": {
      const book = action.book;
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.book.id === book.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }

    /** Vacía el carrito tras una compra confirmada. */

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
}
