import React, { useState, useEffect } from 'react';
import './App.css';  // Ensure this contains your styles
import Button from '@mui/material/Button';
import WalterProfile2 from './Assets/WalterProfile2.png';
import Footer from './footer.js';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';  // Import Algorand SDK
import NFTGallery from './components/NFTGallery';  // Import the new component
import NftImage from './Assets/nft-image.png';  // Local image for NFT

// Algorand client settings
const baseServer = process.env.NODELY_API;  // Use your indexer URL from .env
const port = '';
const token = ''; // No token for Nodely
const client = new algosdk.Algodv2(token, baseServer, port);

// Nodely Indexer client settings
const indexerBaseServer = process.env.ALGOD_INDEXER_URL;  // Nodely indexer URL

// Initialize Indexer client without a token
const indexerClient = new algosdk.Indexer('', indexerBaseServer, port);

const appIndex = parseInt(process.env.SMART_CONTRACT_ID);  // Smart contract ID from .env
const nftId = 2313079846;  // The NFT ASA ID
const rewardAssetId = 1691271561;  // Reward ASA ID
const dailyReward = 1000000;  // 0.005 tokens in micro-units (for 8 decimals)

// Get private key from environment variables
const walletPrivateKey = process.env.SENDER_PRIVATE_KEY;

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [stakingStatus, setStakingStatus] = useState(null);
  const [rewardsAmount, setRewardsAmount] = useState(null);
  const [nfts, setNfts] = useState([]);  // Store NFTs

  // Fetch NFTs based on the ASA ID
  const fetchNFTs = async () => {
    if (!walletAddress) {
      setNfts([]);  // Clear NFTs if no wallet connected
      return;
    }
  
    try {
      // Fetch wallet's assets
      const accountInfo = await client.accountInformation(walletAddress).do();
  
      // Check if the wallet holds the specific NFT (nftId)
      const ownsNFT = accountInfo.assets.some(asset => asset['asset-id'] === nftId);
  
      if (ownsNFT) {
        // If the wallet owns the NFT, display it
        const nftData = [
          {
            id: nftId,
            name: 'Walter The Wise NFT',
            image: NftImage,  // Use the local image
          },
        ];
  
        setNfts(nftData);  // Set the NFT data
      } else {
        // If the wallet doesn't own the NFT, clear the NFT display
        setNfts([]);
      }
    } catch (error) {
      console.error('Failed to fetch NFT or account info:', error);
    }
  };
  

  // Fetch NFTs on component mount
  useEffect(() => {
    fetchNFTs();
  }, []);

  const connectPeraWallet = async () => {
    const peraWallet = new PeraWalletConnect();
    try {
      // Check if a session already exists
      if (peraWallet.isConnected) {
        console.log('Wallet session already connected');
        setSelectedWallet('Pera Wallet');
        setWalletAddress(peraWallet.getAccounts()[0]);
        return;
      }
  
      const accounts = await peraWallet.connect();
      setWalletAddress(accounts[0]);
      setSelectedWallet('Pera Wallet');
    } catch (err) {
      console.error('Failed to connect Pera Wallet:', err);
    }
  };
  
  useEffect(() => {
    if (walletAddress) {
      localStorage.setItem('walletAddress', walletAddress);
      localStorage.setItem('selectedWallet', selectedWallet);
    }
  }, [walletAddress, selectedWallet]);
  
  useEffect(() => {
    const savedWalletAddress = localStorage.getItem('walletAddress');
    const savedSelectedWallet = localStorage.getItem('selectedWallet');
  
    if (savedWalletAddress && savedSelectedWallet) {
      setWalletAddress(savedWalletAddress);
      setSelectedWallet(savedSelectedWallet);
    }
  }, []);  

  const disconnectWallet = () => {
    setWalletAddress(null);
    setSelectedWallet(null);
  };

  const formatWalletAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 6)}`;
  };

  useEffect(() => {
    const checkAlgodClient = async () => {
      try {
        const params = await client.getTransactionParams().do();
        console.log('Algod Client Parameters:', params);
      } catch (error) {
        console.error('Failed to fetch Algod transaction parameters:', error);
      }
    };
  
    checkAlgodClient();
  }, []);
  

  // Staking function for an NFT
  const onStake = async (nftId) => {
    try {
      console.log(`Staking NFT with ID: ${nftId}`);
  
      // Fetch Algod transaction parameters
      const params = await client.getTransactionParams().do();
      console.log('Transaction parameters:', params);
  
      // Construct the transaction
      const txn = algosdk.makeApplicationNoOpTxnFromObject({
        from: walletAddress,
        appIndex: appIndex,
        appArgs: [new Uint8Array(Buffer.from('stake'))],
        foreignAssets: [nftId],
        suggestedParams: params,
      });
  
      // Sign the transaction with the private key
      const signedTxn = txn.signTxn(algosdk.mnemonicToSecretKey(walletPrivateKey).sk);
  
      // Send the signed transaction
      const txId = await client.sendRawTransaction(signedTxn).do();
      console.log('Transaction ID:', txId);
  
      setStakingStatus(`NFT ${nftId} staked successfully`);
    } catch (error) {
      console.error('Error staking NFT:', error);
      setStakingStatus('Failed to stake NFT');
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
        </div>
  
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
  
        {walletAddress && (
          <div>
            <h2 style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>Your NFTs</h2>
            {nfts.length > 0 ? (
              <div className="nft-gallery">
                {nfts.map((nft) => (
                  <div key={nft.id} className="nft-item">
                    <img src={nft.image} alt={nft.name} />
                    <div className="nft-name-box">
                      <p>{nft.name}</p>
                    </div>
                    <button onClick={() => onStake(nft.id)}>Stake</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-nft-message" style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
                <p>You must own an eligible NFT to stake on this platform.</p>
              </div>
            )}
          </div>
        )}

  
        {/* Display staking and rewards status */}
        <div>
          <p><Button variant="contained" style={{ margin: '10px' }}>Staking Status: {stakingStatus}</Button></p>
          <p><Button variant="contained" style={{ margin: '10px' }}>Available Rewards: {rewardsAmount}</Button></p>
        </div>
      </header>
  
      <section id="walter-story" className="content-bubble">
        <h2>The Walter Story</h2>
        <p>
          Walter, a Bull Terrier with an oddly human expression, became an internet sensation overnight.
        </p>
        <br />
        <h2>Join the Community</h2>
        <div className="social-icons">
          <a href="https://twitter.com/Walter_TheWise" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} className="large-icon" />
          </a>
          <a href="https://discord.gg/3qdmqGNb" target="_blank" rel="noopener noreferrer" className="social-link">
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
