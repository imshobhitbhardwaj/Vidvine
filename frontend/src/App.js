import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

import { SearchProvider } from "./context/SearchContext";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";

import UploadPage from "./pages/UploadPage";

import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;