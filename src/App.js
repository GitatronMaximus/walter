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
console.log('NODELY_API:', process.env.REACT_APP_NODELY_API);

const baseServer = process.env.REACT_APP_NODELY_API || 'https://mainnet-api.4160.nodely.dev';  // Use your indexer URL from .env
const port = '';
const token = ''; // No token for Nodely
const client = new algosdk.Algodv2(token, baseServer, port);

// Nodely Indexer client settings
const indexerBaseServer = process.env.REACT_APP_ALGOD_INDEXER_URL;  // Nodely indexer URL

// Initialize Indexer client without a token
const indexerClient = new algosdk.Indexer('', indexerBaseServer, port);

const appIndex = 2375265094;  // Smart contract ID from .env
console.log('appIndex:', appIndex);
const nftId = 2313079846;  // The NFT ASA ID
const rewardAssetId = 1691271561;  // Reward ASA ID
const dailyReward = 1000000;  // 0.005 tokens in micro-units (for 8 decimals)

// Get private key from environment variables
const walletPrivateKey = process.env.REACT_APP_SENDER_PRIVATE_KEY;

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [stakingStatus, setStakingStatus] = useState(null);
  const [rewardsAmount, setRewardsAmount] = useState(null);
  const [nfts, setNfts] = useState([]);  // Store NFTs

  // Fetch NFTs based on the ASA ID
  const fetchNFTs = async () => {
    try {
      // You can replace this with real data fetch logic, but here we simulate fetching data
      const nftData = [
        {
          id: nftId,
          name: 'Walter The Wise NFT',  // NFT name
          image: NftImage,  // Use the local image file
        },
      ];

      setNfts(nftData);  // Set the fetched NFT data to the state
    } catch (error) {
      console.error('Failed to fetch NFT data:', error);
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
  
      // Ensure appIndex is valid
      if (!appIndex || appIndex <= 0) {
        throw new Error('Invalid appIndex for staking transaction');
      }
  
      // Construct the transaction
      const txn = algosdk.makeApplicationNoOpTxnFromObject({
        from: walletAddress,
        appIndex: appIndex,
        appArgs: [new Uint8Array(Buffer.from('stake'))],
        foreignAssets: [nftId],
        suggestedParams: params,
      });
  
      // Sign and send transaction
      const secretKey = algosdk.mnemonicToSecretKey(walletPrivateKey).sk;
      const signedTxn = txn.signTxn(secretKey);
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
          <NFTGallery nfts={nfts} onStake={onStake} />
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
        <div className="buy-button">
          <a href="https://app.tinyman.org/swap?asset_in=0&asset_out=1813993557&use_router=true" target="_blank" rel="noopener noreferrer" className="buy-link">
            <button className="buy-walt-button">Buy $WALT</button>
          </a>
        </div>
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
        <br />        
      </section>


      <Footer />
    </div>
  );
}

export default App;
