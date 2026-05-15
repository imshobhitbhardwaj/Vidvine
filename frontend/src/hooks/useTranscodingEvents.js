import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function useTranscodingEvents(setVideos, setProgressMap) {
  useEffect(() => {
    socket.on("transcoding-started", ({ videoId }) => {
      alert("Video uploaded, transcoding started!");
    });

    socket.on("transcoding-progress", ({ videoId, percent }) => {
      setProgressMap((prev) => ({ ...prev, [videoId]: percent }));
    });

    socket.on("transcoding-finished", ({ videoId, streamUrl }) => {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === videoId ? { ...v, streamUrl, status: "ready" } : v
        )
      );
      setProgressMap((prev) => ({ ...prev, [videoId]: 100 }));

      // ✅ Add alert for transcoding finished
      alert("Transcoding finished!");
    });

    return () => {
      socket.off("transcoding-started");
      socket.off("transcoding-progress");
      socket.off("transcoding-finished");
    };
  }, [setVideos, setProgressMap]);
}

export default useTranscodingEvents;