import { useState } from "react";

import { useTheme } from "../hooks/useTheme";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const { isDark } = useTheme();

  return (
    <main className={isDark ? "dark" : ""}>
      <div className="search-filter-container">
        <Searchbar query={query} setQuery={setQuery} />
        <SelectMenu filter={filter} setFilter={setFilter} />
      </div>

      <CountryList query={query} filter={filter} />
    </main>
  );
}
