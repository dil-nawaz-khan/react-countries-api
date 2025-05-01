import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";

import "./app.css";
import CountryList from "./components/CountryList";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar query={query} setQuery={setQuery} />
          <SelectMenu filter={filter} setFilter={setFilter} />
        </div>
        <CountryList query={query} filter={filter} />
      </main>
    </>
  );
}
