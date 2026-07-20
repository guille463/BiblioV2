import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { BooksPage } from "./pages/BookPage";
import { BookDetailPage } from "./pages/BookDetailPage";
import { FavBookPage } from "./pages/FavBookPage";
import { IndexPage } from "./pages/IndexPage";

function App() {
  const [bookFav, setBookFav] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const handleToggleFav = (book) => {
    setBookFav((prevList) =>
      prevList.some((b) => b.isbn === book.isbn)
        ? prevList.filter((b) => b.isbn !== book.isbn)
        : [...prevList, book],
    );
  };

  const handleAddToCart = (book) => {
    setCartItem((prev) => {
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

  return (
    <>
      <Header
        cartItems={cartItem}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onRemoveOneFromCart={handleRemoveOneFromCart}
      />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/books"
            element={
              <BooksPage
                bookFav={bookFav}
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
                bookFav={bookFav}
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
                bookFav={bookFav}
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
