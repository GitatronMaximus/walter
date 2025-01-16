import { useState, useEffect } from "react";
import { PeraWalletConnect } from "@perawallet/connect";

const peraWallet = new PeraWalletConnect();

export default function useWallet(client) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [stakingStatus, setStakingStatus] = useState(null);
  const [rewardsAmount, setRewardsAmount] = useState(0);

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Failed to connect Pera Wallet:", error);
    }
  };

  const disconnectWallet = async () => {
    await peraWallet.disconnect();
    setWalletAddress(null);
  };

  const fetchRewards = async () => {
    if (!walletAddress) return;
    try {
      const response = await client.lookupAccountAssets(walletAddress).do();
      const reward = response.assets.find(asset => asset["asset-id"] === 1691271561)?.amount || 0;
      setRewardsAmount(reward);
    } catch (error) {
      console.error("Failed to fetch rewards:", error);
    }
  };

  useEffect(() => {
    if (walletAddress) fetchRewards();
  }, [walletAddress]);

  return { walletAddress, connectWallet, disconnectWallet, stakingStatus, rewardsAmount };
}
