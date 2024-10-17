import { PeraWalletConnect } from '@perawallet/connect';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

// Service to manage wallet connections
class WalletConnectService {
  constructor() {
    this.peraWallet = new PeraWalletConnect();
    this.walletConnect = null;
    this.connector = null;
  }

  // Detect if the user is on mobile
  isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  // Connect to Pera Wallet
  async connectPeraWallet() {
    try {
      const accounts = await this.peraWallet.connect();
      return accounts[0];
    } catch (error) {
      console.error('Failed to connect to Pera Wallet:', error);
      throw error;
    }
  }

  // Connect to Defly Wallet using WalletConnect
  async connectDeflyWallet() {
    try {
      this.walletConnect = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org',
      });

      if (!this.walletConnect.connected) {
        if (this.isMobile()) {
          const uri = await this.walletConnect.createSession();
          const deepLink = `defly://wc?uri=${encodeURIComponent(this.walletConnect.uri)}`;
          window.location.href = deepLink;
        } else {
          this.walletConnect.createSession().then(() => {
            const uri = this.walletConnect.uri;
            QRCodeModal.open(uri);
          });
        }
      }

      return new Promise((resolve, reject) => {
        this.walletConnect.on('connect', (error, payload) => {
          if (error) {
            console.error('Error connecting to Defly Wallet:', error);
            reject(error);
          } else {
            const { accounts } = payload.params[0];
            QRCodeModal.close();
            resolve(accounts[0]);
          }
        });

        this.walletConnect.on('disconnect', () => {
          console.log('Disconnected from Defly Wallet');
        });
      });
    } catch (error) {
      console.error('Failed to connect to Defly Wallet:', error);
      throw error;
    }
  }

  // Disconnect the wallet
  async disconnectWallet() {
    if (this.walletConnect) {
      this.walletConnect.killSession();
    }
    if (this.peraWallet) {
      await this.peraWallet.disconnect();
    }
  }
}

const walletConnectService = new WalletConnectService();
export default walletConnectService;
