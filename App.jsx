import Header from "./components/Header";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./app.css";

export default function App() {
  const storedPreference = JSON.parse(localStorage.getItem("isDarkMode"));
  const [isDark, setIsDark] = useState(!!storedPreference ?? false);

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
}
