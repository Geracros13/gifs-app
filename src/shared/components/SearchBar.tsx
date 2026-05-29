import { useEffect, useState } from "react";
interface SearchBarProps {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder || "Search all..."}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
