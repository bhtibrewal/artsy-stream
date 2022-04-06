import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const preferDarkMode = matchMedia("(prefers-color-scheme: dark)").matches;
  const localMode = JSON.parse(localStorage.getItem("mode"));
  const [darkMode, setDarkMode] = useState(localMode ?? preferDarkMode);
  useEffect(() => {
    localStorage.setItem("mode", darkMode);

    return () => {
      localStorage.removeItem("mode");
    };
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`use useTheme must be used inside a context provider`);
  }
  return context;
};
export { ThemeProvider, useTheme };
