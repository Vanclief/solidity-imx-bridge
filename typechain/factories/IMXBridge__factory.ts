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
  "0x60806040523480156200001157600080fd5b5060405162001db338038062001db38339810160408190526200003491620000bc565b600160005562000044336200006a565b600380546001600160a01b0319166001600160a01b0392909216919091179055620000ec565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215620000ce578081fd5b81516001600160a01b0381168114620000e5578182fd5b9392505050565b611cb780620000fc6000396000f3fe6080604052600436106101445760003560e01c80638da5cb5b116100c0578063d29a4bf611610074578063d8619f5611610059578063d8619f56146103ce578063ddca3f43146103e1578063f2fde38b146103f757600080fd5b8063d29a4bf61461038e578063d7e5fbf3146103ae57600080fd5b8063a06617cd116100a5578063a06617cd14610330578063a26cb27014610366578063ced72f871461037957600080fd5b80638da5cb5b146102f257806397feb9261461031057600080fd5b8063476343ee1161011757806369fe0e2d116100fc57806369fe0e2d14610290578063715018a6146102b05780637ecebe00146102c557600080fd5b8063476343ee1461025b5780635b7633d01461027057600080fd5b8063046dc16614610149578063150b7a021461016b5780631a296e02146101e55780632d0335ab14610217575b600080fd5b34801561015557600080fd5b50610169610164366004611a0b565b610417565b005b34801561017757600080fd5b506101af610186366004611a7b565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b3480156101f157600080fd5b506003546001600160a01b03165b6040516001600160a01b0390911681526020016101dc565b34801561022357600080fd5b5061024d610232366004611a0b565b6001600160a01b031660009081526004602052604090205490565b6040519081526020016101dc565b34801561026757600080fd5b506101696104a5565b34801561027c57600080fd5b506003546101ff906001600160a01b031681565b34801561029c57600080fd5b506101696102ab366004611b9f565b61054f565b3480156102bc57600080fd5b506101696105ae565b3480156102d157600080fd5b5061024d6102e0366004611a0b565b60046020526000908152604090205481565b3480156102fe57600080fd5b506001546001600160a01b03166101ff565b34801561031c57600080fd5b5061016961032b366004611b54565b610614565b34801561033c57600080fd5b506101ff61034b366004611a0b565b6005602052600090815260409020546001600160a01b031681565b610169610374366004611a7b565b61081b565b34801561038557600080fd5b5060025461024d565b34801561039a57600080fd5b506101696103a9366004611b54565b610c2c565b3480156103ba57600080fd5b506101696103c9366004611a43565b610db1565b6101696103dc366004611a7b565b610e46565b3480156103ed57600080fd5b5061024d60025481565b34801561040357600080fd5b50610169610412366004611a0b565b6110ec565b6001546001600160a01b031633146104765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031633146104ff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046d565b60006105136001546001600160a01b031690565b6040519091506001600160a01b038216904780156108fc02916000818181858888f1935050505015801561054b573d6000803e3d6000fd5b5050565b6001546001600160a01b031633146105a95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046d565b600255565b6001546001600160a01b031633146106085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046d565b61061260006111ce565b565b6001600160a01b0380831660009081526005602052604090205483911661067d5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046d565b600260005414156106d05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046d565b6002600055816107225760405162461bcd60e51b815260206004820152601860248201527f4d757374206465706f736974206d6f7265207468616e20300000000000000000604482015260640161046d565b6001600160a01b03808416600090815260056020526040902054166107498133308661122d565b6040517f9dc29fac000000000000000000000000000000000000000000000000000000008152306004820152602481018490526001600160a01b03821690639dc29fac90604401600060405180830381600087803b1580156107aa57600080fd5b505af11580156107be573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f10210aba465589e42fd8145472c6bbce9f47079ffa6fe89f5c6e741fae43bcea925060600190505b60405180910390a1505060016000555050565b60025434101561086d5760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161046d565b6001600160a01b038084166000908152600560205260409020548491166108d65760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046d565b600260005414156109295760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046d565b600260009081556001600160a01b038086168252600560205260408220541690610968876001600160a01b031660009081526004602052604090205490565b600354909150600090610989906001600160a01b031689898986468b6112bb565b9050806109d85760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161046d565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810187905283906001600160a01b03821690636352211e9060240160206040518083038186803b158015610a3357600080fd5b505afa925050508015610a63575060408051601f3d908101601f19168201909252610a6091810190611a27565b60015b610ad25760405163da1919b360e01b81526001600160a01b038a811660048301526024820189905285919082169063da1919b390604401600060405180830381600087803b158015610ab457600080fd5b505af1158015610ac8573d6000803e3d6000fd5b5050505050610b94565b6001600160a01b0381163014610b2a5760405162461bcd60e51b815260206004820152601a60248201527f455243373231206973206e6f74206f6e20746865207661756c74000000000000604482015260640161046d565b604051632142170760e11b81523060048201526001600160a01b038b81166024830152604482018a90528316906342842e0e90606401600060405180830381600087803b158015610b7a57600080fd5b505af1158015610b8e573d6000803e3d6000fd5b50505050505b6001600160a01b038916600090815260046020526040902054610bb8906001611c06565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527fe2d807fc8c90ab37f9344f780c2fd13681207c17b810d5cb6c066191c05f4639906060015b60405180910390a15050600160005550505050505050565b6001600160a01b03808316600090815260056020526040902054839116610c955760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046d565b60026000541415610ce85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046d565b600260009081556001600160a01b0384811682526005602052604091829020549151632142170760e11b81523360048201523060248201526044810185905291169081906342842e0e90606401600060405180830381600087803b158015610d4f57600080fd5b505af1158015610d63573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f4be8f6117fc663fc6fbe495d6c7fd7f779b427f47d36bb2fb98523ca943eaa8892506060019050610808565b6001546001600160a01b03163314610e0b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046d565b6001600160a01b039182166000908152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600254341015610e985760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161046d565b6001600160a01b03808416600090815260056020526040902054849116610f015760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046d565b60026000541415610f545760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046d565b600260009081556001600160a01b038086168252600560205260408220541690610f93876001600160a01b031660009081526004602052604090205490565b600354909150600090610fb4906001600160a01b031689898986468b6112bb565b9050806110035760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161046d565b60405163da1919b360e01b81526001600160a01b0389811660048301526024820188905284919082169063da1919b390604401600060405180830381600087803b15801561105057600080fd5b505af1158015611064573d6000803e3d6000fd5b5050506001600160a01b038a1660009081526004602052604090205461108c91506001611c06565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527f38c796d42faa6e2ff4bfd87672a65992ceccc9e4cacff9aeb11eb6145da8444190606001610c14565b6001546001600160a01b031633146111465760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046d565b6001600160a01b0381166111c25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046d565b6111cb816111ce565b50565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526112b5908590611330565b50505050565b60408051606088811b6bffffffffffffffffffffffff199081166020808501919091529189901b166034830152604882018790526068820186905260888083018690528351808403909101815260a8909201909252805191012060009061132389828561141a565b9998505050505050505050565b6000611385826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661149f9092919063ffffffff16565b80519091501561141557808060200190518101906113a39190611b7f565b6114155760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161046d565b505050565b600080611474846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050846001600160a01b031661148a82856114b6565b6001600160a01b0316149150505b9392505050565b60606114ae84846000856114da565b949350505050565b60008060006114c58585611622565b915091506114d281611692565b509392505050565b6060824710156115525760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161046d565b6001600160a01b0385163b6115a95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161046d565b600080866001600160a01b031685876040516115c59190611bb7565b60006040518083038185875af1925050503d8060008114611602576040519150601f19603f3d011682016040523d82523d6000602084013e611607565b606091505b5091509150611617828286611893565b979650505050505050565b6000808251604114156116595760208301516040840151606085015160001a61164d878285856118cc565b9450945050505061168b565b82516040141561168357602083015160408401516116788683836119b9565b93509350505061168b565b506000905060025b9250929050565b60008160048111156116b457634e487b7160e01b600052602160045260246000fd5b14156116bd5750565b60018160048111156116df57634e487b7160e01b600052602160045260246000fd5b141561172d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161046d565b600281600481111561174f57634e487b7160e01b600052602160045260246000fd5b141561179d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161046d565b60038160048111156117bf57634e487b7160e01b600052602160045260246000fd5b14156118185760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161046d565b600481600481111561183a57634e487b7160e01b600052602160045260246000fd5b14156111cb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161046d565b606083156118a2575081611498565b8251156118b25782518084602001fd5b8160405162461bcd60e51b815260040161046d9190611bd3565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561190357506000905060036119b0565b8460ff16601b1415801561191b57508460ff16601c14155b1561192c57506000905060046119b0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611980573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119a9576000600192509250506119b0565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316816119ef60ff86901c601b611c06565b90506119fd878288856118cc565b935093505050935093915050565b600060208284031215611a1c578081fd5b813561149881611c6c565b600060208284031215611a38578081fd5b815161149881611c6c565b60008060408385031215611a55578081fd5b8235611a6081611c6c565b91506020830135611a7081611c6c565b809150509250929050565b60008060008060808587031215611a90578182fd5b8435611a9b81611c6c565b93506020850135611aab81611c6c565b925060408501359150606085013567ffffffffffffffff80821115611ace578283fd5b818701915087601f830112611ae1578283fd5b813581811115611af357611af3611c56565b604051601f8201601f19908116603f01168101908382118183101715611b1b57611b1b611c56565b816040528281528a6020848701011115611b33578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611b66578182fd5b8235611b7181611c6c565b946020939093013593505050565b600060208284031215611b90578081fd5b81518015158114611498578182fd5b600060208284031215611bb0578081fd5b5035919050565b60008251611bc9818460208701611c2a565b9190910192915050565b6020815260008251806020840152611bf2816040850160208701611c2a565b601f01601f19169190910160400192915050565b60008219821115611c2557634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611c45578181015183820152602001611c2d565b838111156112b55750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146111cb57600080fdfea2646970667358221220dad79a934221a912cf26218210cf435c837da3124a7de4d6d2862598bc0cee4d64736f6c63430008040033";

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
