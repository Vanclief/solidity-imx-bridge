/** @format */

import { expect } from "chai";
import { ethers } from "hardhat";
import { IMXBridge } from "../../typechain";

async function deployBridge() {
  const IMXBridge = await ethers.getContractFactory("IMXBridge");

  const signerAddress = "0x14791697260E4c9A71f18484C9f997B308e59325";

  let contract = await IMXBridge.deploy(signerAddress);
  await contract.deployed();
  return contract;
}

async function deployBridgeableERC721(imxBridgeAddress: string) {
  const BridgeableERC721 = await ethers.getContractFactory("BridgeableERC721");

  let contract = await BridgeableERC721.deploy(
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
    const erc721 = await deployBridgeableERC721(imxBridge.address);

    await imxBridge.registerContract(tokenContract, erc721.address);
  });
});
