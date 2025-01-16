import React from "react";

function BuyLinks() {
  return (
    <div className="buy-button">
      {/* <a href="https://app.tinyman.org/swap?asset_in=0&asset_out=1813993557&use_router=true" target="_blank" rel="noopener noreferrer" className="buy-link">
        <button className="buy-walt-button">Buy $WALT</button>
      </a>
      <br /><br />
      <a href="https://app.tinyman.org/pool/VCGXXV4XP23YTD363NPOCE3LU5OE6RYXDOPIYVPBU5ALFJQARPIEBBLWB4/add-liquidity" target="_blank" rel="noopener noreferrer" className="segment-link">
        <button className="buy-walt-button">Get WALT-ALGO LP</button>
      </a> */}
      <br /><br />
      <a href="https://app.cometa.farm" target="_blank" rel="noopener noreferrer" className="segment-link">
        <button className="buy-walt-button">Stake WALT-ALGO LP for APY</button>
      </a>
      <br /><br />
      <a href="https://app.nf.domains/name/thewise.algo?view=segments" target="_blank" rel="noopener noreferrer" className="segment-link">
        <button className="buy-walt-button">GET A SEGMENT</button>
      </a>
    </div>
  );
}

export default BuyLinks;
