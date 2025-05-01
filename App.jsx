import Header from "./components/Header";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./app.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
