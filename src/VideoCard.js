import React, { useState, useRef } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import "./VideoCard.css";

function VideoCard( {url, likes, shares, channel} ) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress =()=>{
        if(isVideoPlaying){
            // stop the video
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }else{
            // play the video
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    };

    return (
        <div className="videoCard">
        <VideoHeader />
        <video 
        ref={videoRef}
        onClick={onVideoPress}
        className="video_player"
        src={url} 
        alt='IG reel video' 
        loop
        />
        <VideoFooter />
        </div>
    )
}

export default VideoCard;

