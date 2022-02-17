/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMXBridgeableERC721,
  IMXBridgeableERC721Interface,
} from "../IMXBridgeableERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ERC721Bridged",
    type: "event",
  },
  {
    inputs: [],
    name: "imxBridgeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "mintFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMXBridgeableERC721__factory {
  static readonly abi = _abi;
  static createInterface(): IMXBridgeableERC721Interface {
    return new utils.Interface(_abi) as IMXBridgeableERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMXBridgeableERC721 {
    return new Contract(address, _abi, signerOrProvider) as IMXBridgeableERC721;
  }
}
