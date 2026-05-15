const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Video = require("../models/Video");
const { transcodeVideo } = require("../services/transcoder");

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(__dirname, "../storage/originals")),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/upload", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const video = await Video.create({
      title: req.file.originalname,
      fileName: req.file.filename,
      originalPath: req.file.path,
      streamUrl: "",
      status: "processing",
    });

    transcodeVideo(video._id, req.file.path, req.io);

    res.status(201).json(video);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;