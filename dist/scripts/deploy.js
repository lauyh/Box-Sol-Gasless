"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    const Box = await hardhat_1.ethers.getContractFactory("Box");
    console.log("Deploying `Box` contract ... ...");
    const box = await hardhat_1.upgrades.deployProxy(Box, [42], { initializer: "store" });
    await box.deployed();
    console.log("Deployed to:", box.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
