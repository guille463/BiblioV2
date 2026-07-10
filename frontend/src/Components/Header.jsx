import "./Header.css";
export function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Biblioteca Online</h1>
      <nav className="header-nav">
        <a href="/" className="header-link">
          Inicio
        </a>
        <a href="/books" className="header-link">
          Libros
        </a>
      </nav>
    </header>
  );
}
