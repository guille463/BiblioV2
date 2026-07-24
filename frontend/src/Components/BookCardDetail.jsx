import { FavEmoji } from "../utils/Emojis";
import { useBooksState, useBooksDispatch } from "../context/books-context";

import "./BookCardDetail.css";

/** @typedef {import('../types.js').Book} Book */

/**
 * Vista de detalle de un libro.
 *
 * Consume favoritos y carrito del contexto, igual que BookCard esta página
 * solo aporta el libro cargado.
 *
 * @param {Object} props
 * @param {Book} props.book
 */
export function BookCardDetail({ book }) {
  const { favIsbns, cart } = useBooksState();
  const dispatch = useBooksDispatch();

  const isOnPur = cart.some((item) => item.book.id === book.id);
  const isFav = favIsbns.includes(book.isbn);
  const isAvailable = book.stock > 0;
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const favText = isFav ? `Me gusta ${FavEmoji}` : "Añadir a mi lista";
  const purchaseTextButton = isOnPur ? "Añadir otro" : "Añadir al carrito";

  const handleToggleFav = () =>
    dispatch({ type: "TOGGLE_FAV", isbn: book.isbn });
  const handleAddToCart = () => dispatch({ type: "ADD_TO_CART", book });

  return (
    <article className="book-detail-card">
      <header className="book-detail-card-header">
        <img
          className="book-detail-card-img"
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
          alt={book.title}
        />
        <div className="book-detail-card-info">
          <h3 className="book-detail-card-title">Titulo: {book.title}</h3>
          <p className="book-detail-card-author">Autor/a: {book.author}</p>
          <ul className="book-detail-list-info">
            <li className="book-detail-card-genre">Genero: {book.genre}</li>
            <li className="book-detail-card-isbn">ISBN: {book.isbn}</li>
            <li className="book-detail-card-year">Año: {book.year}</li>
            <li className="book-detail-card-stock">Stock: {book.stock}</li>
            <li className="book-detail-card-stock-info">
              Estado: {textAvailable}
            </li>
          </ul>
          <span className="book-detail-card-price">Precio: {book.price} €</span>
        </div>
      </header>
      <aside>
        <button className="fav-detail-button" onClick={handleToggleFav}>
          {favText}
        </button>
        <button
          className="purchase-detail-button"
          disabled={!isAvailable}
          onClick={handleAddToCart}
        >
          {purchaseTextButton}
        </button>
      </aside>
    </article>
  );
}
