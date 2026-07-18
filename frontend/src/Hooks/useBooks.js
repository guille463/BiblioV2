import { useState, useEffect } from "react";
import { BookServices } from "../services/BookServices";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await BookServices.getAll();
        setBooks(data);
      } catch (err) {
        setError(err.response?.data?.message ?? "Error searching books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const searchBooks = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const { data } = await BookServices.getBookByName(query);
      setSearchResults(data);
    } catch (err) {
      setError(err.response?.data?.message ?? "Error in search");
    }
  };

  const purchaseBooks = async (id) => {
    try {
      const { data } = await BookServices.purchaseBook(id);
      setBooks((prev) =>
        prev.map((book) => (book.id === data.id ? data : book)),
      );
      setPurchasedBooks((prev) => [...prev, data]);
    } catch (err) {
      setError(err.response?.data?.error ?? "Error in purchase");
    }
  };

  useEffect(() => {
    console.log("comprados:", purchasedBooks);
  }, [purchasedBooks]);

  return {
    books,
    searchResults,
    loading,
    error,
    searchBooks,
    purchaseBooks,
  };
}
