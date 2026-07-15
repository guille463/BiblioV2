import { useState, useRef, useEffect } from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../components/BookCard";

// Padre
export function BooksPage() {
  const { books, searchResults, loading, error, searchBooks } = useBooks();
  /**
   * @param bookFav es el array donde se almacenan los libros favoritos
   * Iniciamos con el array vacio
   */
  const [bookFav, setBookFav] = useState([]);
  /**
   * @param search se trata de la informacion queva a a ir en la barra de busqueda como texto
   *
   */
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  /**
   * Funcion para buscar libro en la barra de busqueda
   * @param query es el valor del input del usuario, pasara a ser la informacion que se va a buscar por el usuario (@param search)
   * @param inputRef va a ser a referencia del input para poder manejarlo y extraer el valor
   * @function searchBooks esta funcion dentro de nuestros hooks recibira com o parametro la informacion que el usuario quiera buscar
   *
   */
  const handleSearch = () => {
    const query = inputRef.current.value;
    console.log(query);

    setSearch(query);
    searchBooks(query);
  };

  /**
   *
   * @param book  sera el libro que quereamos añadir a favoritos
   * El libro se añadira al array de libros favoritos
   */
  const handleToggleFav = (book) => {
    setBookFav((prevList) =>
      prevList.some((b) => b.isbn === book.isbn)
        ? prevList.filter((b) => b.isbn !== book.isbn)
        : [...prevList, book],
    );
  };

  useEffect(() => {
    console.log(bookFav);
  }, [bookFav]);

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
            onToggleFav={handleToggleFav}
          />
        ))}
      </div>
    </main>
  );
}
