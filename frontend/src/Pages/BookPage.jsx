import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../Components/BookCard";

export function BookPage() {
  const { books, loading, error } = useBooks();

  return (
    <main className="books-page">
      {loading && <p>Cargando libros...</p>}
      {error && <p>{error}</p>}

      <section className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            genre={book.genre}
            year={book.year}
            stock={book.stock}
          />
        ))}
      </section>
    </main>
  );
}
