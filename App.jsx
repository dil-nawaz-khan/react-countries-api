import { Outlet } from "react-router-dom";

import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/Header";
import "./app.css";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
