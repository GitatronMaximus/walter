import React from 'react';

function Rewards({ rewards }) {
  return (
    <div>
      <h2>Your Staking Rewards</h2>
      <p>{rewards} ALGO</p>
    </div>
  );
}

export default Rewards;
