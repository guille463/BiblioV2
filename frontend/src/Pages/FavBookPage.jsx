import { BookCard } from "../components/BookCard";
export function FavBookPage({ bookFav, onToggleFav }) {
  return (
    <main className="fav-books">
      <h2 className="fav-books-title">Tus Favoritos</h2>
      {bookFav.length === 0 ? (
        <p>No tienes libros en la lista</p>
      ) : (
        <div className="fav-book-list">
          {bookFav.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isFav={true}
              onToggleFav={onToggleFav}
            />
          ))}
        </div>
      )}
    </main>
  );
}
