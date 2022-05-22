"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    const BoxV2 = await hardhat_1.ethers.getContractFactory("BoxV2");
    console.log("Upgrading `Box` contract ... ...");
    await hardhat_1.upgrades.upgradeProxy("0x810E51784512edA873aA1F19eeCA0896dbE4564C", BoxV2);
    console.log("`Box` proxy has been upgraded ... ...");
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
