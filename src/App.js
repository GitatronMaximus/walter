import React, { useState, useEffect } from 'react';
import './App.css';  // Ensure this contains your styles
import Button from '@mui/material/Button';
import WalterProfile2 from './Assets/WalterProfile2.png';
import Footer from './footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { PeraWalletConnect } from '@perawallet/connect';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import algosdk from 'algosdk';  // Import Algorand SDK

// Utility to detect if the user is on a mobile device
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Algorand client settings
const baseServer = process.env.ALGOD_INDEXER_URL;  // Use your indexer URL from .env
const port = '';
const token = {
  'X-API-Key': process.env.NODELY_API  // Use your Nodely API key from .env
};
const client = new algosdk.Algodv2(token, baseServer, port);
const appIndex = parseInt(process.env.SMART_CONTRACT_ID);  // Smart contract ID from .env
const nftId = 2313079846;  // The NFT ASA ID
const rewardAssetId = 1691271561;  // Reward ASA ID
const dailyReward = 500000;  // 0.005 tokens in micro-units (for 8 decimals)

// Get private key from environment variables
const walletPrivateKey = process.env.SENDER_PRIVATE_KEY;

function App() {
  const [walletAddress, setWalletAddress] = useState(null);  // Store wallet address in state
  const [selectedWallet, setSelectedWallet] = useState(null);  // Store selected wallet
  const [stakingStatus, setStakingStatus] = useState(null);  // Staking status
  const [rewardsAmount, setRewardsAmount] = useState(null);  // Available rewards

  // Retain background video and disable context menu
  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
    };
  }, []);

  // Pera Wallet connection handler
  const connectPeraWallet = async () => {
    const peraWallet = new PeraWalletConnect();
    try {
      const accounts = await peraWallet.connect();
      setWalletAddress(accounts[0]);
      setSelectedWallet('Pera Wallet');
    } catch (err) {
      console.error('Failed to connect Pera Wallet:', err);
    }
  };

  // Defly Wallet connection handler with WalletConnect
  // const connectDeflyWallet = async () => {
  //   try {
  //     const walletConnect = new WalletConnect({
  //       bridge: "https://bridge.walletconnect.org" // Use the WalletConnect bridge URL
  //     });

  //     // Check if the wallet is already connected
  //     if (!walletConnect.connected) {
  //       // If not connected, create a new session
  //       if (isMobile()) {
  //         const uri = await walletConnect.createSession(); // Create a session for mobile
  //         const deepLink = `defly://wc?uri=${encodeURIComponent(walletConnect.uri)}`;
  //         window.location.href = deepLink; // Redirect to Defly Wallet via deep link
  //       } else {
  //         // Create session for desktop
  //         walletConnect.createSession().then(() => {
  //           const uri = walletConnect.uri;
  //           QRCodeModal.open(uri); // Show QR code for desktop connection
  //         });
  //       }
  //     }

  //     // Listen for connection events
  //     walletConnect.on("connect", (error, payload) => {
  //       if (error) {
  //         console.error("Error connecting to Defly Wallet:", error);
  //         return;
  //       }
  //       const { accounts } = payload.params[0];
  //       setWalletAddress(accounts[0]);
  //       setSelectedWallet('Defly Wallet');
  //       QRCodeModal.close(); // Close the QR code modal once connected
  //     });

  //     walletConnect.on("disconnect", () => {
  //       setWalletAddress(null);
  //       setSelectedWallet(null);
  //       console.log("Disconnected from Defly Wallet");
  //     });
  //   } catch (error) {
  //     console.error("Failed to connect to Defly Wallet:", error);
  //   }
  // };


  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setSelectedWallet(null);
  };

  // Format the wallet address
  const formatWalletAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 6)}`;
  };

  // Function to stake NFT
  const stakeNFT = async () => {
    try {
      const params = await client.getTransactionParams().do();

      const txn = algosdk.makeApplicationNoOpTxnFromObject({
        from: walletAddress,
        appIndex: appIndex,
        appArgs: [new Uint8Array(Buffer.from('stake'))],
        foreignAssets: [nftId],
        suggestedParams: params,
      });

      const signedTxn = txn.signTxn(algosdk.mnemonicToSecretKey(walletPrivateKey).sk);  // Use private key from .env
      const txId = await client.sendRawTransaction(signedTxn).do();
      console.log('Transaction ID:', txId);
      setStakingStatus('NFT staked successfully');
    } catch (error) {
      console.error('Error staking NFT:', error);
    }
  };

  // Function to unstake NFT
  const unstakeNFT = async () => {
    try {
      const params = await client.getTransactionParams().do();

      const txn = algosdk.makeApplicationNoOpTxnFromObject({
        from: walletAddress,
        appIndex: appIndex,
        appArgs: [new Uint8Array(Buffer.from('unstake'))],
        suggestedParams: params,
      });

      const signedTxn = txn.signTxn(algosdk.mnemonicToSecretKey(walletPrivateKey).sk);  // Use private key from .env
      const txId = await client.sendRawTransaction(signedTxn).do();
      console.log('Transaction ID:', txId);
      setStakingStatus('NFT unstaked successfully');
    } catch (error) {
      console.error('Error unstaking NFT:', error);
    }
  };

  // Function to distribute rewards
  const distributeRewards = async () => {
    try {
      const params = await client.getTransactionParams().do();

      const txn = algosdk.makeApplicationNoOpTxnFromObject({
        from: 'rewards.thewide.algo',  // Rewards account
        appIndex: appIndex,
        appArgs: [new Uint8Array(Buffer.from('distribute_rewards'))],
        suggestedParams: params,
      });

      const signedTxn = txn.signTxn(algosdk.mnemonicToSecretKey(walletPrivateKey).sk);  // Use private key from .env
      const txId = await client.sendRawTransaction(signedTxn).do();
      console.log('Transaction ID:', txId);
      setRewardsAmount('Rewards distributed successfully');
    } catch (error) {
      console.error('Error distributing rewards:', error);
    }
  };

  return (
    <div className="App">
      <div className="siren-container">
        <div className="siren-light"></div>
        <video autoPlay muted loop id="backgroundVideo">
          <source src={`${process.env.PUBLIC_URL}/Videos/SuperDog.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <header className="App-header">
        <img src={WalterProfile2} className="App-logo" alt="Walter logo" />
        <h1>WalterTheWise Staking DApp (under construction)</h1>

        <div style={{ margin: '20px 0' }}>
          <Button variant="contained" onClick={connectPeraWallet} style={{ margin: '5px' }}>Connect Pera Wallet</Button>
          {/* <Button variant="contained" onClick={connectDeflyWallet} style={{ margin: '5px' }}>Connect Defly Wallet</Button> */}
        </div>

        {/* Show connected wallet address */}
        {walletAddress && (
          <div className="wallet-info">
            <p className="wallet-text">
              Connected Wallet: {formatWalletAddress(walletAddress)} via {selectedWallet}
            </p>
            <Button variant="contained" onClick={disconnectWallet} style={{ marginTop: '10px' }}>
              Disconnect
            </Button>
          </div>
        )}

        {/* Staking and Unstaking Buttons */}
        {walletAddress && (
          <div>
            <Button variant="contained" onClick={stakeNFT} style={{ margin: '5px' }}>Stake NFT</Button>
            <Button variant="contained" onClick={unstakeNFT} style={{ margin: '5px' }}>Unstake NFT</Button>
            <Button variant="contained" onClick={distributeRewards} style={{ margin: '5px' }}>Claim Daily Rewards</Button>
          </div>
        )}

        {/* Display staking and rewards status */}
        <div>
          <p><Button variant="contained" style={{ margin: '10px' }}>Staking Status: {stakingStatus}</Button></p>
          <p><Button variant="contained" style={{ margin: '10px' }}>Available Rewards: {rewardsAmount}</Button></p>
        </div>

        {/* Presale and Claim Buttons */}
        <a href="https://vestige.fi/launchpad/2310198499" target="_blank" rel="noopener noreferrer" className="link">
          <Button variant="contained" style={{ margin: '10px' }}>Join Presale</Button>
        </a>
        <a href="https://app.nf.domains/name/thewise.algo" target="_blank" rel="noopener noreferrer" className="link">
          <Button variant="contained" style={{ margin: '10px' }}>Claim Segments</Button>
        </a>
      </header>

      <section id="walter-story" className="content-bubble">
        <h2>The Walter Story</h2>
        <p>
          Walter, a Bull Terrier with an oddly human expression, became an internet sensation overnight. 
        </p>
        <br />
        <h2>Join the Community</h2>
        <p>Follow Walter and engage with the community:</p>
        <div className="social-icons">
          <a href="https://twitter.com/Walter_TheWise" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="large-icon" />
          </a>
          <a href="https://discord.gg/YxGjdusu" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faDiscord} className="large-icon" />
          </a>
          <a href="https://www.tiktok.com/@walter_thewise" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTiktok} className="large-icon" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
