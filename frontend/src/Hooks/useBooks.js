import { useState, useEffect } from "react";
import { booksServices } from "../Services/booksServices";

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await booksServices.getAll();
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
      const { data } = await booksServices.getBookByName(query);
      setSearchResults(data);
    } catch (err) {
      setError(err.response?.data?.message ?? "Error in search");
    }
  };

  return { books, searchResults, loading, error, searchBooks };
}
