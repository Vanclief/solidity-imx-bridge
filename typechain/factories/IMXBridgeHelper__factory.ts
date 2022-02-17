/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IMXBridgeHelper,
  IMXBridgeHelperInterface,
} from "../IMXBridgeHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000556101ff806100256000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61006761003e3660046100c5565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100c057600080fd5b919050565b600080600080608085870312156100da578384fd5b6100e38561009c565b93506100f16020860161009c565b925060408501359150606085013567ffffffffffffffff80821115610114578283fd5b818701915087601f830112610127578283fd5b8135818111156101395761013961019a565b604051601f8201601f19908116603f011681019083821181831017156101615761016161019a565b816040528281528a6020848701011115610179578586fd5b82602086016020830137918201602001949094529598949750929550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220367d9d11f54a57536d28a1e5ec110fdf2f20f77712cfe36a423cdc2ab2cec6d664736f6c63430008040033";

export class IMXBridgeHelper__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IMXBridgeHelper> {
    return super.deploy(overrides || {}) as Promise<IMXBridgeHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IMXBridgeHelper {
    return super.attach(address) as IMXBridgeHelper;
  }
  connect(signer: Signer): IMXBridgeHelper__factory {
    return super.connect(signer) as IMXBridgeHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IMXBridgeHelperInterface {
    return new utils.Interface(_abi) as IMXBridgeHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMXBridgeHelper {
    return new Contract(address, _abi, signerOrProvider) as IMXBridgeHelper;
  }
}
