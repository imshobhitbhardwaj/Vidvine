import axios from "axios";
import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function UploadPage() {
    const { darkMode } = useTheme();
    
  const [file, setFile] = useState(null);

  const fileInputRef = useRef();

  const uploadVideo = async () => {
    if (!file) return;

    const formData = new FormData();

    formData.append("video", file);

    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/videos/upload`,
      formData
    );

    alert("Uploaded");

    setFile(null);

    fileInputRef.current.value = "";
  };

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
      <h1>Upload Video</h1>

      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button onClick={uploadVideo}>
        Upload
      </button>
    </div>
  );
}

export default UploadPage;