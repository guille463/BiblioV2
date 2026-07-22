import { useState, useEffect } from "react";
import { BookServices } from "../services/BookServices";

export function useBookDetail(id) {
  const [book, setBook] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(true);
  const [errorDetail, setErrorDetail] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const controller = new AbortController();

    const fetchBook = async () => {
      setLoadingDetail(true);
      try {
        const { data } = await BookServices.getById(id, {
          signal: controller.signal,
        });
        setBook(data);
      } catch (err) {
        if (err.name === "CanceledError") return;
        setErrorDetail(err.message);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchBook();
    return () => controller.abort();
  }, [id]);

  return { book, loadingDetail, errorDetail };
}
