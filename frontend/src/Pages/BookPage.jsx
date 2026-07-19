import { useState, useRef } from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../components/BookCard";
import "./BookPage.css";

export function BooksPage({
  bookFav,
  booksInPurchase,
  onToggleFav,
  onTogglePurchase,
}) {
  const { books, searchResults, loading, error, searchBooks } = useBooks();

  /**
   * @param search se trata de la informacion que va a ir en la barra de busqueda como texto
   */
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  /**
   * Funcion para buscar libro en la barra de busqueda
   * @param query es el valor del input del usuario, pasara a ser la informacion que se va a buscar por el usuario (@param search)
   * @param inputRef va a ser la referencia del input para poder manejarlo y extraer el valor
   * @function searchBooks esta funcion dentro de nuestros hooks recibira como parametro la informacion que el usuario quiera buscar
   */
  const handleSearch = () => {
    const query = inputRef.current.value;
    setSearch(query);
    searchBooks(query);
  };

  const displayBooks = search ? searchResults : books;

  const [currentPage, setCurrentPage] = useState(1);
  const BOOKS_PER_PAGE = 10;

  const totalPages = Math.ceil(displayBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const visibleBooks = displayBooks.slice(
    startIndex,
    startIndex + BOOKS_PER_PAGE,
  );

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
            Anterior
          </button>
          <span className="pagination-info">
            Pagina {currentPage} de {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}

      <div className="books-grid">
        {visibleBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFav={bookFav.some((b) => b.isbn === book.isbn)}
            isOnPur={booksInPurchase.some((b) => b.id === book.id)}
            onToggleFav={onToggleFav}
            onTogglePurchase={onTogglePurchase}
          />
        ))}
      </div>
    </main>
  );
}
