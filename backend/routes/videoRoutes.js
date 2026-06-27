const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Video = require("../models/Video");
const { transcodeVideo } = require("../services/transcoder");

const originalsDir = path.join(__dirname, "../storage/originals");

if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, originalsDir),
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
    const search = req.query.search || "";

  const videos = await Video.find({
    title: {
      $regex: search,
      $options: "i",
    },
  });

  res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    if (!video)
      return res
        .status(404)
        .json({ message: "Not found" });

    res.json(video);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;