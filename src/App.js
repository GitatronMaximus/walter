import { useEffect } from 'react';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import WalterProfile1 from './Assets/WalterProfile1.png';
import WalterProfile2 from './Assets/WalterProfile2.png';
import WalterProfile3 from './Assets/WalterProfile3.png';
import AlgorandLogo from './Assets/AlgorandLogo.png';
import WalterBurnInitialLiquidity from './Assets/WalterBurnInitialLiquidity.png';
import usePreventImageDownload from './usePreventImageDownload.js';
import Footer from './footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane, faTiktok } from '@fortawesome/free-brands-svg-icons';



function App() {
  usePreventImageDownload();
  
    return (
      <div className="App">
        <div className="siren-container">
        <div className="siren-light"></div>
        </div>
          <header className="App-header">
            <section>
            <h1>Welcome to Walter's World</h1>
              {/* <p>OFFICIAL solana contract address: ADu7Da8Thv9CBwYdXXcoWnw<br />UXD5MWRs9APr3Fqxiwc2U</p> */}
              <p>Launching soon on Algorand</p> 
              <img src={AlgorandLogo} className="App-logo" alt="Algo logo" />
              {/* <p>OFFICIAL Algorand ID: 1813993557</p> */}
              <br />
              {/* <p> <span className="flash-text">Be sure to ONLY use this contract address<br />and asset ID and DO NOT search by name<br /> due to multiple <br />scam projects
              with similar name and picture!</span>
              </p> */}
                <br />
                  {/* <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ADu7Da8Thv9CBwYdXXcoWnwUXD5MWRs9APr3Fqxiwc2U&inputAmount=0&fixed=in" target="_blank" rel="noopener noreferrer" className="link raydium">
                    Buy on Raydium
                  </a> */}
                <br />
                <br />
            </section>

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
                  <li>Walter Rewards: 5% of total supply reserved explicitly for community airdrops and prizes</li>
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
                <a href="https://www.tiktok.com/@walter_thewise" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} className="large-icon" />
                </a>                
              </section>
              <br />

              {/* <section id="liquidity-info">
                <h2>Initial Liquidity Locked by Burn</h2>
                <p style={{ fontWeight: 'bold' }}>
                  Notice: 100% of initial liquidity LP tokens HAS BEEN BURNED, ensuring a fair and secure launch.
                </p>
                <br />
                  <a href="https://solscan.io/tx/2QwZQbW24qFqqxKcir9sErZKQt86mRwejov98YhbP3XUZvjH4DhgakppiLw8MyhpzUgu7BJJHwAcq6JKpB8TG65F" target="_blank" rel="noopener noreferrer"
                  className="burn-transaction-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   View Burn Transaction
                  </a>
                <br />
                <br />
                <br />
                <br />
                 <div className="fire-effect">
                  <img src={WalterBurnInitialLiquidity} className="App-logo" alt="Walter Initial Liquidity Burn" />
                 </div>
                 <br />
                 <br />
                 <br />

              </section> */}
              {/* <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ADu7Da8Thv9CBwYdXXcoWnwUXD5MWRs9APr3Fqxiwc2U&inputAmount=0&fixed=in" target="_blank" rel="noopener noreferrer" className="link raydium">
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
              <br /> */}
            <div>
              <Footer />
            </div>
        
        <p>Ready to find joy in the simple things? Join Walter's World today and start seeing life through Walter's wise, whimsical eyes.
        </p>
        <br />
        <h4>Terms and Conditions</h4>
            <p>
                Welcome to WalterTheWise! These terms and conditions outline the rules and regulations for the use of 
                WalterTheWise's Website, located at https://walterthewise.site.
            </p>
            <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use
                WalterTheWise if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
                and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and
                compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
                to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
            </p>
            <br />
            <br />
            <p>
              Legal Disclaimer
        "Legal Disclaimer: The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. WalterTheWise does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions."

        Risk Disclosure
        "Risk Disclosure: Cryptocurrency investments are highly volatile and risky. Do not invest more than you can afford to lose. The views expressed on this site are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer or company."

        Accuracy of Information
        "Accuracy of Information: WalterTheWise makes every effort to ensure that the content on this website is accurate and up to date. However, WalterTheWise takes no responsibility for any missing or incorrect information. You understand that you are using any and all information available here at your own risk."

        Proprietary Rights
        "Proprietary Rights: The content and information on walterthewise.site are the property of WalterTheWise and EverBlock Technologies and are protected by copyright and intellectual property laws. Do not reproduce, distribute, or transmit the contents of the site without prior written permission from WalterTheWise."

        Affiliate Disclaimer
        "Affiliate Disclaimer: Some of the links on this website are affiliate links, which means that WalterTheWise may earn a commission if you click on the link or make a purchase using the link. This comes at no additional cost to you, and helps us to continue offering valuable information."

        Terms of Service & Privacy Policy
        "Please review our Terms of Service and Privacy Policy to learn more about our operating principles."

        Contact Information
        "If you have any questions or concerns about our practices, please contact us at support@walterthewise.site."
            </p>
            <br />
            <br />
      </div>
  );
}

export default App;
