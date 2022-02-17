/** @format */

import { expect } from "chai";
import { ethers } from "hardhat";
import { BridgeableNFT, IMXBridge } from "../../typechain";

// A random testing private key
const privateKey =
  "0x0123456789012345678901234567890123456789012345678901234567890123";

async function signWithdrawMessage(
  to: string,
  tokenAddress: string,
  tokenId: number,
  nonce: number
) {
  let wallet = new ethers.Wallet(privateKey);

  let messageHash = ethers.utils.solidityKeccak256(
    ["address", "address", "uint", "uint"],
    [to, tokenAddress, tokenId, nonce]
  );

  let messageHashBytes = ethers.utils.arrayify(messageHash);

  let flatSig = await wallet.signMessage(messageHashBytes);

  return flatSig;
}

async function deployBridge() {
  const IMXBridge = await ethers.getContractFactory("IMXBridge");

  const signerAddress = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
  const RopstenChainID = 3;

  let contract = await IMXBridge.deploy(signerAddress, RopstenChainID);
  await contract.deployed();
  return contract;
}

async function deployBridgeableNFT(imxBridgeAddress: string) {
  const BridgeableNFT = await ethers.getContractFactory("BridgeableNFT");

  let contract = await BridgeableNFT.deploy(
    "CryptoXolos",
    "CX",
    imxBridgeAddress
  );
  await contract.deployed();
  return contract;
}

describe("IMXBridge: Admin functions", function () {
  let imxBridge: IMXBridge;

  before(async function () {
    imxBridge = await deployBridge();
  });

  it("Should be able to update the signer address", async function () {
    const newAddress = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";

    await imxBridge.setSignerAddress(newAddress);

    expect(await imxBridge.getSignerAddress()).to.equal(newAddress);
  });

  it("Should be able to set the Fee", async function () {
    const newFee = ethers.utils.parseEther("0.1");

    await imxBridge.setFee(newFee);
    expect(await imxBridge.getFee()).to.equal(newFee);
  });

  it("Should be able to register a contract", async function () {
    const tokenContract = "0xa4ddc0932b4e97523f8198eda7a28dac2327d365";
    const erc721 = await deployBridgeableNFT(imxBridge.address);

    await imxBridge.registerContract(tokenContract, erc721.address);
  });
});