import { useState, useEffect, useRef } from "react";
import { BookServices } from "../services/BookServices";

/**
 * Carga el catálogo y gestiona la búsqueda por texto.
 *
 * Mantiene dos flujos independientes: la carga inicial (una sola vez, al
 * montar) y la búsqueda bajo demanda, con estados de carga y error separados
 * para que un fallo de búsqueda no oculte el catálogo ya cargado.
 *
 * @returns {{
 *   books: Book[],
 *   searchResults: Book[],
 *   loading: boolean,
 *   error: string|null,
 *   searchLoading: boolean,
 *   searchError: string|null,
 *   searchBooks: (query: string) => Promise<void>,
 *   applyUpdatedBooks: (updatedBooks: Book[]) => void
 * }}
 */

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchControllerRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const { data } = await BookServices.getAll({
          signal: controller.signal,
        });
        setBooks(data);
      } catch (err) {
        if (err.name === "CanceledError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => searchControllerRef.current?.abort();
  }, []);

  /**
   * Lanza una búsqueda cancelando la anterior si sigue en vuelo.
   *
   * El AbortController se guarda en una ref, no en estado: cambiarlo no debe
   * provocar render. Al terminar, solo se apaga searchLoading si el controller
   * sigue siendo el actual; si otra búsqueda ya lo reemplazó, apagarlo dejaría
   * la UI sin indicador mientras la nueva petición sigue viva.
   *
   * @param {string} query - Cadena vacía limpia los resultados sin pedir nada.
   * @returns {Promise<void>}
   */
  const searchBooks = async (query) => {
    //Cancela la busqueda anterior si sigue
    searchControllerRef.current?.abort();

    setSearchError(null);

    if (!query) {
      setSearchResults([]);
      return;
    }
    //Controller nuevo para esta busqueda
    const controller = new AbortController();
    searchControllerRef.current = controller;

    setSearchLoading(true);
    try {
      const { data } = await BookServices.getBookbyInfo(query, {
        signal: controller.signal,
      });
      setSearchResults(data);
    } catch (err) {
      if (err.name === "CanceledError") return;
      setError(err.message);
    } finally {
      if (searchControllerRef.current === controller) {
        setSearchLoading(false);
      }
    }
  };

  /**
   * Reemplaza en el catálogo los libros cuyo id aparezca en updatedBooks.
   * Se usa tras una compra para reflejar el stock nuevo sin recargar todo.
   *
   * @param {Book[]} updatedBooks - Libros devueltos por el backend.
   * @returns {void}
   */
  const applyUpdatedBooks = (updatedBooks) => {
    setBooks((prev) =>
      prev.map((book) => updatedBooks.find((u) => u.id === book.id) ?? book),
    );
  };

  return {
    books,
    searchResults,
    loading,
    error,
    searchLoading,
    searchError,
    searchBooks,
    applyUpdatedBooks,
  };
}
