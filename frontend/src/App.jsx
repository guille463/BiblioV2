import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { BooksPage } from "./pages/BookPage";
import { FavBookPage } from "./pages/FavBookPage";

function App() {
  const [bookFav, setBookFav] = useState([]);
  const [bookInPurchase, setBooksInPurchased] = useState([]);

  const handleToggleFav = (book) => {
    setBookFav((prevList) =>
      prevList.some((b) => b.isbn === book.isbn)
        ? prevList.filter((b) => b.isbn !== book.isbn)
        : [...prevList, book],
    );
  };

  const handleTogglePurchased = (book) => {
    setBooksInPurchased((prevList) =>
      prevList.some((b) => b.id === book.id)
        ? prevList.filter((b) => b.id !== book.id)
        : [...prevList, book],
    );
  };

  console.log("Favoritos", bookFav);
  console.log("Carrito", bookInPurchase);

  return (
    <>
      <Header
        bookFav={bookFav}
        booksInPurchase={bookInPurchase}
        onTogglePurchase={handleTogglePurchased}
      />
      <div className="page-container">
        <Routes>
          <Route
            path="/"
            element={
              <BooksPage
                bookFav={bookFav}
                booksInPurchase={bookInPurchase}
                onToggleFav={handleToggleFav}
                onTogglePurchase={handleTogglePurchased}
              />
            }
          />
          <Route
            path="/books"
            element={
              <BooksPage
                bookFav={bookFav}
                booksInPurchase={bookInPurchase}
                onToggleFav={handleToggleFav}
                onTogglePurchase={handleTogglePurchased}
              />
            }
          />
          <Route
            path="/books/favs"
            element={
              <FavBookPage
                bookFav={bookFav}
                booksInPurchase={bookInPurchase}
                onToggleFav={handleToggleFav}
                onTogglePurchase={handleTogglePurchased}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
