/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignatureChecker,
  SignatureCheckerInterface,
} from "../SignatureChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "getWithdrawMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061076c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635bea16401461003b578063d1024b45146100b6575b600080fd5b6100a36100493660046106bb565b6040516bffffffffffffffffffffffff19606086811b8216602084015285901b1660348201526048810183905260688101829052600090608801604051602081830303815290604052805190602001209050949350505050565b6040519081526020015b60405180910390f35b6100c96100c43660046105cb565b6100d9565b60405190151581526020016100ad565b60408051606087811b6bffffffffffffffffffffffff199081166020808501919091529188901b166034830152604882018690526068808301869052835180840390910181526088830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060a884015260c48084018290528451808503909101815260e49093019093528151910120600091908873ffffffffffffffffffffffffffffffffffffffff1661019582866101b9565b73ffffffffffffffffffffffffffffffffffffffff16149998505050505050505050565b60008060006101c885856101dd565b915091506101d58161024d565b509392505050565b6000808251604114156102145760208301516040840151606085015160001a61020887828585610456565b94509450505050610246565b82516040141561023e5760208301516040840151610233868383610550565b935093505050610246565b506000905060025b9250929050565b600081600481111561026f57634e487b7160e01b600052602160045260246000fd5b14156102785750565b600181600481111561029a57634e487b7160e01b600052602160045260246000fd5b14156102ed5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064015b60405180910390fd5b600281600481111561030f57634e487b7160e01b600052602160045260246000fd5b141561035d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102e4565b600381600481111561037f57634e487b7160e01b600052602160045260246000fd5b14156103d85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102e4565b60048160048111156103fa57634e487b7160e01b600052602160045260246000fd5b14156104535760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102e4565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561048d5750600090506003610547565b8460ff16601b141580156104a557508460ff16601c14155b156104b65750600090506004610547565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561050a573d6000803e3d6000fd5b5050604051601f19015191505073ffffffffffffffffffffffffffffffffffffffff811661054057600060019250925050610547565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83168161058660ff86901c601b6106fc565b905061059487828885610456565b935093505050935093915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105c657600080fd5b919050565b60008060008060008060c087890312156105e3578182fd5b6105ec876105a2565b95506105fa602088016105a2565b9450610608604088016105a2565b9350606087013592506080870135915060a087013567ffffffffffffffff80821115610632578283fd5b818901915089601f830112610645578283fd5b81358181111561065757610657610720565b604051601f8201601f19908116603f0116810190838211818310171561067f5761067f610720565b816040528281528c6020848701011115610697578586fd5b82602086016020830137856020848301015280955050505050509295509295509295565b600080600080608085870312156106d0578384fd5b6106d9856105a2565b93506106e7602086016105a2565b93969395505050506040820135916060013590565b6000821982111561071b57634e487b7160e01b81526011600452602481fd5b500190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212205f06757ab5594bac65ebc9b40a996f414a9d015dd98ec0b9740985cfe3dcb7b664736f6c63430008040033";

export class SignatureChecker__factory extends ContractFactory {
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
  ): Promise<SignatureChecker> {
    return super.deploy(overrides || {}) as Promise<SignatureChecker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SignatureChecker {
    return super.attach(address) as SignatureChecker;
  }
  connect(signer: Signer): SignatureChecker__factory {
    return super.connect(signer) as SignatureChecker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureCheckerInterface {
    return new utils.Interface(_abi) as SignatureCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureChecker {
    return new Contract(address, _abi, signerOrProvider) as SignatureChecker;
  }
}
