/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC20Bridgeable,
  IERC20BridgeableInterface,
} from "../IERC20Bridgeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC20Bridgeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20BridgeableInterface {
    return new utils.Interface(_abi) as IERC20BridgeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20Bridgeable {
    return new Contract(address, _abi, signerOrProvider) as IERC20Bridgeable;
  }
}
