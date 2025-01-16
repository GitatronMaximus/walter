import React from "react";
import Button from "@mui/material/Button";

function WalletActions({ walletAddress, connectPeraWallet, disconnectWallet, formatWalletAddress }) {
  return (
    <div>
      {!walletAddress ? (
        <Button variant="contained" onClick={connectPeraWallet}>
          Connect Pera Wallet
        </Button>
      ) : (
        <div>
          <p>Connected Wallet: {formatWalletAddress(walletAddress)}</p>
          <Button variant="contained" onClick={disconnectWallet}>
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
}

export default WalletActions;
