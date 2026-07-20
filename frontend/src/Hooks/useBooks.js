import { useState, useEffect } from "react";
import { BookServices } from "../services/BookServices";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [purchasedBooks, setPurchasedBooks] = useState([]);
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
    setError(null);

    if (!query) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    try {
      const { data } = await BookServices.getBookbyInfo(query);
      setSearchResults(data);
    } catch (err) {
      setError(err.response?.data?.message ?? "Error in search");
    } finally {
      setLoading(false);
    }
  };

  const purchaseBooks = async (id, quantity = 1) => {
    setError(null);
    try {
      const { data } = await BookServices.purchaseBook(id, quantity);
      setBooks((prev) =>
        prev.map((book) => (book.id === data.id ? data : book)),
      );
      setPurchasedBooks((prev) => [...prev, data]);
    } catch (err) {
      setError(err.response?.data?.error ?? "Error in purchase");
    }
  };

  return {
    books,
    searchResults,
    purchasedBooks,
    loading,
    error,
    searchBooks,
    purchaseBooks,
  };
}
