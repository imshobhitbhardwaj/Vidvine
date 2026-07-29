<div align="center">

# 🎬 Vidvine

### Full Stack Video Streaming Platform

Upload • Process • Stream

Built with **React**, **Node.js**, **Express**, **MongoDB**, and **FFmpeg**

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Framework-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)
![FFmpeg](https://img.shields.io/badge/Media-FFmpeg-007808)

</div>

---

# 📖 Overview

Vidvine is a full-stack video streaming platform that demonstrates how modern streaming applications process and deliver video content.

Users can upload videos through the web application, after which the backend processes the uploaded media using FFmpeg and converts it into **HTTP Live Streaming (HLS)** format. The generated playlist and video segments are then streamed directly inside the application using a custom React-based video player.

The project focuses on understanding the complete backend workflow involved in video streaming, including media processing, storage, metadata management, and client-side playback.

---

# ✨ Features

## Video Upload

- Upload video files through the web interface
- Store uploaded videos on the server
- Save video metadata in MongoDB

## Video Processing

- Automatic video processing using FFmpeg
- Convert uploaded videos into HLS format
- Generate `.m3u8` playlists
- Generate `.ts` video segments

## Video Streaming

- Stream videos directly inside the browser
- Custom React video player
- HLS playback support
- Individual watch page for every uploaded video

## Video Management

- Browse uploaded videos
- Search videos by title
- View video information
- Dynamic video listing

## User Interface

- Responsive design
- Clean React interface
- Separate Home, Upload and Watch pages
- Modern card-based layout

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Axios
- HTML5
- CSS3
- JavaScript (ES6)

---

## Backend

- Node.js
- Express.js
- REST API
- Multer

---

## Database

- MongoDB
- Mongoose

---

## Media Processing

- FFmpeg
- HLS (HTTP Live Streaming)

---

# 📂 Project Structure

```
Vidvine
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── storage
│   ├── utils
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
│   │
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure the following are installed:

- Node.js (v18 or later recommended)
- npm
- MongoDB
- FFmpeg

---

# ⚙ Installation

## 1. Clone the repository

```bash
git clone https://github.com/imshobhitbhardwaj/Vidvine.git
```

```bash
cd Vidvine
```

---

## 2. Install Backend Dependencies

```bash
cd backend
```

```bash
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../frontend
```

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the **backend** directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:3000
```

Update the values according to your local environment.

---

## 5. Start MongoDB

Ensure your MongoDB server is running.

---

## 6. Start Backend

```bash
cd backend

npm run dev
```

or

```bash
npm start
```

---

## 7. Start Frontend

```bash
cd frontend

npm start
```

---

## 8. Open the Application

```
http://localhost:3000
```

---

# 📸 Screenshots

> Add screenshots here after deploying or capturing the application.

Example:

```
screenshots/
│
├── home.png
├── upload.png
└── player.png
```

```md
## Home

![Home](screenshots/home.png)

## Upload

![Upload](screenshots/upload.png)

## Watch

![Watch](screenshots/player.png)
```

---

# 🏗️ Application Workflow

The application follows a simple workflow from video upload to playback.

```text
             Upload Video
                  │
                  ▼
          React Frontend
                  │
                  ▼
        Express REST API
                  │
                  ▼
        Multer Stores Video
                  │
                  ▼
        FFmpeg Processing
                  │
                  ▼
      Generate HLS Files
      (.m3u8 + .ts Segments)
                  │
                  ▼
       Save Metadata to MongoDB
                  │
                  ▼
       Fetch Videos via API
                  │
                  ▼
      Stream using React Player
```

---

# 📡 API Overview

## Video Routes

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/api/videos/upload` | Upload a video |
| GET | `/api/videos` | Fetch all videos |
| GET | `/api/videos/:id` | Fetch a single video |
| GET | `/api/videos/stream/:id` | Stream HLS video |

> Endpoint names may vary depending on the current backend implementation.

---

# 💾 Database

Each uploaded video stores metadata such as:

- Title
- Original File Name
- HLS Output Path
- Stream URL
- Thumbnail URL (if available)
- Processing Status
- Upload Date

The actual video files remain on the server while metadata is stored in MongoDB.

---

# 🎯 Project Goals

Vidvine was developed to understand the architecture behind modern video streaming platforms.

The project focuses on:

- Media upload handling
- Backend API development
- Video processing
- HLS streaming
- MongoDB integration
- React frontend development
- RESTful communication
- File storage management

---

# ⚡ Key Concepts Demonstrated

- React Component Architecture
- Express REST APIs
- MongoDB CRUD Operations
- Multer File Uploads
- FFmpeg Integration
- HTTP Live Streaming (HLS)
- Video Metadata Management
- Client-Server Communication
- Responsive UI Design

---

# 📌 Current Limitations

The current implementation is intended as a learning project and has some limitations:

- Local file storage
- Single server deployment
- No authentication system
- No user accounts
- No video categories
- No comments or likes
- No adaptive bitrate streaming
- No cloud storage integration

---

# 🚀 Future Improvements

Planned enhancements include:

## Authentication

- User Registration
- Login
- JWT Authentication
- User Profiles

## Video Features

- Thumbnail Generation
- Categories
- Tags
- Likes
- Comments
- Playlists
- Watch History

## Streaming

- Adaptive Bitrate Streaming
- Multiple Video Quality Options
- Subtitle Support

## Storage

- Cloud Storage Integration
- CDN Support
- Better File Organization

## Performance

- Video Compression Optimization
- Background Processing
- Improved Search
- Pagination

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to contribute:

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push your branch.

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request.

Please ensure that your code follows the existing project structure and coding style.

---

# 📄 License

This project is developed for learning and educational purposes.

You are free to fork, explore, and learn from the code.

---

# 👨‍💻 Author

## Shobhit Bhardwaj

Computer Science Engineering Student passionate about building scalable Full Stack applications and learning backend system design.

### Connect with me

- GitHub: https://github.com/imshobhitbhardwaj
- LinkedIn: https://www.linkedin.com/in/imshobhitbhardwaj/

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star.

**Thank you for visiting Vidvine!**

</div>