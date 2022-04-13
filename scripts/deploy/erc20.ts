/** @format */

import { ethers, run } from "hardhat";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.

  // We get the contract to deploy
  const tokenName = "Faucet Token";
  const tokenSymbol = "FCT";
  const bridgeAddress = "0xD1Aa888D5aE903F699f4067D6C4195Ea2B7d1a70";

  const BridgeableERC20 = await ethers.getContractFactory("BridgeableERC20");
  const contract = await BridgeableERC20.deploy(
    tokenName,
    tokenSymbol,
    bridgeAddress
  );

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
  console.log("Deployed Contract Address:", contract.address);
  console.log("Verifying contract in 3 minutes...");
  await sleep(60000 * 3);
  await run("verify:verify", {
    address: contract.address,
    constructorArguments: [tokenName, tokenSymbol, bridgeAddress],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
