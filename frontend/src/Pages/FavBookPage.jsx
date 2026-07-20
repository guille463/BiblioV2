import { BookCard } from "../components/BookCard";
import "../components/BookCard.css";

export function FavBookPage({
  favBooks,
  cartItems = [],
  onToggleFav,
  onAddToCart,
}) {
  return (
    <main className="fav-books-page">
      <h2 className="fav-books-title">Mis favoritos</h2>

      {favBooks.length === 0 && (
        <p className="fav-books-empty">No tienes favoritos</p>
      )}
      <div className="books-grid">
        {favBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFav={true}
            cartQuantity={
              cartItems.find((item) => item.book.id === book.id)?.quantity ?? 0
            }
            onToggleFav={onToggleFav}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
}
