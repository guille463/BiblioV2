import { useState } from "react";
import { Link } from "react-router-dom";
import { PurchaseCard } from "./PurchaseCard";
import "./Header.css";

export function Header({ cartItems = [], onRemoveFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
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

        <div className="cart-wrapper">
          <button className="cart-button" onClick={handleToggleCart}>
            Carrito ({cartCount})
          </button>

          {isCartOpen && (
            <div className="cart-dropdown">
              {isCartEmpty ? (
                <p className="cart-empty">Tu carrito está vacío</p>
              ) : (
                cartItems.map((item) => (
                  <PurchaseCard
                    key={item.book.id}
                    item={item}
                    onRemove={onRemoveFromCart}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
