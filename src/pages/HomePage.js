import React from "react";
import VideoSection from "../components/VideoSection";
import VideoBackground from "../components/VideoBackground";
import BuyLinks from "../components/BuyLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTiktok, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <header className="App-header">
      <div className="header-container">
        <h1 className="graffiti-title">Walter the Wise</h1>
        <div id="google_translate_element" className="translator-widget"></div>
      </div>
          <br />
          <br />
      </header>
      <div className="content-bubble">
      <h2>Join the Walter Movement</h2>
        <p>
          Walter, a Bull Terrier with an oddly human expression, became an
          internet sensation overnight.
        </p>
        <VideoBackground />
        <h2>How to Benefit</h2>
          <p>
            <strong>Step 1:</strong> Use the <strong>Swap Feature</strong> below to get $WALT tokens.  
            <br />
            <strong>Step 2:</strong> Add $ALGO-$WALT to the liquidity pool using the liquidity feature.  
            <br />
            <strong>Step 3:</strong> Stake your liquidity tokens on <a href="https://app.cometa.farm" target="_blank" rel="noopener noreferrer"><strong>Cometa</strong></a> to earn high APY rewards.  
            <br />
            <strong>Step 4:</strong> Secure your <a href="https://app.nf.domains/name/thewise.algo?view=segments" target="_blank" rel="noopener noreferrer"><strong>thewise.algo</strong></a> segment to unlock exclusive benefits like token airdrops, NFTs, and more.
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
        <h2>Add WALT-ALGO Liquidity</h2>
        {/* Tinyman Liquidity Feature */}
        <div className="tinyman-iframe-container">
          <iframe
            src="https://app.tinyman.org/pool/VCGXXV4XP23YTD363NPOCE3LU5OE6RYXDOPIYVPBU5ALFJQARPIEBBLWB4/add-liquidity"
            title="Tinyman Pool"
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
