const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");
const Video = require("../models/Video");

const transcodeVideo = async (videoId, inputPath, io) => {
  const videoIdStr = videoId.toString();
  const outputDir = path.join(__dirname, "../storage/streams", videoIdStr);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, "stream.m3u8");

  // Get total video duration
  const duration = await new Promise((resolve, reject) => {
    ffmpeg.ffprobe(inputPath, (err, metadata) => {
      if (err) return reject(err);
      resolve(metadata.format.duration);
    });
  });

  // Watch for segment creation
  const createdSegments = new Set();

const segmentWatcher = fs.watch(outputDir, (eventType, filename) => {
  if (filename && filename.endsWith(".ts") && !createdSegments.has(filename)) {
    createdSegments.add(filename);
    console.log(`Segment created: ${filename}`);
  }
});

  ffmpeg(inputPath)
  .outputOptions([
    "-c:v libx264",
    "-c:a aac",
    "-preset veryfast",
    "-g 48",
    "-sc_threshold 0",
    "-f hls",
    "-hls_time 10",
    "-hls_list_size 0",
    "-hls_segment_filename",
    path.join(outputDir, "segment_%03d.ts"),
  ])
  .output(outputPath)
  .on("start", (cmd) => {
    console.log("Transcoding started:", videoIdStr);
    console.log("FFmpeg command:", cmd);
    io.emit("transcoding-started", { videoId: videoIdStr });
  })
  .on("progress", (progress) => {
    const timeParts = progress.timemark.split(":").map(Number);
    const seconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
    const percent = duration ? Math.min((seconds / duration) * 100, 100) : 0;
    io.emit("transcoding-progress", { videoId: videoIdStr, percent });
  })
  .on("end", async () => {
    segmentWatcher.close();
    console.log("Transcoding finished:", videoIdStr);

    const streamUrl = `${process.env.BASE_URL}/streams/${videoIdStr}/stream.m3u8`;
    await Video.findByIdAndUpdate(videoId, { status: "ready", streamUrl });
    io.emit("transcoding-finished", { videoId: videoIdStr, streamUrl });

    // DELETE original file **after FFmpeg finishes**
    fs.unlink(inputPath, (err) => {
      if (err) console.error("Failed to delete original file:", err);
      else console.log("Original file deleted:", inputPath);
    });
  })
  .on("error", (err) => console.error("FFmpeg error:", err))
  .run();
};

module.exports = { transcodeVideo };