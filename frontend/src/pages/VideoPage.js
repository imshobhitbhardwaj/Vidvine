import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Player from "../components/Player";

import { useTheme } from "../context/ThemeContext";

function VideoPage() {
    const { darkMode } = useTheme();

  const { id } = useParams();

  const [video, setVideo] =
    useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/videos/${id}`
    );

    setVideo(res.data);
  };
    fetchVideo();
  }, [id]);

  if (!video) return <h2>Loading...</h2>;

  return (
     <div
    style={{
      background: darkMode
        ? "#121212"
        : "#fff",
      color: darkMode
        ? "white"
        : "black",
      minHeight: "100vh",
      padding: "30px",
    }}
  >
      <Player
        url={video.streamUrl}
        title={video.title}
      />

      <h1>{video.title}</h1>

      <p>Status: {video.status}</p>
    </div>
  );
}

export default VideoPage;