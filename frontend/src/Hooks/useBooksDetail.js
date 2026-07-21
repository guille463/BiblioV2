import { useState, useEffect } from "react";
import { BookServices } from "../services/BookServices";

export function DetailBook(id) {
  const [book, setBook] = useState(null);
  const { loading, setLoading } = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const controller = new AbortController();
    setLoading(true);

    const fetchBook = async () => {
      try {
        const { data } = await BookServices.getById(id, {
          signal: controller.signal,
        });
        setBook(data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          setError(error.response?.data?.message ?? "Error loading book");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
    return () => controller.abort;
  }, [id]);

  return [book, loading, error];
}
