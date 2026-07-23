import { useParams } from "react-router-dom";
import { useBookDetail } from "../hooks/useBooksDetail";
import { BookCardDetail } from "../components/BookCardDetail";

/**
 * Página de detalle: extrae el id de la ruta y delega la presentación.
 */
export function BookDetailPage() {
  const { id } = useParams();
  const { book, loadingDetail, errorDetail } = useBookDetail(id);

  if (loadingDetail) return <p>Cargando Libro...</p>;
  if (errorDetail) return <p>{errorDetail}</p>;
  if (!book) return null;

  return <BookCardDetail book={book} />;
}
