import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function VideoCard({ video }) {
    const { darkMode } = useTheme();

  return (
    <Link
  to={`/video/${video._id}`}
  style={{
    display: "block",
    textDecoration: "none",
    color: "inherit",
  }}
>
      <div
  style={{
    border: darkMode
      ? "1px solid #333"
      : "1px solid #ddd",

    borderRadius: "12px",
    overflow: "hidden",

    background: darkMode
      ? "#1e1e1e"
      : "#ffffff",

    color: darkMode
      ? "#ffffff"
      : "#000000",

    height: "220px",

    display: "flex",
    flexDirection: "column",
  }}
>

  <div
  style={{
    width: "100%",
    height: "130px",

    background: darkMode
      ? "#2a2a2a"
      : "#f1f1f1",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: "40px",
  }}
>
  🎬
</div>

<div
  style={{
    padding: "12px",
    flex: 1,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>
  <h3
    style={{
      color: darkMode ? "#ffffff" : "#000000",
      margin: 0,

      lineHeight: "24px",
      height: "48px",

      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflowWrap: "anywhere",
    }}
  >
    {video.title}
  </h3>

  <p
    style={{
      margin: 0,
      color:
        video.status === "ready"
          ? "#22c55e"
          : "#facc15",
      fontWeight: "600",
    }}
  >
    {video.status === "ready"
      ? "🟢 Ready"
      : "🟡 Processing"}
  </p>
</div>
      </div>
    </Link>
  );
}

export default VideoCard;