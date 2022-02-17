/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMintable, IMintableInterface } from "../IMintable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "blueprint",
        type: "bytes",
      },
    ],
    name: "mintFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMintable__factory {
  static readonly abi = _abi;
  static createInterface(): IMintableInterface {
    return new utils.Interface(_abi) as IMintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMintable {
    return new Contract(address, _abi, signerOrProvider) as IMintable;
  }
}