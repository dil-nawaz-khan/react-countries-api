const { createContext, useState } = require("react");

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const storedPreference = localStorage.getItem("isDarkMode");
  const [isDark, setIsDark] = useState(
    storedPreference ? JSON.parse(storedPreference) : false
  );

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
