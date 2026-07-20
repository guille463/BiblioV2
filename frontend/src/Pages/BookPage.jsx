import { useState, useRef } from "react";
import { BookCard } from "../components/BookCard";
import { leftPage, rightPage } from "../utils/Emojis";
import "./BookPage.css";

export function BooksPage({
  books,
  searchResults,
  loading,
  error,
  searchBooks,
  favIsbns,
  cartItems = [],
  onToggleFav,
  onAddToCart,
}) {
  const inputRef = useRef();

  /**
   * @param search se trata de la informacion que va a ir en la barra de busqueda como texto
   */
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const BOOKS_PER_PAGE = 10;
  const displayBooks = search ? searchResults : books;
  const totalPages = Math.ceil(displayBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;

  const visibleBooks = displayBooks.slice(
    startIndex,
    startIndex + BOOKS_PER_PAGE,
  );

  const handleSearch = () => {
    const query = inputRef.current.value;
    setSearch(query);
    setCurrentPage(1);
    searchBooks(query);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main className="books-page">
      <h2 className="books-page-title">Libros</h2>

      <div className="books-search">
        <input ref={inputRef} type="search" />
        <button className="search-button" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando libros...</p>}

      {error && <p className="books-error">{error}</p>}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            {leftPage}
          </button>
          <span className="pagination-info">
            Pagina {currentPage} de {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {rightPage}
          </button>
        </div>
      )}

      <div className="books-grid">
        {visibleBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFav={favIsbns.includes(book.isbn)}
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
