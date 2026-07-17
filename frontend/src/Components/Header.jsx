import { Link } from "react-router-dom";
import "./Header.css";
export function Header() {
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
        <button className="purchageList-button-header">Carrito</button>
      </nav>
    </header>
  );
}
