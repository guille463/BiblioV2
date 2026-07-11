import { useState } from "react";
import "./BookCard.css";

export function BookCard({ title, author, isbn, genre, year, stock }) {
  const isAvailable = stock > 0;
  const [isLiked, setLiked] = useState(false);
  const textAvailable = isAvailable ? "Disponible" : "No Disponible";
  const textLiked = isLiked ? "Me gusta" : "Añadir a mi Lista";
  const classNameLikedButton = isLiked ? "likedBook" : "notLikedBook";

  const handleClick = () => {
    setLiked(!isLiked);
  };

  return (
    <article className="book-card">
      <header className="book-card-header">
        <img
          className="book-card-img"
          src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
          alt={title}
        />
        <div className="book-card-info">
          <h3 className="book-card-title">Titulo: {title}</h3>
          <p className="book-card-author">Autor: {author}</p>
          <p className="book-card-isbn">ISBN: {isbn}</p>
          <p className="book-card-genre">Genero: {genre}</p>
          <p className="book-card-year">Año: {year}</p>
          <p className="book-card-stock">Stock: {stock}</p>
          <p className="book-card-stock-info">Estado: {textAvailable}</p>
        </div>
      </header>
      <aside>
        <button className={classNameLikedButton} onClick={handleClick}>
          {textLiked}
        </button>
      </aside>
    </article>
  );
}
