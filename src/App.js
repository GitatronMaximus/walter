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
import { faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';



function App() {
  usePreventImageDownload();
  
    return (
        <div className="App">
          <header className="App-header">
            
            <h1>Welcome to Walter's World</h1>
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
                <ul>
                  <li>Walter's Wisdom: Daily doses of Walter's unique perspective...</li>
                  <li>Community Engagement: Interactive features where fans can share their own 'Walter moments'...</li>
                  <li>Walter Rewards: 5% of total supply reserved explicitly for community airdrops and prizes</li>                  
                </ul>
              </section>

              <section id="join">
                <h2>Joining the Pack</h2>
                <p>Walter's World is more than a meme; it's a movement towards appreciating the simple joys and unspoken wisdom of everyday life...</p>
                <a href="https://twitter.com/WalterWalt82052" target="_blank" rel="noopener noreferrer" className="link solscan">
                  Follow Twitter
                  </a>
                  <a href="https://t.me/WalterTheWise" target="_blank" rel="noopener noreferrer" className="link solscan">
                    Join Telegram
                  </a>
              </section>

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
