# Vidvine

A full-stack video streaming application built with React, Node.js, Express, MongoDB, and FFmpeg. Vidvine allows users to upload videos, automatically converts them into HLS format for efficient streaming, stores video metadata, and provides a clean interface to browse and watch uploaded content.

The project was built to understand the complete workflow behind modern video streaming platforms, from uploading and processing videos to delivering them through HTTP Live Streaming (HLS).

---

## Features

- Upload video files
- Automatic video processing using FFmpeg
- HLS (.m3u8 and .ts) generation for streaming
- Stream videos using a custom React player
- Browse all uploaded videos
- Individual video playback page
- Search videos by title
- Light and Dark theme support
- Video metadata stored in MongoDB
- RESTful API for video management

---

## Tech Stack

### Frontend

- React
- React Router
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- FFmpeg

---

## Project Structure

```
Vidvine/
├── backend/
├── frontend/
└── README.md
```

---

## How It Works

1. Upload a video through the web application.
2. The backend receives and stores the original video.
3. FFmpeg converts the uploaded video into HLS format.
4. Video metadata is saved in MongoDB.
5. The frontend fetches available videos from the backend.
6. Users can browse and stream videos directly in the browser.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/imshobhitbhardwaj/Vidvine.git
cd Vidvine
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Future Improvements

- User authentication
- User profiles
- Video thumbnails
- Watch history
- Likes and comments
- Playlists
- Adaptive bitrate streaming
- Cloud storage integration
- Video recommendations

---

## Author

**Shobhit Bhardwaj**

Computer Science Engineering Student passionate about Full Stack Development and Backend Systems.