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
  const IMXNFT = await ethers.getContractFactory("CryptoXolos");
  const imx_address = getIMXAddress(network);
  const tokenName = "CryptoXolos";
  const tokenSymbol = "CX";

  const contract = await IMXNFT.deploy(tokenName, tokenSymbol, imx_address);
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
    constructorArguments: [tokenName, tokenSymbol, imx_address],
  });
}

function getIMXAddress(network: string) {
  switch (network) {
    case "dev":
      return "0xEce6b7086134AE8894Af10Ae540473dF619b5469";
    case "ropsten":
      return "0x4527be8f31e2ebfbef4fcaddb5a17447b27d2aef";
    case "mainnet":
      return "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9";
  }
  throw Error("Invalid network selected");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
