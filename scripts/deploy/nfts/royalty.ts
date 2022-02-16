/** @format */

import { ethers, hardhatArguments, run } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Contracts with the account:", deployer.address);
  console.log("Account Balance:", (await deployer.getBalance()).toString());

  if (!hardhatArguments.network) {
    throw new Error("please pass --network");
  }
  await deploy(hardhatArguments.network);
}
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deploy(network: string) {
  const ContractFactory = await ethers.getContractFactory("RoyaltyNFT");
  const tokenName = "CutOut Fest";
  const tokenSymbol = "COF";

  const contract = await ContractFactory.deploy(tokenName, tokenSymbol);
  console.log("Deploying Contract...");
  console.log("TX Hash", contract.deployTransaction.hash);
  console.log("Gas Limit", contract.deployTransaction.gasLimit.toNumber());
  console.log("Gas Price", contract.deployTransaction.gasPrice?.toNumber());

  await contract.deployed();

  console.log("Deployed Contract Address:", contract.address);
  console.log("Verifying contract in 3 minutes...");
  await sleep(60000 * 3);
  await run("verify:verify", {
    address: contract.address,
    constructorArguments: [tokenName, tokenSymbol],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
