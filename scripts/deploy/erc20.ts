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
  const bridgeAddress = "0xE70e740104a08fB2A6519c3b95Eed65856C9B05c";

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
