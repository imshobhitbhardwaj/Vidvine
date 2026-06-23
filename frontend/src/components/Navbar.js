import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSearch } from "../context/SearchContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { search, setSearch } = useSearch();

  return (
    <nav
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    background: darkMode ? "#18181b" : "#ffffff",
    borderBottom: darkMode
      ? "1px solid #333"
      : "1px solid #ddd",

    position: "sticky",
    top: 0,
    zIndex: 1000,
  }}
>
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: darkMode ? "#fff" : "#111",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          🎬 Vidvine
        </h2>
      </Link>

      {/* Search Bar */}
      <input
  type="text"
  placeholder="Search videos..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  style={{
    width: "500px",
maxWidth: "50%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: darkMode
      ? "1px solid #444"
      : "1px solid #ccc",
    background: darkMode
      ? "#27272a"
      : "#fff",
    color: darkMode
      ? "#fff"
      : "#111",
    outline: "none",
  }}
/>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/upload"
          style={{
            color: darkMode ? "#fff" : "#111",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Upload
        </Link>

        <button
          onClick={toggleTheme}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;