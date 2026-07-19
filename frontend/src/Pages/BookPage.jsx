import "./BookCard.css";
import { FavEmoji } from "../utils/Emojis";

export function BookCard({ book, isFav, isOnPur, onToggleFav, onAddToCart }) {
  const isAvailable = book.stock > 0;
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const favText = isFav ? `Me gusta ${FavEmoji}` : "Añadir a mi lista";
  const purchaseTextButton = isOnPur ? "Añadir otro" : "Añadir al carrito";

  return (
    <article className="book-card">
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
            <li className="book-card-isbn">
              <strong>ISBN: {book.isbn}</strong>
            </li>
            <li className="book-card-genre">Genero: {book.genre}</li>
            <li className="book-card-year">Año: {book.year}</li>
            <li className="book-card-stock">Stock: {book.stock}</li>
            <li className="book-card-stock-info">Estado: {textAvailable}</li>
            <li className="book-card-price">Precio: {book.price} €</li>
          </ul>
        </div>
      </header>
      <aside>
        <button className="fav-button" onClick={() => onToggleFav(book)}>
          {favText}
        </button>
        <button
          className="purchase-button"
          disabled={!isAvailable}
          onClick={() => onAddToCart(book)}
        >
          {purchaseTextButton}
        </button>
      </aside>
    </article>
  );
}
