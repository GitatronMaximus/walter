import React from 'react';
import WalterBanner from './Assets/WalterBanner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faTiktok } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="App-footer" className="content-bubble3">
      <img src={WalterBanner} className="App-logo" alt="Walter banner" />
      <br />
      <br />
      <div className="social-links">
          <a href="https://twitter.com/Walter_TheWise" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>         
          <a href="https://t.me/WalterTheWise" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="https://www.tiktok.com/@walter_thewise" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      <br />
      © {new Date().getFullYear()} Walter Coin. All rights reserved.
    </footer>
  );
}

export default Footer;
