module.exports = [
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "_daoSetter",
    "type": "address"
    },
    {
    "internalType": "contract IKyberProxy",
    "name": "_kyberProxy",
    "type": "address"
    },
    {
    "internalType": "address",
    "name": "_kyberNetwork",
    "type": "address"
    },
    {
    "internalType": "contract IERC20",
    "name": "_knc",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "_burnBlockInterval",
    "type": "uint256"
    },
    {
    "internalType": "address",
    "name": "_daoOperator",
    "type": "address"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "rewardBps",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "rebateBps",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "burnBps",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "expiryTimestamp",
    "type": "uint256"
    },
    {
    "indexed": true,
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    }
    ],
    "name": "BRRUpdated",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "contract ISanityRate",
    "name": "sanityRate",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "weiToBurn",
    "type": "uint256"
    }
    ],
    "name": "BurnConfigSet",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "EthReceived",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "address",
    "name": "platformWallet",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "platformFeeWei",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "rewardWei",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "rebateWei",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "address[]",
    "name": "rebateWallets",
    "type": "address[]"
    },
    {
    "indexed": false,
    "internalType": "uint256[]",
    "name": "rebatePercentBpsPerWallet",
    "type": "uint256[]"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "burnAmtWei",
    "type": "uint256"
    }
    ],
    "name": "FeeDistributed",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "kncTWei",
    "type": "uint256"
    },
    {
    "indexed": true,
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "KncBurned",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "contract IKyberDao",
    "name": "kyberDao",
    "type": "address"
    }
    ],
    "name": "KyberDaoAddressSet",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "address",
    "name": "kyberNetwork",
    "type": "address"
    }
    ],
    "name": "KyberNetworkUpdated",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": false,
    "internalType": "contract IKyberProxy",
    "name": "kyberProxy",
    "type": "address"
    }
    ],
    "name": "KyberProxyUpdated",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "platformWallet",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "PlatformFeePaid",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "rebateWallet",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "RebatePaid",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "address",
    "name": "staker",
    "type": "address"
    },
    {
    "indexed": true,
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    },
    {
    "indexed": true,
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
    }
    ],
    "name": "RewardPaid",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
    {
    "indexed": true,
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    },
    {
    "indexed": false,
    "internalType": "uint256",
    "name": "rewardsWei",
    "type": "uint256"
    }
    ],
    "name": "RewardsRemovedToBurn",
    "type": "event"
    },
    {
    "inputs": [],
    "name": "brrAndEpochData",
    "outputs": [
    {
    "internalType": "uint64",
    "name": "expiryTimestamp",
    "type": "uint64"
    },
    {
    "internalType": "uint32",
    "name": "epoch",
    "type": "uint32"
    },
    {
    "internalType": "uint16",
    "name": "rewardBps",
    "type": "uint16"
    },
    {
    "internalType": "uint16",
    "name": "rebateBps",
    "type": "uint16"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "burnBlockInterval",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "burnKnc",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "kncBurnAmount",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "platformWallet",
    "type": "address"
    }
    ],
    "name": "claimPlatformFee",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "amountWei",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "rebateWallet",
    "type": "address"
    }
    ],
    "name": "claimReserveRebate",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "amountWei",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "staker",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    }
    ],
    "name": "claimStakerReward",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "amountWei",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "daoOperator",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "daoSetter",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "name": "feePerPlatformWallet",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getBRR",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "rewardBps",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "rebateBps",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getLatestSanityRate",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "kncToEthSanityRate",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getSanityRateContracts",
    "outputs": [
    {
    "internalType": "contract ISanityRate[]",
    "name": "sanityRates",
    "type": "address[]"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "contract IERC20",
    "name": "token",
    "type": "address"
    },
    {
    "internalType": "address[]",
    "name": "rebateWallets",
    "type": "address[]"
    },
    {
    "internalType": "uint256[]",
    "name": "rebateBpsPerWallet",
    "type": "uint256[]"
    },
    {
    "internalType": "address",
    "name": "platformWallet",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "platformFee",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "networkFee",
    "type": "uint256"
    }
    ],
    "name": "handleFees",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "name": "hasClaimedReward",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "knc",
    "outputs": [
    {
    "internalType": "contract IERC20",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "kyberDao",
    "outputs": [
    {
    "internalType": "contract IKyberDao",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "kyberNetwork",
    "outputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "kyberProxy",
    "outputs": [
    {
    "internalType": "contract IKyberProxy",
    "name": "",
    "type": "address"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "lastBurnBlock",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    }
    ],
    "name": "makeEpochRewardBurnable",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "readBRRData",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "rewardBps",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "rebateBps",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "expiryTimestamp",
    "type": "uint256"
    },
    {
    "internalType": "uint256",
    "name": "epoch",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "",
    "type": "address"
    }
    ],
    "name": "rebatePerWallet",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "name": "rewardsPaidPerEpoch",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "name": "rewardsPerEpoch",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "contract ISanityRate",
    "name": "_sanityRate",
    "type": "address"
    },
    {
    "internalType": "uint256",
    "name": "_weiToBurn",
    "type": "uint256"
    }
    ],
    "name": "setBurnConfigParams",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "contract IKyberDao",
    "name": "_kyberDao",
    "type": "address"
    }
    ],
    "name": "setDaoContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "contract IKyberProxy",
    "name": "_newProxy",
    "type": "address"
    }
    ],
    "name": "setKyberProxy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "_kyberNetwork",
    "type": "address"
    }
    ],
    "name": "setNetworkContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "totalPayoutBalance",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "weiToBurn",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "stateMutability": "payable",
    "type": "receive"
    }
    ]