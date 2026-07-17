import { useState, useRef } from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../components/BookCard";

export function BooksPage({ bookFav, onToggleFav }) {
  const { books, searchResults, loading, error, searchBooks, purchaseBooks } =
    useBooks();

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

  return (
    <main className="books-page">
      <h2 className="books-page-title">Libros</h2>

      <div>
        <input ref={inputRef} type="search"></input>
        <button className="button-Search" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando libros...</p>}

      {error && <p className="books-error">{error}</p>}

      <div className="books-grid">
        {displayBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFav={bookFav.some((b) => b.isbn === book.isbn)}
            onToggleFav={onToggleFav}
            onPurchase={purchaseBooks}
          />
        ))}
      </div>
    </main>
  );
}
