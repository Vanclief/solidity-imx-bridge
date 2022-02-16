/** @format */

import { expect } from "chai";
import { ethers } from "hardhat";
import { IMXBridge } from "../../typechain";

describe("IMXBridge", function () {
  let contract: IMXBridge;

  it("Should be deployable", async function () {
    const NFT = await ethers.getContractFactory("IMXBridge");

    const RopstenChainID = 3;

    contract = await NFT.deploy(RopstenChainID);
    await contract.deployed();
  });
});
