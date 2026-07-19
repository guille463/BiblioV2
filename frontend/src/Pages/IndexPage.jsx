import { Link } from "react-router-dom";
import "./IndexPage.css";

export function IndexPage() {
  return (
    <main className="home">
      <section className="home-hero">
        <h2 className="home-hero-title">Tu biblioteca, a un click</h2>
        <p className="home-hero-text">
          Consulta el catálogo, guarda tus favoritos y retira ejemplares con
          stock actualizado en tiempo real.
        </p>
        <Link to="/books" className="home-hero-cta">
          Ver nuestro catalogo
        </Link>
      </section>

      <section className="home-info">
        <article className="home-info-item">
          <h3>Catálogo</h3>
          <p>
            Busca por título y comprueba la disponibilidad de cada ejemplar.
          </p>
        </article>
        <article className="home-info-item">
          <h3>Mi lista</h3>
          <p>Guarda los libros que te interesan para encontrarlos después.</p>
        </article>
        <article className="home-info-item">
          <h3>Compra</h3>
          <p>Añade al carrito y retira; el stock se descuenta al momento.</p>
        </article>
      </section>
    </main>
  );
}
