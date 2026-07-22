import { useState, useRef } from "react";
import { useBooksState } from "../context/books-context";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import { PurchaseCard } from "./PurchaseCard";
import "./Header.css";

export function Header({ checkoutError, onPurchase }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const { cart } = useBooksState();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useClickOutside(cartRef, () => setIsCartOpen(false), isCartOpen);

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

        <div className="cart-wrapper" ref={cartRef}>
          <button className="cart-button" onClick={handleToggleCart}>
            Carrito ({cartCount})
          </button>

          {isCartOpen && (
            <div className="cart-dropdown">
              {isCartEmpty ? (
                <p className="cart-empty">Tu carrito está vacío</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <PurchaseCard key={item.book.id} item={item} />
                  ))}
                  <button className="cart-buy-button" onClick={onPurchase}>
                    Comprar
                  </button>
                </>
              )}

              {checkoutError && <p className="cart-error">{checkoutError}</p>}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
