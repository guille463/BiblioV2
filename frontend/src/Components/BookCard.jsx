import "./BookCard.css";
import { FavEmoji } from "../utils/Emojis";

export function BookCard({
  book,
  isFav,
  isOnPur,
  onToggleFav,
  onTogglePurchase,
}) {
  const isAvailable = book.stock > 0;
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const favText = isFav ? `Me gusta ${FavEmoji}` : "Añadir a mi lista";
  const purchaseTextButton = isAvailable ? "" : "Sin stock";

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
          <p className="book-card-author">Autor: {book.author}</p>
          <p className="book-card-isbn">ISBN: {book.isbn}</p>
          <p className="book-card-genre">Genero: {book.genre}</p>
          <p className="book-card-year">Año: {book.year}</p>
          <p className="book-card-stock">Stock: {book.stock}</p>
          <p className="book-card-stock-info">Estado: {textAvailable}</p>
        </div>
      </header>
      <aside>
        <button onClick={() => onToggleFav(book)}>{favText}</button>
        <button
          className="purchase-button"
          disabled={!isAvailable}
          onClick={() => onTogglePurchase(book)}
        >
          {purchaseTextButton}
        </button>
      </aside>
    </article>
  );
}
