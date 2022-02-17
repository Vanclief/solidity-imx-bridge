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

  const RopstenChainID = 3;

  let contract = await IMXBridge.deploy(RopstenChainID);
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

describe("IMXBridge", function () {
  let imxBridge: IMXBridge;
  let erc721: BridgeableNFT;

  before(async function () {
    imxBridge = await deployBridge();
    erc721 = await deployBridgeableNFT(imxBridge.address);
  });

  it("Should be able to update the signer address", async function () {
    const newAddress = "0x14791697260E4c9A71f18484C9f997B308e59325";

    await imxBridge.setSignerAddress(newAddress);

    expect(await imxBridge.getSignerAddress()).to.equal(newAddress);
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

  // it("Should be able to withdraw a deposited NFT with a valid signature", async function () {
  //   const to = "0xc0324Dca5073Df1aaf26730471718c500d31cA01";
  //   const tokenAddress = nftContract.address;
  //   const tokenId = 120;
  //   const nonce = 0;
  //   const signature = await signWithdrawMessage(
  //     to,
  //     tokenAddress,
  //     tokenId,
  //     nonce
  //   );

  //   await imxBridge.withdrawNFT(to, tokenAddress, tokenId, signature);
  // });

  it("Should not be able to withdraw an NFT with an invalid signature", async function () {});

  it("Should ...", async function () {});
});
