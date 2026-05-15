const mongoose = require("mongoose");
const Video = require("./models/Video"); // adjust path

const run = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/videoStreamingDB");

  const videos = await Video.find();
  for (let v of videos) {
    if (!v.streamUrl) {
      // Use _id to create correct HLS path
      v.streamUrl = `http://localhost:5000/streams/${v._id}/stream.m3u8`;
      await v.save();
      console.log("Updated streamUrl for:", v._id);
    }
  }

  console.log("All videos updated");
  await mongoose.disconnect();
};

run();