/** @format */

import { expect } from "chai";
import { ethers } from "hardhat";
import { BridgeableNFT, IMXBridge } from "../../typechain";
import {
  deployBridge,
  deployBridgeableNFT,
  signWithdrawMessage,
} from "./utils";

describe("IMXBridge: ERC721", function () {
  let imxBridge: IMXBridge;
  let erc721: BridgeableNFT;

  before(async function () {
    imxBridge = await deployBridge();
    erc721 = await deployBridgeableNFT(imxBridge.address);
  });

  it("Should not be able to withdraw an NFT with an invalid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenAddress = erc721.address;
    const tokenId = 120;
    const nonce = 0;
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce
    );

    const tx = await imxBridge.withdrawERC721(
      to,
      tokenAddress,
      tokenId,
      signature
    );
    const txReceipt = await tx.wait();
  });

  it("Should be able to withdraw an non-minted NFT with a valid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenAddress = erc721.address;
    const tokenId = 120;
    const nonce = 0;
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce
    );

    const tx = await imxBridge.withdrawERC721(
      to,
      tokenAddress,
      tokenId,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc721.ownerOf(tokenId)).to.equal(to);
    expect(await imxBridge.getNonce(to)).to.equal(nonce + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should be able to withdraw a deposited NFT with a valid signature", async function () {});

  it("Should ...", async function () {});
});
