import "./PurchaseCard.css";

export function PurchaseCard({ book, onRemove }) {
  return (
    <article className="purchase-card">
      <img
        className="purchase-card-img"
        src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg`}
        alt={book.title}
      />
      <div className="purchase-card-info">
        <p className="purchase-card-title">{book.title}</p>
        <p className="purchase-card-isbn">{book.isbn}</p>
      </div>
      <button className="purchase-card-remove" onClick={() => onRemove(book)}>
        Quitar
      </button>
    </article>
  );
}
