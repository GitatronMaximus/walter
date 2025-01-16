import React from "react";
import VideoSection from "../components/VideoSection";
import VideoBackground from "../components/VideoBackground";
import BuyLinks from "../components/BuyLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTiktok, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <>
      <header className="App-header">
        <h1 className="graffiti-title">
          Walter The Wise
          <br />
          <br />
        </h1>
      </header>
      <div className="content-bubble">
        <VideoBackground />
        <h2>The Walter Story</h2>
        <p>
          Walter, a Bull Terrier with an oddly human expression, became an
          internet sensation overnight.
        </p>
        <VideoSection />
        <h2>Swap Tokens</h2>
        {/* Tinyman Swap Feature */}
        <div className="tinyman-iframe-container">
          <iframe
            src="https://app.tinyman.org/#/swap?asset_in=0&asset_out=1813993557&use_router=true"
            title="Tinyman Swap"
            frameBorder="0"
            width="100%"
            height="500px"
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
            allowFullScreen
          ></iframe>
        </div>
        <BuyLinks />
        <h2>Join the Community</h2>
        <div className="social-icons">
          <a
            href="https://twitter.com/Walter_TheWise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="large-icon" />
          </a>
          <a
            href="https://instagram.com/walter_thewise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="large-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@walter_thewise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="large-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
