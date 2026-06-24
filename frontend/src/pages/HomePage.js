import { useEffect, useState } from "react";
import { getVideos } from "../services/videoApi";
import VideoCard from "../components/VideoCard";
import { useTheme } from "../context/ThemeContext";
import { useSearch } from "../context/SearchContext";

function HomePage() {
  const { darkMode } = useTheme();
  const { search } = useSearch();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadVideos = async () => {
    const data = await getVideos(search);
    setVideos(data);
    setLoading(false);
  };

  const timer = setTimeout(() => {
    loadVideos();
  }, 400);

  return () => clearTimeout(timer);
}, [search]);

  const filteredVideos = videos.filter((video) =>
    video.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#fff",
        color: darkMode ? "white" : "black",
        minHeight: "calc(100vh - 80px)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px",
          }}
        >
          Loading videos...
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          {filteredVideos.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 20px",
                opacity: 0.7,
                gridColumn: "1 / -1",
              }}
            >
              <h2>No videos found</h2>
              <p>Try another search term.</p>
            </div>
          ) : (
            filteredVideos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;