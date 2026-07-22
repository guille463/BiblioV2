import { useState, useEffect, useRef } from "react";
import { BookServices } from "../services/BookServices";

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

  useEffect(() => {
    return () => searchControllerRef.current?.abort();
  }, []);

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
      if (err.name === "CanceledError") {
        return;
      }
      console.error(err);
      setSearchError(err.response?.data?.message ?? "Error in search");
    } finally {
      if (searchControllerRef.current === controller) {
        setSearchLoading(false);
      }
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
    searchLoading,
    searchError,
    searchBooks,
    applyUpdatedBooks,
  };
}
