import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useBooks } from "./hooks/useBooks";
import { useBooksState, useBooksDispatch } from "./context/books-context";
import { BookServices } from "./services/BookServices";
import { Header } from "./components/Header";
import { BooksPage } from "./pages/BookPage";
import { BookDetailPage } from "./pages/BookDetailPage";
import { FavBookPage } from "./pages/FavBookPage";
import { IndexPage } from "./pages/IndexPage";

/**
 * Raíz de la aplicación: define las rutas y posee el catálogo.
 *
 */
function App() {
  const [checkoutError, setCheckoutError] = useState(null);
  const { cart, favIsbns } = useBooksState();
  const dispatch = useBooksDispatch();

  const {
    books,
    searchResults,
    searchLoading,
    searchError,
    loading,
    error,
    searchBooks,
    applyUpdatedBooks,
  } = useBooks();

  const favBooks = books.filter((book) => favIsbns.includes(book.isbn));

  /**
   * Envía el carrito como pedido único. El backend descuenta el stock.
   *
   * @returns {Promise<void>}
   */
  const handlePurchaseBooks = async () => {
    if (cart.length === 0) return;
    setCheckoutError(null);
    const items = cart.map((item) => ({
      bookId: item.book.id,
      quantity: item.quantity,
    }));
    try {
      const { data } = await BookServices.createOrder(items);
      applyUpdatedBooks(data.books);
      dispatch({ type: "CLEAR_CART" });
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  return (
    <>
      <Header checkoutError={checkoutError} onPurchase={handlePurchaseBooks} />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/books"
            element={
              <BooksPage
                books={books}
                searchResults={searchResults}
                loading={loading}
                error={error}
                searchLoading={searchLoading}
                searchError={searchError}
                searchBooks={searchBooks}
              />
            }
          />
          <Route
            path="/books/favs"
            element={<FavBookPage favBooks={favBooks} />}
          />
          <Route path="/books/:id" element={<BookDetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
