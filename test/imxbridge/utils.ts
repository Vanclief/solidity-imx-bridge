/** @format */

import { ethers } from "hardhat";

const privateKey =
  "0x0123456789012345678901234567890123456789012345678901234567890123";

export async function deployBridge() {
  const IMXBridge = await ethers.getContractFactory("IMXBridge");

  const signerAddress = "0x14791697260E4c9A71f18484C9f997B308e59325";

  let contract = await IMXBridge.deploy(signerAddress);
  await contract.deployed();
  return contract;
}

export async function signWithdrawMessage(
  to: string,
  tokenAddress: string,
  tokenId: number,
  nonce: number,
  chainID: number
) {
  let wallet = new ethers.Wallet(privateKey);

  let messageHash = ethers.utils.solidityKeccak256(
    ["address", "address", "uint", "uint", "uint"],
    [to, tokenAddress, tokenId, nonce, chainID]
  );

  let messageHashBytes = ethers.utils.arrayify(messageHash);

  let flatSig = await wallet.signMessage(messageHashBytes);

  return flatSig;
}

export async function deployBridgeableNFT(imxBridgeAddress: string) {
  const BridgeableNFT = await ethers.getContractFactory("BridgeableNFT");

  let contract = await BridgeableNFT.deploy(
    "CryptoXolos",
    "CX",
    imxBridgeAddress
  );
  await contract.deployed();
  return contract;
}
