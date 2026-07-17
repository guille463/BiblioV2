import { FavEmoji } from "../utils/Emojis";

export function PurchaseCard({ book, isFav }) {
  return (
    <article className="purchase-card">
      <header className="purchase-card-header">
        <img
          className="purchase-card-img"
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
          alt={book.title}
        />
        <div className="purchase-card-info">
          <h3 className="purchase-card-title">Titulo: {book.title}</h3>
          <p className="purchase-card-isbn">ISBN: {book.isbn}</p>
          {isFav && <p className="purchase-card-fav">{FavEmoji}</p>}
        </div>
      </header>
    </article>
  );
}
