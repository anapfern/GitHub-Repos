import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchUsersInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (debouncedQuery) {
      setSearchParams({ search: debouncedQuery });
    } else {
      setSearchParams({});
    }
  }, [debouncedQuery, setSearchParams]);

  return (
    <div className="border-default w-[41.75rem] h-[2.5rem] mt-4 mb-4 ml-5 flex gap-2 items-center text-placeholder">
      <input
        className="flex-grow ml-2 focus:outline-none"
        placeholder="Buscar usuário"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaSearch className="mr-2" />
    </div>
  );
}
