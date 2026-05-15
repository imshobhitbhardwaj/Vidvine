import axios from "axios";
import { useState, useRef } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const uploadVideo = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("video", file);

      await axios.post("http://localhost:5000/api/videos/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Clear file input
      setFile(null);
      fileInputRef.current.value = "";
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={uploadVideo}>Upload</button>
    </div>
  );
}

export default Upload;