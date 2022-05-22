"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@openzeppelin/hardhat-upgrades");
dotenv.config();
const { ALCHEMY_API_KEY, ETHERSCAN_API, POLYGONSCAN_API, REPORT_GAS, TEST1_PK, DEPLOY_PK, } = process.env;
const config = {
    solidity: {
        version: "0.8.13",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        mainnet: {
            url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [DEPLOY_PK],
        },
        polygon: {
            url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [DEPLOY_PK],
        },
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
            accounts: [TEST1_PK],
        },
        polygonMumbai: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [TEST1_PK],
        },
        arbrinkeby: {
            url: `https://arb-rinkeby.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [TEST1_PK],
        },
        optkovan: {
            url: `https://opt-kovan.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [TEST1_PK],
        },
        fuji: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [TEST1_PK],
        },
        fantomtest: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            gasPrice: 350000000000,
            accounts: [TEST1_PK],
        },
    },
    etherscan: {
        apiKey: {
            //ethereum
            mainnet: ETHERSCAN_API,
            rinkeby: ETHERSCAN_API,
            //polygon
            polygon: POLYGONSCAN_API,
            polygonMumbai: POLYGONSCAN_API,
        },
    },
    mocha: {
        timeout: 500000,
    },
    gasReporter: {
        enabled: REPORT_GAS !== undefined,
        currency: "USD",
    },
};
exports.default = config;
