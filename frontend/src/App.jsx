import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { BooksPage } from "./pages/BookPage";
import { FavBookPage } from "./pages/FavBookPage";

function App() {
  const [bookFav, setBookFav] = useState([]);
  const handleToggleFav = (book) => {
    setBookFav((prevList) =>
      prevList.some((b) => b.isbn === book.isbn)
        ? prevList.filter((b) => b.isbn !== book.isbn)
        : [...prevList, book],
    );
  };

  console.log(bookFav);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <BooksPage bookFav={bookFav} onToggleFav={handleToggleFav} />
          }
        />
        <Route
          path="/books"
          element={
            <BooksPage bookFav={bookFav} onToggleFav={handleToggleFav} />
          }
        />
        <Route
          path="/books/favs"
          element={
            <FavBookPage bookFav={bookFav} onToggleFav={handleToggleFav} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
