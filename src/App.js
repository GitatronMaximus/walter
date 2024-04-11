import { useEffect } from 'react';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import WalterProfile1 from './Assets/WalterProfile1.png';
import WalterProfile2 from './Assets/WalterProfile2.png';
import WalterProfile3 from './Assets/WalterProfile3.png';
import usePreventImageDownload from './usePreventImageDownload.js';
import Footer from './footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';



function App() {
  usePreventImageDownload();
  
    return (
        <div className="App">
          <header className="App-header">
            
            <h1>Welcome to Walter's World</h1>
            <p>Token launch 4/12/2024 on Raydium</p>
              <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer" className="link raydium">
                Buy on Raydium
              </a>
              <p>Dive Into the Whimsical World of Walter, Where Simplicity Meets Genius</p>
              <img src={WalterProfile2} className="dance-image" alt="Walter Profile 1" />
          </header>
              <section id="origin-story">
                <h2>The Walter Origin Story</h2>
                <p>Walter, a Bull Terrier with an oddly human expression, became an internet sensation overnight...</p>
                <img src={WalterProfile3} className="App-logo" alt="Walter Profile 1" />

              </section>
              
              <section id="philosophy">
                <h2>Walter's Philosophy</h2>
                <p>In Walter's World, we celebrate the beauty of the mundane and the wisdom found in simplicity...</p>
              </section>

              <section id="offerings">
                <h2>What We Offer</h2>
                <ul class="no-bullets sophisticated-list">
                  <li>Walter's Wisdom: Daily doses of Walter's unique perspective...</li>
                  <li>Community Engagement: Interactive features where fans can share their own 'Walter moments'...</li>
                  <li>Walter Rewards: 4% of total supply reserved explicitly for community airdrops and prizes</li>                  
                </ul>
              </section>

              <section id="join">
                <h2>Joining the Pack</h2>
                <p>Embark on a journey with "Walter's World," where every moment is a treasure trove of insight. 
                It's not just a meme; it's a movement <br /> that celebrates the simple joys and silent wisdom of life. Dive deeper, 
                engage, and connect with us <br />across our social media platforms. Join the pack and become part of a community 
                that sees the world through the wise eyes of Walter. <br />Follow the links below and let's explore the wonders of 
                wisdom together!
                </p>
                <a href="https://twitter.com/WalterWalt82052" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="large-icon" />
                </a>         
                <a href="https://t.me/WalterTheWise" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegramPlane} className="large-icon" />
                </a>
                <a href="https://www.youtube.com/channel/UCQLyZTCcQpAaPegZKOfUc8Q" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="large-icon" />
                </a>
                <a href="https://www.tiktok.com/@walter_thewise" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} className="large-icon" />
                </a>                
              </section>
              <br />

              <section id="liquidity-info">
                <h2>Initial Liquidity Lock</h2>
                <p style={{ fontWeight: 'bold' }}>
                  Notice: 100% of initial liquidity LP tokens will be burned, ensuring a fair and secure launch.
                </p>
              </section>
              <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer" className="link raydium">
                Buy on Raydium
              </a>
              <br />
              <br />
              <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="link dexscreener">
                Find on Dexscreener
              </a>
              <br />
              <br />             
              <a href="https://solscan.io/" target="_blank" rel="noopener noreferrer" className="link solscan">
                View on Solscan
              </a>
              <br />
              <br />
        
        <Footer />
        <p>Ready to find joy in the simple things? Join Walter's World today and start seeing life through Walter's wise, whimsical eyes.</p>
      </div>
  );
}

export default App;
