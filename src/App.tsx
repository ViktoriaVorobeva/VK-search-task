import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { User } from "./types";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isNotFound, setNotFound] = useState(false);

  return (
    <SearchContext.Provider value={{ isLoading, isError, users, isNotFound }}>
      <SearchForm
        setUsers={setUsers}
        setLoading={setLoading}
        setError={setError}
        setNotFound={setNotFound}
      />
      <SearchResults />
    </SearchContext.Provider>
  );
}
