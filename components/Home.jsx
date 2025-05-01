import { useState } from "react";

import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <Searchbar query={query} setQuery={setQuery} />
        <SelectMenu filter={filter} setFilter={setFilter} />
      </div>
      <CountryList query={query} filter={filter} />
    </main>
  );
}
