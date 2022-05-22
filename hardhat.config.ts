import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

const {
  ALCHEMY_API_KEY,
  ETHERSCAN_API,
  POLYGONSCAN_API,
  REPORT_GAS,
  TEST1_PK,
  DEPLOY_PK,
} = process.env;

const config: HardhatUserConfig = {
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
      accounts: [DEPLOY_PK!],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [DEPLOY_PK!],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [TEST1_PK!],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [TEST1_PK!],
    },
    arbrinkeby: {
      url: `https://arb-rinkeby.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [TEST1_PK!],
    },
    optkovan: {
      url: `https://opt-kovan.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [TEST1_PK!],
    },
    fuji: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [TEST1_PK!],
    },
    fantomtest: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      gasPrice: 350000000000,
      accounts: [TEST1_PK!],
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

export default config;
