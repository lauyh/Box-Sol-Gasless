import { ethers, upgrades } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying `Box` contract ... ...");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });

  await box.deployed();

  console.log("Deployed to:", box.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
