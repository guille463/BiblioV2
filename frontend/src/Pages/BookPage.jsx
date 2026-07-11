import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../components/BookCard";
import { SearchBar } from "../components/SearchBar";

export function BooksPage() {
  const { books, searchResults, loading, error, searchBooks } = useBooks();
  const [search, setSearch] = useState("");

  const handleSearch = (query) => {
    setSearch(query);
    searchBooks(query);
  };

  const displayBooks = search ? searchResults : books;

  return (
    <main className="books-page">
      <h2 className="books-page-title">Libros</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Cargando libros...</p>}

      {error && <p className="books-error">{error}</p>}

      <div className="books-grid">
        {displayBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            genre={book.genre}
            year={book.year}
            stock={book.stock}
          />
        ))}
      </div>
    </main>
  );
}
