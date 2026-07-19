import "./PurchaseCard.css";

export function PurchaseCard({ item, onRemove }) {
  const { book, quantity } = item;

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
      <span className="purchase-card-quantity">x{quantity}</span>
      <span className="purchase-card-price">
        {(Number(book.price) * quantity).toFixed(2)} €
      </span>
      <button className="purchase-card-remove" onClick={() => onRemove(book)}>
        Quitar
      </button>
    </article>
  );
}
