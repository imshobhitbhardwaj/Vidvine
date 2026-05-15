import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";
import Upload from "./Upload";
import useTranscodingEvents from "./hooks/useTranscodingEvents";

function App() {
  const [videos, setVideos] = useState([]);
  const [progressMap, setProgressMap] = useState({});

  const fetchVideos = async () => {
    const res = await axios.get("http://localhost:5000/api/videos/all");
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
    const interval = setInterval(fetchVideos, 5000);
    return () => clearInterval(interval);
  }, []);

  useTranscodingEvents(setVideos, setProgressMap);

  return (
    <div>
      {/* <h1>Video Streaming</h1> */}
      <Upload />

      {videos.map((video) => (
        <div key={video._id} style={{ marginBottom: "20px" }}>
          <h3>{video.title}</h3>

          {video.status === "processing" && (
            <div>
              <p>Transcoding...</p>
              <progress
                value={progressMap[video._id] || 0}
                max={100}
                style={{ width: "300px" }}
              />
              <span>
                {progressMap[video._id]
                  ? progressMap[video._id].toFixed(1)
                  : 0}
                %
              </span>
            </div>
          )}

          {video.status === "ready" && (
            <Player url={video.streamUrl} title={video.title} />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;