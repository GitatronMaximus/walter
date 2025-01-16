import React from "react";

function VideoSection() {
  return (
    <div className="video-container" style={{ textAlign: "center", marginBottom: "20px" }}>
      <video width="80%" controls>
        <source src={`${process.env.PUBLIC_URL}/Videos/FlippinWalterTheWiseShort.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoSection;
