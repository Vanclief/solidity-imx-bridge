/** @format */

import { ethers } from "hardhat";

let provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET_URL);

let wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "");
let nonce = 0;

async function main() {
  console.log("Canceling tx from Address: " + wallet.address);
  console.log("Nonce", nonce);

  const network = await provider.getNetwork();
  let tx: any = {
    to: wallet.address,
    value: ethers.utils.parseEther("0"),
    chainId: network.chainId,
    nonce: nonce,
  };

  const estimatedGas = await provider.estimateGas(tx);
  const gasPrice = await provider.getGasPrice();

  console.log("Gas Price:", gasPrice);

  tx.gasLimit = estimatedGas;
  tx.gasPrice = gasPrice;

  const signedTX = await wallet.signTransaction(tx);
  console.log("Sending tx...");

  const sentTx = await provider.sendTransaction(signedTX);
  console.log("Sent TX", sentTx);
}

main();
