import { useState } from "react";
import "./BookCover.css";

/**
 * Portada de libro desde Open Library con fallback si no existe cover.
 *
 * El tamaño lo aporta la clase externa (className); este componente solo
 * gestiona la carga de la imagen y el estado de error.
 *
 * @param {Object} props
 * @param {string} props.isbn - ISBN para construir la URL de la portada
 * @param {string} props.title - Texto alternativo
 * @param {"S"|"M"|"L"} [props.size="M"] - Tamaño que sirve Open Library
 * @param {string} props.className - Clase de tamaño (book-card-img, etc.)
 */
export function BookCover({ isbn, title, size = "M", className }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} book-cover-fallback`}>
        <span>Portada no disponible</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={`https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg?default=false`}
      alt={title}
      onError={() => setError(true)}
    />
  );
}
