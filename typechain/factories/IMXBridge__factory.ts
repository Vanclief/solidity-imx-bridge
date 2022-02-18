/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IMXBridge, IMXBridgeInterface } from "../IMXBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC20Bridged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC20Deposited",
    type: "event",
  },
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
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC721Bridged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC721Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "depositERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSignerAddress",
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
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [],
    name: "owner",
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
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bridgedTokenAddress",
        type: "address",
      },
    ],
    name: "registerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registeredContracts",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address",
      },
    ],
    name: "setSignerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signerAddress",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "withdrawERC721",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001d9a38038062001d9a833981016040819052610031916100ba565b600160005561003f33610068565b600480546001600160a01b0319166001600160a01b0393909316929092179091556003556100f2565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080604083850312156100cc578182fd5b82516001600160a01b03811681146100e2578283fd5b6020939093015192949293505050565b611c9880620001026000396000f3fe60806040526004361061015f5760003560e01c806397feb926116100c0578063d29a4bf611610074578063d8619f5611610059578063d8619f56146103ff578063ddca3f4314610412578063f2fde38b1461042857600080fd5b8063d29a4bf6146103bf578063d7e5fbf3146103df57600080fd5b8063a06617cd116100a5578063a06617cd14610361578063a26cb27014610397578063ced72f87146103aa57600080fd5b806397feb9261461032b5780639a8a05921461034b57600080fd5b80635b7633d011610117578063715018a6116100fc578063715018a6146102cb5780637ecebe00146102e05780638da5cb5b1461030d57600080fd5b80635b7633d01461028b57806369fe0e2d146102ab57600080fd5b80631a296e02116101485780631a296e02146102005780632d0335ab14610232578063476343ee1461027657600080fd5b8063046dc16614610164578063150b7a0214610186575b600080fd5b34801561017057600080fd5b5061018461017f3660046119ec565b610448565b005b34801561019257600080fd5b506101ca6101a1366004611a5c565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b34801561020c57600080fd5b506004546001600160a01b03165b6040516001600160a01b0390911681526020016101f7565b34801561023e57600080fd5b5061026861024d3660046119ec565b6001600160a01b031660009081526005602052604090205490565b6040519081526020016101f7565b34801561028257600080fd5b506101846104d6565b34801561029757600080fd5b5060045461021a906001600160a01b031681565b3480156102b757600080fd5b506101846102c6366004611b80565b610526565b3480156102d757600080fd5b50610184610585565b3480156102ec57600080fd5b506102686102fb3660046119ec565b60056020526000908152604090205481565b34801561031957600080fd5b506001546001600160a01b031661021a565b34801561033757600080fd5b50610184610346366004611b35565b6105eb565b34801561035757600080fd5b5061026860035481565b34801561036d57600080fd5b5061021a61037c3660046119ec565b6006602052600090815260409020546001600160a01b031681565b6101846103a5366004611a5c565b6107f2565b3480156103b657600080fd5b50600254610268565b3480156103cb57600080fd5b506101846103da366004611b35565b610bf3565b3480156103eb57600080fd5b506101846103fa366004611a24565b610d78565b61018461040d366004611a5c565b610e0d565b34801561041e57600080fd5b5061026860025481565b34801561043457600080fd5b506101846104433660046119ec565b6110bc565b6001546001600160a01b031633146104a75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60006104ea6001546001600160a01b031690565b6040519091506001600160a01b038216904780156108fc02916000818181858888f19350505050158015610522573d6000803e3d6000fd5b5050565b6001546001600160a01b031633146105805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049e565b600255565b6001546001600160a01b031633146105df5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049e565b6105e9600061119e565b565b6001600160a01b038083166000908152600660205260409020548391166106545760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161049e565b600260005414156106a75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049e565b6002600055816106f95760405162461bcd60e51b815260206004820152601860248201527f4d757374206465706f736974206d6f7265207468616e20300000000000000000604482015260640161049e565b6001600160a01b0380841660009081526006602052604090205416610720813330866111fd565b6040517f9dc29fac000000000000000000000000000000000000000000000000000000008152306004820152602481018490526001600160a01b03821690639dc29fac90604401600060405180830381600087803b15801561078157600080fd5b505af1158015610795573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f10210aba465589e42fd8145472c6bbce9f47079ffa6fe89f5c6e741fae43bcea925060600190505b60405180910390a1505060016000555050565b6002543410156108445760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161049e565b6001600160a01b038084166000908152600660205260409020548491166108ad5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161049e565b600260005414156109005760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049e565b600260009081556001600160a01b03808616825260066020526040822054169061093f876001600160a01b031660009081526005602052604090205490565b90506000610969600460009054906101000a90046001600160a01b0316898989866003548b61128b565b9050806109b85760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161049e565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810187905283906001600160a01b03821690636352211e9060240160206040518083038186803b158015610a1357600080fd5b505afa925050508015610a43575060408051601f3d908101601f19168201909252610a4091810190611a08565b60015b610ab25760405163da1919b360e01b81526001600160a01b038a811660048301526024820189905285919082169063da1919b390604401600060405180830381600087803b158015610a9457600080fd5b505af1158015610aa8573d6000803e3d6000fd5b5050505050610b74565b6001600160a01b0381163014610b0a5760405162461bcd60e51b815260206004820152601a60248201527f455243373231206973206e6f74206f6e20746865207661756c74000000000000604482015260640161049e565b604051632142170760e11b81523060048201526001600160a01b038b81166024830152604482018a90528316906342842e0e90606401600060405180830381600087803b158015610b5a57600080fd5b505af1158015610b6e573d6000803e3d6000fd5b50505050505b610b7f836001611300565b6001600160a01b038a81166000818152600560209081526040918290209490945580519182529281018a9052908616918101919091527fe2d807fc8c90ab37f9344f780c2fd13681207c17b810d5cb6c066191c05f4639906060015b60405180910390a15050600160005550505050505050565b6001600160a01b03808316600090815260066020526040902054839116610c5c5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161049e565b60026000541415610caf5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049e565b600260009081556001600160a01b0384811682526006602052604091829020549151632142170760e11b81523360048201523060248201526044810185905291169081906342842e0e90606401600060405180830381600087803b158015610d1657600080fd5b505af1158015610d2a573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f4be8f6117fc663fc6fbe495d6c7fd7f779b427f47d36bb2fb98523ca943eaa88925060600190506107df565b6001546001600160a01b03163314610dd25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049e565b6001600160a01b039182166000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600254341015610e5f5760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161049e565b6001600160a01b03808416600090815260066020526040902054849116610ec85760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161049e565b60026000541415610f1b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161049e565b600260009081556001600160a01b038086168252600660205260408220541690610f5a876001600160a01b031660009081526005602052604090205490565b90506000610f84600460009054906101000a90046001600160a01b0316898989866003548b61128b565b905080610fd35760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161049e565b60405163da1919b360e01b81526001600160a01b0389811660048301526024820188905284919082169063da1919b390604401600060405180830381600087803b15801561102057600080fd5b505af1158015611034573d6000803e3d6000fd5b5050506001600160a01b038a1660009081526005602052604090205461105c91506001611300565b6001600160a01b038a81166000818152600560209081526040918290209490945580519182529281018a9052908616918101919091527f38c796d42faa6e2ff4bfd87672a65992ceccc9e4cacff9aeb11eb6145da8444190606001610bdb565b6001546001600160a01b031633146111165760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161049e565b6001600160a01b0381166111925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161049e565b61119b8161119e565b50565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052611285908590611313565b50505050565b60408051606088811b6bffffffffffffffffffffffff199081166020808501919091529189901b166034830152604882018790526068820186905260888083018690528351808403909101815260a890920190925280519101206000906112f38982856113fd565b9998505050505050505050565b600061130c8284611be7565b9392505050565b6000611368826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114809092919063ffffffff16565b8051909150156113f857808060200190518101906113869190611b60565b6113f85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161049e565b505050565b600080611457846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050846001600160a01b031661146d8285611497565b6001600160a01b03161495945050505050565b606061148f84846000856114bb565b949350505050565b60008060006114a68585611603565b915091506114b381611673565b509392505050565b6060824710156115335760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161049e565b6001600160a01b0385163b61158a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161049e565b600080866001600160a01b031685876040516115a69190611b98565b60006040518083038185875af1925050503d80600081146115e3576040519150601f19603f3d011682016040523d82523d6000602084013e6115e8565b606091505b50915091506115f8828286611874565b979650505050505050565b60008082516041141561163a5760208301516040840151606085015160001a61162e878285856118ad565b9450945050505061166c565b825160401415611664576020830151604084015161165986838361199a565b93509350505061166c565b506000905060025b9250929050565b600081600481111561169557634e487b7160e01b600052602160045260246000fd5b141561169e5750565b60018160048111156116c057634e487b7160e01b600052602160045260246000fd5b141561170e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161049e565b600281600481111561173057634e487b7160e01b600052602160045260246000fd5b141561177e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161049e565b60038160048111156117a057634e487b7160e01b600052602160045260246000fd5b14156117f95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161049e565b600481600481111561181b57634e487b7160e01b600052602160045260246000fd5b141561119b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161049e565b6060831561188357508161130c565b8251156118935782518084602001fd5b8160405162461bcd60e51b815260040161049e9190611bb4565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118e45750600090506003611991565b8460ff16601b141580156118fc57508460ff16601c14155b1561190d5750600090506004611991565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611961573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661198a57600060019250925050611991565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316816119d060ff86901c601b611be7565b90506119de878288856118ad565b935093505050935093915050565b6000602082840312156119fd578081fd5b813561130c81611c4d565b600060208284031215611a19578081fd5b815161130c81611c4d565b60008060408385031215611a36578081fd5b8235611a4181611c4d565b91506020830135611a5181611c4d565b809150509250929050565b60008060008060808587031215611a71578182fd5b8435611a7c81611c4d565b93506020850135611a8c81611c4d565b925060408501359150606085013567ffffffffffffffff80821115611aaf578283fd5b818701915087601f830112611ac2578283fd5b813581811115611ad457611ad4611c37565b604051601f8201601f19908116603f01168101908382118183101715611afc57611afc611c37565b816040528281528a6020848701011115611b14578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611b47578182fd5b8235611b5281611c4d565b946020939093013593505050565b600060208284031215611b71578081fd5b8151801515811461130c578182fd5b600060208284031215611b91578081fd5b5035919050565b60008251611baa818460208701611c0b565b9190910192915050565b6020815260008251806020840152611bd3816040850160208701611c0b565b601f01601f19169190910160400192915050565b60008219821115611c0657634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611c26578181015183820152602001611c0e565b838111156112855750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461119b57600080fdfea2646970667358221220986d7c5733113628c79f75be2dacf25a4cd2d4a09c90da717638e1b5ab42056764736f6c63430008040033";

export class IMXBridge__factory extends ContractFactory {
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
    _signerAddress: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IMXBridge> {
    return super.deploy(
      _signerAddress,
      _chainId,
      overrides || {}
    ) as Promise<IMXBridge>;
  }
  getDeployTransaction(
    _signerAddress: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _signerAddress,
      _chainId,
      overrides || {}
    );
  }
  attach(address: string): IMXBridge {
    return super.attach(address) as IMXBridge;
  }
  connect(signer: Signer): IMXBridge__factory {
    return super.connect(signer) as IMXBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IMXBridgeInterface {
    return new utils.Interface(_abi) as IMXBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMXBridge {
    return new Contract(address, _abi, signerOrProvider) as IMXBridge;
  }
}
