/** @format */

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BridgeableERC20, IMXBridge } from "../../typechain";
import {
  deployBridge,
  deployBridgeableERC20,
  signERC20WithdrawMessage,
} from "./utils";

describe("IMXBridge: ERC20", function () {
  let imxBridge: IMXBridge;
  let erc20: BridgeableERC20;
  let user1: SignerWithAddress;
  const tokenAddress = "0xa4ddc0932b4e97523f8198eda7a28dac2327d365";
  const hardhatChainId = 31337;

  before(async function () {
    imxBridge = await deployBridge();
    erc20 = await deployBridgeableERC20(imxBridge.address);
    await imxBridge.registerContract(tokenAddress, erc20.address);

    // Create a user
    const [owner, addr1] = await ethers.getSigners();
    user1 = addr1;
  });

  it("Should revert withdraw if the contract is not registered", async function () {
    const to = user1.address;
    const tokenAddress = erc20.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    await expect(
      imxBridge.withdrawERC20(to, tokenAddress, amount, signature)
    ).to.be.revertedWith("Contract is not registered");
  });

  it("Should revert withdraw if signature has the wrong to", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    await expect(
      imxBridge.withdrawERC20(
        "0x456A29a466F861C17094db14501930Ce62ab4f83",
        tokenAddress,
        amount,
        signature
      )
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has the wrong tokenAddress", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    await imxBridge.registerContract(
      "0x456A29a466F861C17094db14501930Ce62ab4f83",
      "0x456A29a466F861C17094db14501930Ce62ab4f83"
    );

    await expect(
      imxBridge.withdrawERC20(
        to,
        "0x456A29a466F861C17094db14501930Ce62ab4f83",
        amount,
        signature
      )
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has an invalid nonce", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = 400;
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce,
      hardhatChainId
    );

    await expect(
      imxBridge.withdrawERC20(to, tokenAddress, amount, signature)
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature has an invalid chainID", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = 400;
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce,
      2
    );

    await expect(
      imxBridge.withdrawERC20(to, tokenAddress, amount, signature)
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should revert withdraw if signature is invalid ", async function () {
    const to = user1.address;
    const amount = 100;

    const signature =
      "0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b";

    await expect(
      imxBridge.withdrawERC20(to, tokenAddress, amount, signature)
    ).to.be.revertedWith("Invalid signature");
  });

  it("Should be able to withdraw an ERC20 with a valid signature", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    const tx = await imxBridge.withdrawERC20(
      to,
      tokenAddress,
      amount,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc20.balanceOf(to)).to.equal(amount);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should be able to withdraw to antother address with a valid signature", async function () {
    const to = imxBridge.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    const tx = await imxBridge.withdrawERC20(
      to,
      tokenAddress,
      amount,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc20.balanceOf(to)).to.equal(amount);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should be able to withdraw a deposited ERC20 with a valid signature", async function () {
    const to = user1.address;
    const amount = "100";
    const nonce = await imxBridge.getNonce(to);
    const signature = await signERC20WithdrawMessage(
      to,
      tokenAddress,
      amount,
      nonce.toNumber(),
      hardhatChainId
    );

    const tx = await imxBridge.withdrawERC20(
      to,
      tokenAddress,
      amount,
      signature
    );
    const txReceipt = await tx.wait();

    expect(await erc20.balanceOf(to)).to.equal(100 * 2);
    expect(await imxBridge.getNonce(to)).to.equal(nonce.toNumber() + 1);
    expect(txReceipt.status).to.equal(1);

    if (txReceipt.events) {
      expect(txReceipt.events.length).to.not.equal(0);
    }
  });

  it("Should be able to deposit an ERC20", async function () {
    const amount = 100;

    const tx1 = await erc20.connect(user1).approve(imxBridge.address, amount);
    const txReceipt1 = await tx1.wait();

    expect(txReceipt1.status).to.equal(1);

    const tx2 = await imxBridge
      .connect(user1)
      .depositERC20(tokenAddress, amount, 1);
    const txReceipt2 = await tx2.wait();

    expect(txReceipt2.status).to.equal(1);

    if (txReceipt2.events) {
      expect(txReceipt2.events.length).to.not.equal(0);
    }
  });
});
