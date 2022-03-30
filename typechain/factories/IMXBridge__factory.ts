/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
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
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainID",
        type: "uint256",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainID",
        type: "uint256",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "UpdatedSignerAddress",
    type: "event",
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
      {
        internalType: "uint256",
        name: "_destinationChainID",
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
      {
        internalType: "uint256",
        name: "_destinationChainID",
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
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "isRegistered",
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
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  "0x60806040523480156200001157600080fd5b5060405162002175380380620021758339810160408190526200003491620000c9565b6001600055620000443362000077565b6001805460ff60a01b19169055600380546001600160a01b0319166001600160a01b0392909216919091179055620000f9565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215620000db578081fd5b81516001600160a01b0381168114620000f2578182fd5b9392505050565b61206c80620001096000396000f3fe60806040526004361061016a5760003560e01c8063715018a6116100cb578063c3c5a5471161007f578063d8619f5611610059578063d8619f5614610457578063ddca3f431461046a578063f2fde38b1461048057600080fd5b8063c3c5a547146103e9578063ced72f8714610422578063d7e5fbf31461043757600080fd5b80638da5cb5b116100b05780638da5cb5b14610382578063a06617cd146103a0578063a26cb270146103d657600080fd5b8063715018a6146103405780637ecebe001461035557600080fd5b806345a4276b116101225780635b7633d0116101075780635b7633d0146102d65780635c975abb146102f657806369fe0e2d1461032057600080fd5b806345a4276b146102a1578063476343ee146102c157600080fd5b80631a296e02116101535780631a296e021461020b57806321425ee01461023d5780632d0335ab1461025d57600080fd5b8063046dc1661461016f578063150b7a0214610191575b600080fd5b34801561017b57600080fd5b5061018f61018a366004611d9f565b6104a0565b005b34801561019d57600080fd5b506101d56101ac366004611e0f565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b34801561021757600080fd5b506003546001600160a01b03165b6040516001600160a01b039091168152602001610202565b34801561024957600080fd5b5061018f610258366004611ee8565b610577565b34801561026957600080fd5b50610293610278366004611d9f565b6001600160a01b031660009081526004602052604090205490565b604051908152602001610202565b3480156102ad57600080fd5b5061018f6102bc366004611ee8565b6108bf565b3480156102cd57600080fd5b5061018f610a99565b3480156102e257600080fd5b50600354610225906001600160a01b031681565b34801561030257600080fd5b50600154600160a01b900460ff166040519015158152602001610202565b34801561032c57600080fd5b5061018f61033b366004611f3c565b610b43565b34801561034c57600080fd5b5061018f610ba2565b34801561036157600080fd5b50610293610370366004611d9f565b60046020526000908152604090205481565b34801561038e57600080fd5b506001546001600160a01b0316610225565b3480156103ac57600080fd5b506102256103bb366004611d9f565b6005602052600090815260409020546001600160a01b031681565b61018f6103e4366004611e0f565b610c08565b3480156103f557600080fd5b50610225610404366004611d9f565b6001600160a01b039081166000908152600560205260409020541690565b34801561042e57600080fd5b50600254610293565b34801561044357600080fd5b5061018f610452366004611dd7565b61104f565b61018f610465366004611e0f565b6110e4565b34801561047657600080fd5b5061029360025481565b34801561048c57600080fd5b5061018f61049b366004611d9f565b6113c0565b6001546001600160a01b031633146104ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600380546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831617909255166105336114a2565b816001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001600160a01b038084166000908152600560205260409020548491166105e05760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104f6565b600260005414156106335760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f6565b6002600055600154600160a01b900460ff16156106855760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f6565b600083116106d55760405162461bcd60e51b815260206004820152601860248201527f4d757374206465706f736974206d6f7265207468616e2030000000000000000060448201526064016104f6565b6001600160a01b03848116600090815260056020526040908190205490517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529116908490829063dd62ed3e9060440160206040518083038186803b15801561074a57600080fd5b505afa15801561075e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107829190611f54565b10156107d05760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e7420455243323020616c6c6f77616e63650000000060448201526064016104f6565b6107e56001600160a01b038216333087611562565b6040517f9dc29fac000000000000000000000000000000000000000000000000000000008152306004820152602481018590526001600160a01b03821690639dc29fac90604401600060405180830381600087803b15801561084657600080fd5b505af115801561085a573d6000803e3d6000fd5b505060408051338152602081018890526001600160a01b03851691810191909152606081018690527f3ce9d16aa8c5d472311dde0fab733fdfc34e1c9ec6397917efd339ac4951836a925060800190505b60405180910390a150506001600055505050565b6001600160a01b038084166000908152600560205260409020548491166109285760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104f6565b6002600054141561097b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f6565b6002600055600154600160a01b900460ff16156109cd5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f6565b6001600160a01b0384811660009081526005602052604090819020549051632142170760e11b81523360048201523060248201526044810186905291169081906342842e0e90606401600060405180830381600087803b158015610a3057600080fd5b505af1158015610a44573d6000803e3d6000fd5b505060408051338152602081018890526001600160a01b03851691810191909152606081018690527f493ae4620895a80ae5689162f7385a9860c468dc3f9662ae8b2cdd22ecc3522c925060800190506108ab565b6001546001600160a01b03163314610af35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6000610b076001546001600160a01b031690565b6040519091506001600160a01b038216904780156108fc02916000818181858888f19350505050158015610b3f573d6000803e3d6000fd5b5050565b6001546001600160a01b03163314610b9d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b600255565b6001546001600160a01b03163314610bfc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b610c0660006115f0565b565b600254341015610c5a5760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e2066656500000000000000000060448201526064016104f6565b6001600160a01b03808416600090815260056020526040902054849116610cc35760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104f6565b60026000541415610d165760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f6565b6002600055600154600160a01b900460ff1615610d685760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f6565b6001600160a01b038481166000908152600560209081526040808320548985168452600490925282205460035491841693909291610dac911689898986468b61164f565b905080610dfb5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104f6565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810187905283906001600160a01b03821690636352211e9060240160206040518083038186803b158015610e5657600080fd5b505afa925050508015610e86575060408051601f3d908101601f19168201909252610e8391810190611dbb565b60015b610ef55760405163da1919b360e01b81526001600160a01b038a811660048301526024820189905285919082169063da1919b390604401600060405180830381600087803b158015610ed757600080fd5b505af1158015610eeb573d6000803e3d6000fd5b5050505050610fb7565b6001600160a01b0381163014610f4d5760405162461bcd60e51b815260206004820152601a60248201527f455243373231206973206e6f74206f6e20746865207661756c7400000000000060448201526064016104f6565b604051632142170760e11b81523060048201526001600160a01b038b81166024830152604482018a90528316906342842e0e90606401600060405180830381600087803b158015610f9d57600080fd5b505af1158015610fb1573d6000803e3d6000fd5b50505050505b6001600160a01b038916600090815260046020526040902054610fdb906001611fbb565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527fe2d807fc8c90ab37f9344f780c2fd13681207c17b810d5cb6c066191c05f4639906060015b60405180910390a15050600160005550505050505050565b6001546001600160a01b031633146110a95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6001600160a01b039182166000908152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b6002543410156111365760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e2066656500000000000000000060448201526064016104f6565b6001600160a01b0380841660009081526005602052604090205484911661119f5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104f6565b600260005414156111f25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104f6565b6002600055600154600160a01b900460ff16156112445760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f6565b6001600160a01b038481166000908152600560209081526040808320548985168452600490925282205460035491841693909291611288911689898986468b61164f565b9050806112d75760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104f6565b60405163da1919b360e01b81526001600160a01b0389811660048301526024820188905284919082169063da1919b390604401600060405180830381600087803b15801561132457600080fd5b505af1158015611338573d6000803e3d6000fd5b5050506001600160a01b038a1660009081526004602052604090205461136091506001611fbb565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527f38c796d42faa6e2ff4bfd87672a65992ceccc9e4cacff9aeb11eb6145da8444190606001611037565b6001546001600160a01b0316331461141a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b6001600160a01b0381166114965760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104f6565b61149f816115f0565b50565b600154600160a01b900460ff16156114ef5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104f6565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115453390565b6040516001600160a01b03909116815260200160405180910390a1565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526115ea9085906116c4565b50505050565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60408051606088811b6bffffffffffffffffffffffff199081166020808501919091529189901b166034830152604882018790526068820186905260888083018690528351808403909101815260a890920190925280519101206000906116b78982856117ae565b9998505050505050505050565b6000611719826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118339092919063ffffffff16565b8051909150156117a957808060200190518101906117379190611f1c565b6117a95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104f6565b505050565b600080611808846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050846001600160a01b031661181e828561184a565b6001600160a01b0316149150505b9392505050565b6060611842848460008561186e565b949350505050565b600080600061185985856119b6565b9150915061186681611a26565b509392505050565b6060824710156118e65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104f6565b6001600160a01b0385163b61193d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104f6565b600080866001600160a01b031685876040516119599190611f6c565b60006040518083038185875af1925050503d8060008114611996576040519150601f19603f3d011682016040523d82523d6000602084013e61199b565b606091505b50915091506119ab828286611c27565b979650505050505050565b6000808251604114156119ed5760208301516040840151606085015160001a6119e187828585611c60565b94509450505050611a1f565b825160401415611a175760208301516040840151611a0c868383611d4d565b935093505050611a1f565b506000905060025b9250929050565b6000816004811115611a4857634e487b7160e01b600052602160045260246000fd5b1415611a515750565b6001816004811115611a7357634e487b7160e01b600052602160045260246000fd5b1415611ac15760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104f6565b6002816004811115611ae357634e487b7160e01b600052602160045260246000fd5b1415611b315760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104f6565b6003816004811115611b5357634e487b7160e01b600052602160045260246000fd5b1415611bac5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104f6565b6004816004811115611bce57634e487b7160e01b600052602160045260246000fd5b141561149f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104f6565b60608315611c3657508161182c565b825115611c465782518084602001fd5b8160405162461bcd60e51b81526004016104f69190611f88565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c975750600090506003611d44565b8460ff16601b14158015611caf57508460ff16601c14155b15611cc05750600090506004611d44565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611d14573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d3d57600060019250925050611d44565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831681611d8360ff86901c601b611fbb565b9050611d9187828885611c60565b935093505050935093915050565b600060208284031215611db0578081fd5b813561182c81612021565b600060208284031215611dcc578081fd5b815161182c81612021565b60008060408385031215611de9578081fd5b8235611df481612021565b91506020830135611e0481612021565b809150509250929050565b60008060008060808587031215611e24578182fd5b8435611e2f81612021565b93506020850135611e3f81612021565b925060408501359150606085013567ffffffffffffffff80821115611e62578283fd5b818701915087601f830112611e75578283fd5b813581811115611e8757611e8761200b565b604051601f8201601f19908116603f01168101908382118183101715611eaf57611eaf61200b565b816040528281528a6020848701011115611ec7578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080600060608486031215611efc578283fd5b8335611f0781612021565b95602085013595506040909401359392505050565b600060208284031215611f2d578081fd5b8151801515811461182c578182fd5b600060208284031215611f4d578081fd5b5035919050565b600060208284031215611f65578081fd5b5051919050565b60008251611f7e818460208701611fdf565b9190910192915050565b6020815260008251806020840152611fa7816040850160208701611fdf565b601f01601f19169190910160400192915050565b60008219821115611fda57634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611ffa578181015183820152602001611fe2565b838111156115ea5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461149f57600080fdfea26469706673582212208cc6b0cb0480f78bdf2649b55a9b3336d890860652e729b6cf14fe0b1e00ad4564736f6c63430008040033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IMXBridge> {
    return super.deploy(_signerAddress, overrides || {}) as Promise<IMXBridge>;
  }
  getDeployTransaction(
    _signerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_signerAddress, overrides || {});
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
