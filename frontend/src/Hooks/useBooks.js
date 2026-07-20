import { useState, useEffect } from "react";
import { BookServices } from "../services/BookServices";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBooks = async () => {
      try {
        const { data } = await BookServices.getAll(controller.signal);
        setBooks(data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.response?.data?.message ?? "Error searching books");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();

    return () => controller.abort();
  }, []);

  const searchBooks = async (query) => {
    setError(null); // limpia errores de intentos anteriores

    if (!query) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const { data } = await BookServices.getBookByName(query);
      setSearchResults(data);
    } catch (err) {
      setError(err.response?.data?.message ?? "Error in search");
    } finally {
      setLoading(false);
    }
  };

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
    searchBooks,
    applyUpdatedBooks,
  };
}
