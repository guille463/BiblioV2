import { useParams } from "react-router-dom";
import { useBookDetail } from "../hooks/useBooksDetail";
import { useBooksState, useBooksDispatch } from "../context/books-context";
import { BookCardDetail } from "../components/BookCardDetail";

export function BookDetailPage() {
  const { id } = useParams();
  const { book, loadingDetail, errorDetail } = useBookDetail(id);
  const { favIsbns, cart } = useBooksState();
  const dispatch = useBooksDispatch();

  if (loadingDetail) {
    return <p>Cargando Libro...</p>;
  }

  if (errorDetail) {
    return <p>{errorDetail}</p>;
  }

  if (!book) {
    return null;
  }

  const isFav = favIsbns.includes(book.isbn);
  const isOnPur = cart.some((item) => item.book.id === book.id);

  return (
    <BookCardDetail
      book={book}
      isFav={isFav}
      isOnPur={isOnPur}
      onToggleFav={() => dispatch({ type: "TOGGLE_FAV", isbn: book.isbn })}
      onAddToCart={() => dispatch({ type: "ADD_TO_CART", book })}
    />
  );
}
