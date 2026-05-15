const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: String,            // original file name
  fileName: String,         // stored file name on disk
  originalPath: String,     // local path of uploaded video
  hlsPath: String,          // local path of HLS folder (optional)
  streamUrl: String,        // full URL frontend can use to stream
  status: {
    type: String,
    enum: ["processing", "ready"],
    default: "processing"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Video", VideoSchema);