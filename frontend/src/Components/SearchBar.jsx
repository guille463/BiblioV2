import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (busqueda) => {
    setQuery(busqueda.target.value);
    onSearch(busqueda.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Buscar libro..."
      value={query}
      onChange={handleChange}
    />
  );
}
