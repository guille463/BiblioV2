import { useState } from "react";
import { Link } from "react-router-dom";
import { PurchaseCard } from "./PurchaseCard";
import "./Header.css";

export function Header({ bookFav = [], booksInPurchase = [] }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const cartCount = booksInPurchase.length;
  const isCartEmpty = cartCount === 0;

  return (
    <header className="header">
      <h1 className="header-title">Biblioteca Online</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">
          Inicio
        </Link>
        <Link to="/books" className="header-link">
          Libros
        </Link>
        <Link to="/books/favs" className="header-link">
          Favoritos
        </Link>
        <button
          className="purchageList-button-header"
          onClick={handleToggleCart}
        >
          Carrito ({cartCount})
        </button>
      </nav>

      {isCartOpen && (
        <div className="header-cart">
          {isCartEmpty ? (
            <p>Carrito vacío</p>
          ) : (
            booksInPurchase.map((book) => (
              <PurchaseCard
                key={book.id}
                book={book}
                isFav={bookFav.some((b) => b.isbn === book.isbn)}
              />
            ))
          )}
        </div>
      )}
    </header>
  );
}
