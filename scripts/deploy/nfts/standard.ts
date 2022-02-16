/** @format */

import { ethers, run } from "hardhat";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const tokenName = "HechoEnOaxaca";
  const tokenSymbol = "OAX";

  const NFT = await ethers.getContractFactory("NFT");
  const contract = await NFT.deploy(tokenName, tokenSymbol);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);

  console.log("Verifying contract in 3 minutes...");
  await sleep(60000 * 3);
  await run("verify:verify", {
    address: contract.address,
    constructorArguments: [tokenName, tokenSymbol],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
