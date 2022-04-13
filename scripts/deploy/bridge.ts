/** @format */

import { ethers, run } from "hardhat";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.

  // We get the contract to deploy
  const signerAddress = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";

  const IMXBridge = await ethers.getContractFactory("IMXBridge");
  const contract = await IMXBridge.deploy(signerAddress);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
  console.log("Deployed Contract Address:", contract.address);
  console.log("Verifying contract in 3 minutes...");
  await sleep(60000 * 3);
  await run("verify:verify", {
    address: contract.address,
    constructorArguments: [signerAddress],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});