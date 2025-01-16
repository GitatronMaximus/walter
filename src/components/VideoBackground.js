import React from "react";
import "../App.css";

function VideoBackground() {
  return (
    
      <video autoPlay muted loop id="backgroundVideo">
        <source src={`${process.env.PUBLIC_URL}/Videos/SuperDog.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
  );
}

export default VideoBackground;
