export const initialState = { favIsbns: [], cart: [] };

export function booksReducer(state, action) {
  switch (action.type) {
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
    case "REMOVE_FROM_CART": {
      const book = action.book;
      return {
        ...state,
        cart: state.cart.filter((item) => item.book.id !== book.id),
      };
    }

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

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
}
