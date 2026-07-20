import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useBooks } from "./hooks/useBooks";
import { BookServices } from "./services/BookServices";
import { Header } from "./components/Header";
import { BooksPage } from "./pages/BookPage";
import { BookDetailPage } from "./pages/BookDetailPage";
import { FavBookPage } from "./pages/FavBookPage";
import { IndexPage } from "./pages/IndexPage";

function App() {
  const [favIsbns, setFavIsbns] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [checkoutError, setCheckoutError] = useState(null);

  const {
    books,
    searchResults,
    loading,
    error,
    searchBooks,
    applyUpdatedBooks,
  } = useBooks();

  const favBooks = books.filter((book) => favIsbns.includes(book.isbn));

  const handleToggleFav = (book) => {
    setFavIsbns((prev) =>
      prev.includes(book.isbn)
        ? prev.filter((isbn) => isbn !== book.isbn)
        : [...prev, book.isbn],
    );
  };

  const handleAddToCart = (book) => {
    setCartItem((prev) => {
      // Sin stock no entra ni la primera unidad
      if (book.stock <= 0) return prev;

      const existing = prev.find((item) => item.book.id === book.id);
      if (!existing) {
        return [...prev, { book, quantity: 1 }];
      }

      return prev.map((item) =>
        item.book.id === book.id && item.quantity < book.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };

  const handleRemoveFromCart = (book) => {
    setCartItem((prev) => prev.filter((item) => item.book.id !== book.id));
  };

  const handleRemoveOneFromCart = (book) => {
    setCartItem((prev) =>
      prev
        .map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handlePurchaseBooks = async () => {
    if (cartItem.length === 0) return;
    setCheckoutError(null);

    const items = cartItem.map((item) => ({
      bookId: item.book.id,
      quantity: item.quantity,
    }));

    try {
      const { data } = await BookServices.createOrder(items);
      applyUpdatedBooks(data.books);
      setCartItem([]);
    } catch (err) {
      setCheckoutError(
        err.response?.data?.error ?? "Error al realizar el pedido",
      );
    }
  };

  return (
    <>
      <Header
        cartItems={cartItem}
        checkoutError={checkoutError}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onRemoveOneFromCart={handleRemoveOneFromCart}
        onPurchase={handlePurchaseBooks}
      />
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
                searchBooks={searchBooks}
                favIsbns={favIsbns}
                cartItems={cartItem}
                onToggleFav={handleToggleFav}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/books/favs"
            element={
              <FavBookPage
                favBooks={favBooks}
                cartItems={cartItem}
                onToggleFav={handleToggleFav}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/books/:id"
            element={
              <BookDetailPage
                favIsbns={favIsbns}
                cartItems={cartItem}
                onToggleFav={handleToggleFav}
                onAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
