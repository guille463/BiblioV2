import "./PurchaseCard.css";

export function PurchaseCard({ item, onRemove, onRemoveOne, onAddToCart }) {
  const { book, quantity } = item;
  const maxReached = quantity >= book.stock;

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
      <button
        className="purchase-button-addOne"
        disabled={maxReached}
        onClick={() => onAddToCart(book)}
        aria-label={`Añadir una unidad de ${book.title}`}
      >
        +
      </button>
      <button
        className="purchase-button-removeOne"
        onClick={() => onRemoveOne(book)}
        aria-label={`Quitar una unidad de ${book.title}`}
      >
        -
      </button>
      <span className="purchase-card-price">
        {(Number(book.price) * quantity).toFixed(2)} €
      </span>
      <button className="purchase-card-remove" onClick={() => onRemove(book)}>
        Quitar
      </button>
    </article>
  );
}
