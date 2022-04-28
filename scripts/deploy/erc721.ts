/** @format */

import { ethers, hardhatArguments, run } from "hardhat";
import { getBridgeAddress } from "./utils";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("====================================");
  console.log("DEPLOYING BRIDGEABLE ERC721");
  console.log("Network:", hardhatArguments.network);
  console.log("Account:", deployer.address);
  console.log("Balance:", (await deployer.getBalance()).toString());
  console.log("====================================");

  if (!hardhatArguments.network) {
    throw new Error("please pass --network");
  }

  await deploy(hardhatArguments.network);
}

async function deploy(network: string) {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.

  // We get the contract to deploy
  const tokenName = "CryptoXolos";
  const tokenSymbol = "CX";
  const bridgeAddress = getBridgeAddress(network);

  const BridgeableERC721 = await ethers.getContractFactory("BridgeableERC721");
  const contract = await BridgeableERC721.deploy(
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
