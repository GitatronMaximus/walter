import algosdk from 'algosdk';

// Algorand client settings
const baseServer = 'https://testnet-algorand.api.purestake.io/ps2';
const port = '';
const token = {
  'X-API-Key': 'YOUR_API_KEY_HERE'  // Replace with your PureStake API key
};
const client = new algosdk.Algodv2(token, baseServer, port);
const appIndex = YOUR_SMART_CONTRACT_ID;  // Replace with your smart contract ID
const nftId = 2313079846;  // The NFT ASA ID
const rewardAssetId = 1691271561;  // Reward ASA ID

// Stake NFT function
export const stakeNFT = async (walletAddress, walletPrivateKey) => {
  try {
    const params = await client.getTransactionParams().do();

    const txn = algosdk.makeApplicationNoOpTxnFromObject({
      from: walletAddress,
      appIndex: appIndex,
      appArgs: [new Uint8Array(Buffer.from('stake'))],
      foreignAssets: [nftId],
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(walletPrivateKey);  // Replace with user's private key
    const txId = await client.sendRawTransaction(signedTxn).do();
    console.log('Transaction ID:', txId);

    return 'NFT staked successfully';
  } catch (error) {
    console.error('Error staking NFT:', error);
    throw error;
  }
};

// Unstake NFT function
export const unstakeNFT = async (walletAddress, walletPrivateKey) => {
  try {
    const params = await client.getTransactionParams().do();

    const txn = algosdk.makeApplicationNoOpTxnFromObject({
      from: walletAddress,
      appIndex: appIndex,
      appArgs: [new Uint8Array(Buffer.from('unstake'))],
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(walletPrivateKey);  // Replace with user's private key
    const txId = await client.sendRawTransaction(signedTxn).do();
    console.log('Transaction ID:', txId);

    return 'NFT unstaked successfully';
  } catch (error) {
    console.error('Error unstaking NFT:', error);
    throw error;
  }
};

// Distribute rewards function
export const distributeRewards = async (walletAddress, walletPrivateKey) => {
  try {
    const params = await client.getTransactionParams().do();

    const txn = algosdk.makeApplicationNoOpTxnFromObject({
      from: 'rewards.thewide.algo',  // Rewards account
      appIndex: appIndex,
      appArgs: [new Uint8Array(Buffer.from('distribute_rewards'))],
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(walletPrivateKey);  // Replace with user's private key
    const txId = await client.sendRawTransaction(signedTxn).do();
    console.log('Transaction ID:', txId);

    return 'Rewards distributed successfully';
  } catch (error) {
    console.error('Error distributing rewards:', error);
    throw error;
  }
};
