/** @format */

import { expect } from "chai";
import { sign } from "crypto";
import { ethers } from "hardhat";
import { IMXBridge } from "../../typechain";

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

describe("IMXBridge", function () {
  let contract: IMXBridge;

  it("Should be deployable", async function () {
    const IMXBridge = await ethers.getContractFactory("IMXBridge");

    const RopstenChainID = 3;

    contract = await IMXBridge.deploy(RopstenChainID);
    await contract.deployed();
  });

  it("Should be able to update the signer address", async function () {
    const newAddress = "0x14791697260E4c9A71f18484C9f997B308e59325";

    await contract.setSignerAddress(newAddress);

    expect(await contract.getSignerAddress()).to.equal(newAddress);
  });

  it("Should be able to withdraw an NFT with a valid signature", async function () {
    const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
    const tokenAddress = "0xa4ddc0932b4e97523f8198eda7a28dac2327d365";
    const tokenId = 120;
    const nonce = 0;
    const signature = await signWithdrawMessage(
      to,
      tokenAddress,
      tokenId,
      nonce
    );

    await contract.withdrawNFT(to, tokenAddress, tokenId, signature);
  });

  it("Should not be able to withdraw an NFT with an invalid signature", async function () {});

  it("Should ...", async function () {});
});
