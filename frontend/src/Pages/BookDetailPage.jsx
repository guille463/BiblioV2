export function BookDetailPage({
  bookFav,
  cartItem = [],
  onToggleFav,
  onAddToCart,
}) {
  //   const { books, loading, error } = useBooks();
  //   return (
  //     <main className="books-page">
  //       <h2 className="books-page-title">Libros</h2>
  //       {loading && <p>Cargando libros...</p>}
  //       {error && <p className="books-error">{error}</p>}
  //       <div className="books-grid">
  //         <BookCardDetail
  //           key={book.id}
  //           book={book}
  //           isFav={bookFav.some((b) => b.isbn === book.isbn)}
  //           isOnPur={cartItem.some((item) => item.book.id === book.id)}
  //           onToggleFav={onToggleFav}
  //           onAddToCart={onAddToCart}
  //           cartQuantity={cartItem ? cartItem.quantity : 0}
  //         />
  //       </div>
  //     </main>
  //   );
}
