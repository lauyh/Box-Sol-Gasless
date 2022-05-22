import { ethers, upgrades } from "hardhat";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading `Box` contract ... ...");
  await upgrades.upgradeProxy(
    "0x810E51784512edA873aA1F19eeCA0896dbE4564C",
    BoxV2
  );
  console.log("`Box` proxy has been upgraded ... ...");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});