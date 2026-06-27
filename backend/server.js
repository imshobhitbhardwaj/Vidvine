require("dotenv").config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Make io available in requests
app.use((req, res, next) => {
  req.io = io;
  next();
});

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/videos", videoRoutes);
app.use("/streams", express.static(path.join(__dirname, "storage/streams")));

// Socket.io connection log
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("disconnect", () => console.log("Client disconnected:", socket.id));
});

const PORT =
  process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));