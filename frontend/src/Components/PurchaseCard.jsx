import { useBooksDispatch } from "../context/books-context";
import "./PurchaseCard.css";

/** @typedef {import('../types.js').CartItem} CartItem */

/**
 * Línea del carrito en el desplegable del Header.
 *
 * @param {Object} props
 * @param {CartItem} props.item
 */
export function PurchaseCard({ item }) {
  const dispatch = useBooksDispatch();
  const { book, quantity } = item;

  /** Bloquea "+" cuando la cantidad alcanza el stock disponible. */
  const maxReached = quantity >= book.stock;

  const handleAdd = () => dispatch({ type: "ADD_TO_CART", book });
  const handleSubtract = () => dispatch({ type: "REMOVE_ONE_FROM_CART", book });
  const handleRemove = () => dispatch({ type: "REMOVE_FROM_CART", book });

  return (
    <article className="purchase-card">
      <img
        className="purchase-card-img"
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg`}
        alt={book.title}
      />

      <div className="purchase-card-info">
        <p className="purchase-card-title">{book.title}</p>
        <p className="purchase-card-isbn">{book.isbn}</p>
      </div>

      <span className="purchase-card-quantity">x{quantity}</span>

      <div className="purchase-card-controls">
        <button
          className="purchase-card-subtract"
          onClick={handleSubtract}
          aria-label={`Quitar una unidad de ${book.title}`}
        >
          −
        </button>
        <button
          className="purchase-card-add"
          disabled={maxReached}
          onClick={handleAdd}
          aria-label={`Añadir una unidad de ${book.title}`}
        >
          +
        </button>
      </div>

      <span className="purchase-card-price">
        {(Number(book.price) * quantity).toFixed(2)} €
      </span>

      <button className="purchase-card-remove" onClick={handleRemove}>
        Quitar
      </button>
    </article>
  );
}
