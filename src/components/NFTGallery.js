import React from 'react';
import '../NFTGallery.css';  // Make sure to include this file for custom styles

function NFTGallery({ nfts, onStake }) {
  return (
    <div>
      <div className="nft-header-box"> 
        <h2>Your NFTs</h2>
      </div>
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
    </div>
  );
}

export default NFTGallery;
