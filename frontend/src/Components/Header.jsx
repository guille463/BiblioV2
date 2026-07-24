import { useState, useRef, useCallback } from "react";
import { useBooksState } from "../context/books-context";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import { PurchaseCard } from "./PurchaseCard";
import "./Header.css";

/**
 * Cabecera con navegación y carrito desplegable.
 *
 * @param {Object} props
 * @param {string|null} props.checkoutError - Mensaje de error
 * @param {() => void} props.onPurchase
 */
export function Header({ checkoutError, onPurchase }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const { cart } = useBooksState();

  /** Total de unidades */
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + Number(item.book.price) * item.quantity,
    0,
  );

  const isCartEmpty = cartCount === 0;

  const handleToggleCart = () => setIsCartOpen((prev) => !prev);

  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);

  useClickOutside(cartRef, handleCloseCart, isCartOpen);

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
          <button
            className="cart-button"
            onClick={handleToggleCart}
            aria-expanded={isCartOpen}
          >
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

                  <div className="cart-total">
                    <span>Total</span>
                    <span>{cartTotal.toFixed(2)} €</span>
                  </div>

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
