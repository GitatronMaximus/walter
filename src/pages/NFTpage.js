import React, { useState, useEffect } from 'react';
import NFTGallery from '../components/NFTGallery';
import VideoBackground from "../components/VideoBackground";
import './NFTpage.css'; 
import "../App.css";

function NFTPage() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Replace with your logic to fetch NFTs
    const fetchedNFTs = [
      {
        id: 1,
        name: 'Walter The Wise NFT #1 (coming soon)',
        image: '/Assets/nft-image.png',
      },
      {
        id: 2,
        name: 'Walter The Wise NFT #2 (coming soon)',
        image: '/Assets/nft-image-2.png',
      },
    ];
    setNfts(fetchedNFTs);
  }, []);

  return (
    <div className="nft-page-header">
    <VideoBackground />
      <h1>Walter's N F T Collection</h1>
      <NFTGallery nfts={nfts} />
    </div>
  );
}

export default NFTPage;
