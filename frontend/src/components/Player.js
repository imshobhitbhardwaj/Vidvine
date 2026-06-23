import Hls from "hls.js";
import { useEffect, useRef } from "react";

function Player({ url, title }) {
  const videoRef = useRef();

  useEffect(() => {
    if (!url) {
      console.warn("Video URL missing for video:", title);
      return; // prevent Hls from loading undefined
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);

      // Cleanup on unmount
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS
      videoRef.current.src = url;
    }
  }, [url, title]);

  return (
    <video
      ref={videoRef}
      controls
      width="600"
    />
  );
}

export default Player;