import { FavEmoji } from "../utils/Emojis";
import "./BookCardDetail.css";

export function BookCardDetail({
  book,
  isFav,
  isOnPur,
  onToggleFav,
  onAddToCart,
}) {
  const isAvailable = book.stock > 0;
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const favText = isFav ? `Me gusta ${FavEmoji}` : "Añadir a mi lista";
  const purchaseTextButton = isOnPur ? "Añadir otro" : "Añadir al carrito";

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
          <span className="book-detail-card-price">
            {" "}
            Precio: {book.price} €
          </span>
        </div>
      </header>
      <aside>
        <button className="fav-detail-button" onClick={onToggleFav}>
          {favText}
        </button>
        <button
          className="purchase-detail-button"
          disabled={!isAvailable}
          onClick={onAddToCart}
        >
          {purchaseTextButton}
        </button>
      </aside>
    </article>
  );
}
