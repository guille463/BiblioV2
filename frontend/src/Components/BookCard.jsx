import "./BookCard.css";
import { FavEmoji } from "../utils/Emojis";
import { Link } from "react-router-dom";
import { useBooksState, useBooksDispatch } from "../context/books-context";

/**
 * Tarjeta de libro del catálogo.
 *
 * Consume favoritos y carrito directamente del contexto.
 *
 * @param {Object} props
 * @param {Book} props.book
 */
export function BookCard({ book }) {
  const { favIsbns, cart } = useBooksState();
  const dispatch = useBooksDispatch();

  const isFav = favIsbns.includes(book.isbn);
  const isOnPur = cart.some((item) => item.book.id === book.id);
  const isAvailable = book.stock > 0;
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const favText = isFav ? `Me gusta ${FavEmoji}` : "Añadir a mi lista";
  const purchaseTextButton = isOnPur ? "Añadir otro" : "Añadir al carrito";

  return (
    <article className="book-card">
      <Link to={`/books/${book.id}`} className="book-card-link">
        <header className="book-card-header">
          <img
            className="book-card-img"
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
            alt={book.title}
          />
          <div className="book-card-info">
            <h3 className="book-card-title">Titulo: {book.title}</h3>
            <p className="book-card-author">Autor/a: {book.author}</p>
            <ul className="book-list-info">
              <li className="book-card-stock">Stock: {book.stock}</li>
              <li className="book-card-stock-info">Estado: {textAvailable}</li>
            </ul>
          </div>
        </header>
        <span className="book-card-price"> Precio: {book.price} €</span>
      </Link>

      <aside>
        <button
          className="fav-button"
          onClick={() => dispatch({ type: "TOGGLE_FAV", isbn: book.isbn })}
        >
          {favText}
        </button>
        <button
          className="purchase-button"
          disabled={!isAvailable}
          onClick={() => dispatch({ type: "ADD_TO_CART", book })}
        >
          {purchaseTextButton}
        </button>
      </aside>
    </article>
  );
}
