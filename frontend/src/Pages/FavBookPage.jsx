import { BookCard } from "../components/BookCard";
import { Link } from "react-router-dom";
export function FavBookPage({
  bookFav = [],
  cartItems = [],
  onToggleFav,
  onAddToCart,
}) {
  const isEmpty = bookFav.length === 0;

  return (
    <main>
      <h2 className="page-title">Mis favoritos</h2>

      {isEmpty ? (
        <div className="empty-state">
          <p className="empty-state-title">Aún no tienes favoritos</p>
          <p className="empty-state-text">
            Guarda los libros que te interesen y aparecerán aquí.
          </p>
          <Link to="/books" className="empty-state-cta">
            Explorar el catálogo
          </Link>
        </div>
      ) : (
        <div className="page-grid">
          {bookFav.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFav={true}
              isOnPur={cartItems.some((item) => item.book.id === book.id)}
              onToggleFav={onToggleFav}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </main>
  );
}
