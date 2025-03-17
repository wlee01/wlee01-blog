import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./Wallet.css";

interface WalletType {
    address: string;
    privateKey: string;
}

//  Berachain testnet RPC endpoint (replace with a reliable one)
const web3 = new Web3("https://bepolia.rpc.berachain.com/");

const Wallet = () => {
    const [wallet, setWallet] = useState<WalletType | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [txHash, setTxHash] = useState<string | null>(null);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [assets, setAssets] = useState<any[]>([]);
    const [stakingInfo, setStakingInfo] = useState<any | null>(null);
    const [selectedTab, setSelectedTab] = useState("assets"); // assets, staking
    const [selectedAsset, setSelectedAsset] = useState<'tokens' | 'nfts'>('tokens');
    const [copySuccess, setCopySuccess] = useState<boolean>(false);  // State for wallet address copy

    const [tokenBalances, setTokenBalances] = useState<{ [tokenAddress: string]: string }>({});  // State for token balances

    const [networkId, setNetworkId] = useState<number | null>(null); // State for network ID

    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        setWallet(newWallet);
        setBalance(null);
        setTxHash(null);
        setTransactions([]);
    };

    const getBalance = async () => {
        if (!wallet) return;
        try {
            const balanceWei = await web3.eth.getBalance(wallet.address);
            setBalance(web3.utils.fromWei(balanceWei, "ether"));
        } catch (error) {
            console.error("Error getting balance:", error);
            setBalance(null);
        }
    };

    const fetchTransactions = () => {
        if (!wallet) return;
        const mockTransactions = [
            { type: "Sent", amount: "0.1 ETH", to: "0x1234...abcd" },
            { type: "Received", amount: "0.5 ETH", from: "0xabcd...5678" },
        ];
        setTransactions(mockTransactions);
    };

    const sendTransaction = async () => {
        if (!wallet || !recipient || !amount) return;
        try {
            const value = web3.utils.toWei(amount, 'ether');

            const gasPrice = await web3.eth.getGasPrice();

            // Fetch the nonce for the account to prevent transaction replay
            const nonce = await web3.eth.getTransactionCount(wallet.address, 'pending');

            const tx = {
                from: wallet.address,
                to: recipient,
                value: value,
                gas: 21000,
                gasPrice: gasPrice,  // Use fetched gas price
                nonce: nonce         // Use fetched nonce
            };

            const signedTx = await web3.eth.accounts.signTransaction(
                tx,
                wallet.privateKey
            );

            const sentTx = await web3.eth.sendSignedTransaction(
                signedTx.rawTransaction!
            );

            // Corrected code:
            const transactionHash = typeof sentTx.transactionHash === 'string'
                ? sentTx.transactionHash
                : web3.utils.bytesToHex(sentTx.transactionHash);

            setTxHash(transactionHash);
            getBalance();
        } catch (error: any) {
            console.error('Transaction Failed:', error.message);
            // Handle different types of errors
            if (error.message.includes("Known transaction")) {
                console.warn("Transaction might be already mined or submitted.");
            }
            // Consider more specific error handling, like insufficient funds or invalid address.
        }
    };

    const copyPrivateKey = async () => {
        if (wallet) {
            try {
                await navigator.clipboard.writeText(wallet.privateKey);
            } catch (err) {
                console.error("Copy failed:", err);
            }
        }
    };

    const copyWalletAddress = async () => {
        if (wallet) {
            try {
                await navigator.clipboard.writeText(wallet.address);
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            } catch (err) {
                console.error("Copy failed:", err);
                setCopySuccess(false);
            }
        }
    };

    const fetchAssets = async () => {
        const bitcoinImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"; // Default Bitcoin image
        const dummyAssets = [
            { id: 1, name: 'Token A', amount: 100, address: '0xYourTokenAAddress' }, // Replace
            { id: 2, name: 'Bitcoin NFT', imageUrl: bitcoinImageUrl, address: '0xYourNFTAddress' }, // Replace
            { id: 3, name: 'Token B', amount: 250, address: '0xYourTokenBAddress' }, // Replace
            { id: 4, name: 'Another Bitcoin NFT', imageUrl: bitcoinImageUrl, address: '0xYourAnotherNFTAddress' },  //Replace
        ];
        setAssets(dummyAssets);
    };

    const fetchStakingInfo = async () => {
        const dummyStakingInfo = { stakedAmount: 500, rewards: 50 };
        setStakingInfo(dummyStakingInfo);
    };

    // Function to fetch token balance using contract address
    const getTokenBalance = async (tokenAddress: string) => {
        if (!wallet) return '0';

        // Standard ERC-20 ABI
        const tokenABI = [
            {
                "constant": true,
                "inputs": [{ "name": "_owner", "type": "address" }],
                "name": "balanceOf",
                "outputs": [{ "name": "balance", "type": "uint256" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [{ "name": "", "type": "uint8" }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];

        try {
            const contract = new web3.eth.Contract(tokenABI as any, tokenAddress);
            const balanceWei = await contract.methods.balanceOf(wallet.address).call();
            const decimals = await contract.methods.decimals().call();

            // Use BigInt for calculations to handle large numbers correctly
            const balance = Number(balanceWei) / (10 ** Number(decimals)); // Adjust for decimals
            return balance.toString();
        } catch (error) {
            console.error(`Error fetching balance for token ${tokenAddress}:`, error);
            return '0';
        }
    };

    // Fetch network ID on component mount
    useEffect(() => {
        const getNetworkId = async () => {
            try {
                const id = await web3.eth.net.getId();
                setNetworkId(Number(id)); // Convert id to number
                console.log("Connected to network:", id);
            } catch (error) {
                console.error("Error getting network ID:", error);
                setNetworkId(null);
            }
        };
        if (web3) {
            getNetworkId();
        }
    }, [web3]);

    useEffect(() => {
        if (wallet) {
            getBalance();
            fetchTransactions();
            fetchAssets();
            fetchStakingInfo();
        }
    }, [wallet]);

    // Effect to fetch token balances when assets are loaded
    useEffect(() => {
        const loadTokenBalances = async () => {
            if (wallet && assets) {
                const tokenBalancesPromises = assets.filter(asset => !asset.imageUrl && asset.address)
                    .map(async (asset) => {
                        const balance = await getTokenBalance(asset.address);
                        return { [asset.address]: balance };
                    });

                const balances = await Promise.all(tokenBalancesPromises);
                const balancesObject = Object.assign({}, ...balances); // Merge balances
                setTokenBalances(balancesObject);
            }
        };
        loadTokenBalances();
    }, [assets, wallet]);

    const renderAssets = () => (
        <div>
            <div className="asset-selection">
                <button
                    className={`tab-button ${selectedAsset === 'tokens' ? 'active' : ''}`}
                    onClick={() => setSelectedAsset('tokens')}
                >
                    Tokens
                </button>
                <button
                    className={`tab-button ${selectedAsset === 'nfts' ? 'active' : ''}`}
                    onClick={() => setSelectedAsset('nfts')}
                >
                    NFTs
                </button>
            </div>

            <div className="asset-display">
                {selectedAsset === 'tokens' && (
                    <div>
                        <h3>Tokens</h3>
                        <ul className="asset-list">
                            {assets.filter(asset => !asset.imageUrl && asset.address).map(asset => (
                                <li key={asset.id}>
                                    {asset.name}: {tokenBalances[asset.address] || '0'}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {selectedAsset === 'nfts' && (
                    <div>
                        <h3>NFTs</h3>
                        <div className="nft-grid">
                            {assets.filter(asset => asset.imageUrl).map(asset => (
                                <div key={asset.id} className="nft-item">
                                    <img src={asset.imageUrl} alt={asset.name} />
                                    <p>{asset.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    const renderStaking = () => (
        stakingInfo && (
            <div className="staking-info">
                <h3>Staking</h3>
                <p className="staked-amount">Staked Amount: {stakingInfo.stakedAmount}</p>
                <p className="rewards">Rewards: {stakingInfo.rewards}</p>
            </div>
        )
    );

    return (
        <div className="wallet-container">
            <h1 className="wallet-title">🔥 PRIME WALLET 🔥</h1>

            {networkId !== 80069 && (
                <p className="network-warning">
                    ⚠️ Connected to the wrong network! Please connect to Berachain Artio Testnet. ⚠️
                </p>
            )}

            {!wallet ? (
                <button onClick={createWallet} className="create-wallet-btn">
                    Create New Wallet
                </button>
            ) : (
                <div className="wallet-info">
                    <div className="tab-buttons">
                        <button
                            className={`tab-button ${selectedTab === 'assets' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('assets')}
                        >
                            Assets
                        </button>
                        <button
                            className={`tab-button ${selectedTab === 'staking' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('staking')}
                        >
                            Staking
                        </button>
                    </div>

                    <div className="wallet-address-container">
                        <p className="wallet-address">
                            <strong>Wallet Address:</strong> <span>{wallet.address}</span>
                        </p>
                        <button onClick={copyWalletAddress} className="copy-address-btn">
                            Copy Address
                        </button>
                        {copySuccess && <span className="copy-success">✔ Copied!</span>}
                    </div>

                    <button onClick={getBalance} className="balance-btn">
                        Get Balance
                    </button>
                    {balance !== null && <p className="wallet-balance">Balance: {balance} ETH</p>}

                    <div className="send-container">
                        <h3>Send Transaction</h3>
                        <input
                            type="text"
                            placeholder="Recipient Address"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="input-field"
                        />
                        <input
                            type="text"
                            placeholder="Amount (ETH)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="input-field"
                        />
                        <button onClick={sendTransaction} className="send-btn">
                            Send
                        </button>
                    </div>

                    <div className="transaction-history">
                        <h3>Recent Transactions</h3>
                        {transactions.map((tx, index) => (
                            <p key={index} className={`tx ${tx.type.toLowerCase()}`}>
                                {tx.type}: {tx.amount} {tx.to ? `to ${tx.to}` : `from ${tx.from}`}
                            </p>
                        ))}
                    </div>

                    {selectedTab === 'assets' ? renderAssets() : renderStaking()}
                </div>
            )}
        </div>
    );
};

export default Wallet;
