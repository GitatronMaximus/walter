import React from "react";
import VideoBackground from "../components/VideoBackground";
import "./ChartPage.css";
import '../App.css';

function ChartPage() {
  return (
    <div className="chart-container">
        <VideoBackground />
      <h1 className="graffiti-title">Live Chart</h1>
      <div className="iframe-container">
        <iframe
          src="https://vestige.fi/asset/1813993557"
          title="Vestige Live Chart"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ChartPage;
