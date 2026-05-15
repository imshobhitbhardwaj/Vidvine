const Video = require("../models/Video");
const path = require("path");
const transcodeVideo = require("../services/transcoder");

exports.uploadVideo = async (req,res)=>{

  try{

    const video = await Video.create({
  title: req.file.originalname,
  fileName: req.file.filename,
  originalPath: req.file.path,
  status: "processing",
  streamUrl: "" // will fill after transcoding
});

    transcodeVideo(video._id);

    res.json({
      message:"Video uploaded",
      videoId:video._id
    });

  }catch(err){

    res.status(500).json({error:err.message});

  }

};

exports.getVideos = async (req,res)=>{

 try{

   const videos = await Video.find({
   status: "ready"
 }).sort({createdAt:-1});

 res.json(videos);

 }catch(err){

   res.status(500).json({error:err.message});

 }

};