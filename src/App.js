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
        <div className="siren-container">
        <div className="siren-light"></div>
        </div>
          <header className="App-header">
            
            <h1>Welcome to Walter's World</h1>
            <p>OFFICIAL contract address: ADu7Da8Thv9CBwYdXXcoWnwUXD5MWRs9APr3Fqxiwc2U</p>
            <br />
            <p> <span className="flash-text">Be sure to ONLY use this contract address and DO NOT search by name due to multiple scam projects
            with similar name and picture!</span>
            </p>
            <br />
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
                  <li>Walter's Wisdom: Dipping a mere 1% from our developers' stash to sow seeds of goodwill! We're channeling<br /> 
                  this slice of our treasure trove into scholarships and preventive maintenance programs, <br />ensuring our growth 
                  sprouts benefits not just for us, but for the community garden at large. Let's cultivate a legacy of giving, <br />
                  nurturing the future one scholarship and well-oiled gear at a time!</li>                  
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
                <a href="https://twitter.com/Walter_TheWise" className="social-link" target="_blank" rel="noopener noreferrer">
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
              <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ADu7Da8Thv9CBwYdXXcoWnwUXD5MWRs9APr3Fqxiwc2U&inputAmount=0&fixed=in" target="_blank" rel="noopener noreferrer" className="link raydium">
                Buy on Raydium
              </a>
              <br />
              <br />
              <a href="https://dexscreener.com/solana/cfvtnecfbstaqrcgjoetunakghg1tryazxqj1ghgguqy" target="_blank" rel="noopener noreferrer" className="link dexscreener">
                Find on Dexscreener
              </a>
              <br />
              <br />             
              <a href="https://https://solscan.io/token/ADu7Da8Thv9CBwYdXXcoWnwUXD5MWRs9APr3Fqxiwc2U" target="_blank" rel="noopener noreferrer" className="link solscan">
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
