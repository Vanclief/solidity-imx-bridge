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

export async function signERC20WithdrawMessage(
  to: string,
  tokenAddress: string,
  amount: string,
  nonce: number,
  chainID: number
) {
  let wallet = new ethers.Wallet(privateKey);

  const amountBig = BigInt(amount);

  let messageHash = ethers.utils.solidityKeccak256(
    ["address", "address", "uint", "uint", "uint"],
    [to, tokenAddress, amountBig, nonce, chainID]
  );

  let messageHashBytes = ethers.utils.arrayify(messageHash);

  let flatSig = await wallet.signMessage(messageHashBytes);

  return flatSig;
}

export async function signERC721WithdrawMessage(
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

export async function deployBridgeableERC20(imxBridgeAddress: string) {
  const BridgeableERC20 = await ethers.getContractFactory("BridgeableERC20");

  let contract = await BridgeableERC20.deploy(
    "CryptoXolos",
    "CX",
    imxBridgeAddress
  );
  await contract.deployed();
  return contract;
}

export async function deployBridgeableERC721(imxBridgeAddress: string) {
  const BridgeableERC721 = await ethers.getContractFactory("BridgeableERC721");

  let contract = await BridgeableERC721.deploy(
    "CryptoXolos",
    "CX",
    imxBridgeAddress
  );
  await contract.deployed();
  return contract;
}
