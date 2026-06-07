# BingerHub 🎬  
### Full Stack Video Streaming Platform

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/imshobhitbhardwaj/BingerHub?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/imshobhitbhardwaj/BingerHub?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/imshobhitbhardwaj/BingerHub?style=for-the-badge)
![License](https://img.shields.io/github/license/imshobhitbhardwaj/BingerHub?style=for-the-badge)

<br/>

### 🚀 Upload • Transcode • Stream

Modern video streaming platform built with React, Node.js, MongoDB, and FFmpeg using HLS streaming architecture.

</div>

---

# ✨ Overview

**BingerHub** is a full stack video streaming application that allows users to upload videos, process them into HLS streaming format, and stream them through a responsive frontend interface.

The project focuses on real-world media streaming workflow implementation including:

- Video uploads
- FFmpeg transcoding
- HLS stream generation
- Backend media processing
- Responsive frontend playback
- Event-driven transcoding updates

---

# 🎯 Features

- 📤 Video Upload System
- 🎞️ HLS Video Streaming
- ⚡ FFmpeg Transcoding
- 📡 Real-time Transcoding Updates
- 🎥 Custom Video Player
- 📱 Responsive Frontend UI
- 🗂️ Media Storage Management
- 🔗 REST API Architecture

---

# 🛠️ Tech Stack

## Frontend
- React.js
- JavaScript
- CSS3
- HTML5

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Video Processing
- FFmpeg
- HLS Streaming (`.m3u8` + `.ts segments`)

---

# 📂 Project Structure

```bash
BingerHub/
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── videoController.js
│   ├── models
│   │   └── Video.js
│   ├── routes
│   │   └── videoRoutes.js
│   ├── services
│   │   └── transcoder.js
│   ├── storage
│   │   ├── originals
│   │   └── streams
│   ├── server.js
│   └── updateVideos.js
│
└── frontend
    ├── public
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── hooks
        │   └── useTranscodingEvents.js
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js
        ├── Player.js
        └── Upload.js
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/imshobhitbhardwaj/BingerHub.git
cd BingerHub
```

---

## 2️⃣ Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd backend
npm start
```

## Start Frontend

```bash
cd frontend
npm start
```

---

# 🎥 Streaming Workflow

```text
User Uploads Video
        ↓
Backend Receives File
        ↓
FFmpeg Transcodes Video
        ↓
HLS Segments Generated
        ↓
Stored in /storage/streams
        ↓
Frontend Streams Video
```

---

# 📸 Frontend Highlights

- Responsive video player
- Dynamic stream playback
- Upload interface
- Clean React component structure
- Event-driven transcoding updates

---

# 🔥 HLS Streaming

BingerHub uses **HTTP Live Streaming (HLS)** for delivering video content.

Generated streaming files include:
- `.m3u8` playlist files
- `.ts` media segments

This architecture is widely used in modern streaming platforms for efficient media delivery.

---

# 🔐 Backend Architecture

The backend follows a modular structure using:

- Controllers
- Routes
- Services
- Database Models
- Dedicated transcoding service

This improves scalability and maintainability.

---

# 🚀 Future Improvements

- Multi-quality adaptive streaming
- Authentication system
- Video thumbnails
- Upload progress tracking
- Cloud storage integration
- User dashboard
- Watch history

---

# 🤝 Contributing

```bash
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature
```

Create a Pull Request 🚀

---

# 👨‍💻 Author

## Shobhit Bhardwaj

- GitHub: [@imshobhitbhardwaj](https://github.com/imshobhitbhardwaj)
- LinkedIn: [Shobhit Bhardwaj](https://linkedin.com/in/imshobhitbhardwaj)

---

# ⭐ Support

If you like this project:

- ⭐ Star the repository
- 🍴 Fork it
- 🐛 Report issues
- 🚀 Contribute improvements

---

# 📄 License

MIT License

---

<div align="center">

### 🎬 BingerHub — Video Streaming Infrastructure in Action

</div>
