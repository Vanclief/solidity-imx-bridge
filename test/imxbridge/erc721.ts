/** @format */

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
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
  let user1: SignerWithAddress;
  const tokenAddress = "0xa4ddc0932b4e97523f8198eda7a28dac2327d365";

  before(async function () {
    imxBridge = await deployBridge();
    erc721 = await deployBridgeableNFT(imxBridge.address);
    await imxBridge.registerContract(tokenAddress, erc721.address);

    // Create a user
    const [owner] = await ethers.getSigners();
    user1 = owner;
  });

  it("Should revert withdraw if the contract is not registered", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenAddress = erc721.address;
    const tokenId = 120;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    await expect(
      imxBridge.withdrawERC721(to, tokenAddress, tokenId, signature)
    ).to.be.revertedWith("Contract is not registered");
  });

  it("Should revert withdraw if signature has the wrong to", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    await expect(
      imxBridge.withdrawERC721(
        "0x456A29a466F861C17094db14501930Ce62ab4f83",
        tokenAddress,
        tokenId,
        signature
      )
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has the wrong tokenAddress", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    await imxBridge.registerContract(
      "0x456A29a466F861C17094db14501930Ce62ab4f83",
      "0x456A29a466F861C17094db14501930Ce62ab4f83"
    );

    await expect(
      imxBridge.withdrawERC721(
        to,
        "0x456A29a466F861C17094db14501930Ce62ab4f83",
        tokenId,
        signature
      )
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has an invalid nonce", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;
    const nonce = 400;
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce
    );

    await expect(
      imxBridge.withdrawERC721(to, tokenAddress, tokenId, signature)
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has an invalid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;

    const signature =
      "0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b";

    await expect(
      imxBridge.withdrawERC721(to, tokenAddress, tokenId, signature)
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should be able to withdraw an non-minted NFT with a valid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    const tx = await imxBridge.withdrawERC721(
      to,
      tokenAddress,
      tokenId,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc721.ownerOf(tokenId)).to.equal(to);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should revert withdraw if attempting to withdraw a minted asset not in the vault", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 120;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    console.log("expected nonce", nonce.toNumber());

    await expect(
      imxBridge.withdrawERC721(to, tokenAddress, tokenId, signature)
    ).to.be.revertedWith("ERC721 is not on the vault");
  });

  it("Should be able to withdraw another NFT with a valid signature", async function () {
    const to = imxBridge.address;
    const tokenId = 1;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    const tx = await imxBridge.withdrawERC721(
      to,
      tokenAddress,
      tokenId,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc721.ownerOf(tokenId)).to.equal(to);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should be able to withdraw a deposited NFT with a valid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenId = 1;
    const nonce = await imxBridge.getNonce(to);
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce.toNumber()
    );

    const tx = await imxBridge.withdrawERC721(
      to,
      tokenAddress,
      tokenId,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc721.ownerOf(tokenId)).to.equal(to);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should ...", async function () {});
});
