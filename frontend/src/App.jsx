import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { BooksPage } from "./Pages/BookPage";
import { FavBookPage } from "./Pages/FavBookPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/favs" element={<FavBookPage />} />
      </Routes>
    </>
  );
}

export default App;
