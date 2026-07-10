import { useState } from "react";

export function BookCard({ id, title, author, isbn, genre, year, stock }) {
  const [isAviable, setAviable] = useState(true);
  const [isLiked, setLiked] = useState(false);
  const textAviable = isAviable ? "Disponible" : "No Disponible";
  const textLiked = isLiked ? "Me gusta" : "Añadir a mi Lista";
  const classNameLikedButton = isLiked ? "likedBook" : "notLikedBook";

  const handleClick = () => {
    setLiked(isLiked);
  };

  return (
    <article className="book-card">
      <header className="book-card-header">
        <img
          className="book-crad-img"
          src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
        ></img>
        <div>
          <span className="book-card-spanId">{id}</span>
          <strong className="book-card-strong">{title}</strong>
          <span className="book-card-author">{author}</span>
          <span className="book-card-isbn">{isbn}</span>
          <span className="book-card-genre">{genre}</span>
          <span className="book-card-year">{year}</span>
          <span className="book-card-stock">{stock}</span>
          <span className="book-card-stock-info">{textAviable}</span>
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
