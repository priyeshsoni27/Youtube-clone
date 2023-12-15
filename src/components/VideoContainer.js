import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
// import youtubeHook from '../hooks/youtubeHook'

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json?.items);
  };  

  return (
    <div className="flex flex-wrap">
      {video.map((videos)=>(
        <Link key={videos?.id}  to={'/watch?v='+videos.id}>
      <VideoCard key={videos?.id} info={videos} />
        </Link>
       ))}
    </div>
  );
};

export default VideoContainer;
