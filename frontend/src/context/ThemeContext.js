import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(() => {

  const saved =
    localStorage.getItem("theme");

  if (saved) {
    return saved === "dark";
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
});

  useEffect(() => {

  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );

  document.body.style.background =
    darkMode
      ? "#121212"
      : "#ffffff";

  document.body.style.color =
    darkMode
      ? "#ffffff"
      : "#000000";

}, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}