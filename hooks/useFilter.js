import { useState } from "react";

export function useFilter() {
  // const [filteredData, setQuery] = useFilter(data, ()=>'')
  const [query, setQuery] = useState("");

  return [query, setQuery];
}
