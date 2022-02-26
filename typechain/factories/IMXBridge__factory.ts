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
  "0x60806040523480156200001157600080fd5b5060405162001f0f38038062001f0f8339810160408190526200003491620000c9565b6001600055620000443362000077565b6001805460ff60a01b19169055600380546001600160a01b0319166001600160a01b0392909216919091179055620000f9565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208284031215620000db578081fd5b81516001600160a01b0381168114620000f2578182fd5b9392505050565b611e0680620001096000396000f3fe60806040526004361061015f5760003560e01c80638da5cb5b116100c0578063d29a4bf611610074578063d8619f5611610059578063d8619f5614610413578063ddca3f4314610426578063f2fde38b1461043c57600080fd5b8063d29a4bf6146103d3578063d7e5fbf3146103f357600080fd5b8063a06617cd116100a5578063a06617cd14610375578063a26cb270146103ab578063ced72f87146103be57600080fd5b80638da5cb5b1461033757806397feb9261461035557600080fd5b80635b7633d01161011757806369fe0e2d116100fc57806369fe0e2d146102d5578063715018a6146102f55780637ecebe001461030a57600080fd5b80635b7633d01461028b5780635c975abb146102ab57600080fd5b80631a296e02116101485780631a296e02146102005780632d0335ab14610232578063476343ee1461027657600080fd5b8063046dc16614610164578063150b7a0214610186575b600080fd5b34801561017057600080fd5b5061018461017f366004611b5a565b61045c565b005b34801561019257600080fd5b506101ca6101a1366004611bca565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b34801561020c57600080fd5b506003546001600160a01b03165b6040516001600160a01b0390911681526020016101f7565b34801561023e57600080fd5b5061026861024d366004611b5a565b6001600160a01b031660009081526004602052604090205490565b6040519081526020016101f7565b34801561028257600080fd5b506101846104ea565b34801561029757600080fd5b5060035461021a906001600160a01b031681565b3480156102b757600080fd5b50600154600160a01b900460ff1660405190151581526020016101f7565b3480156102e157600080fd5b506101846102f0366004611cee565b610594565b34801561030157600080fd5b506101846105f3565b34801561031657600080fd5b50610268610325366004611b5a565b60046020526000908152604090205481565b34801561034357600080fd5b506001546001600160a01b031661021a565b34801561036157600080fd5b50610184610370366004611ca3565b610659565b34801561038157600080fd5b5061021a610390366004611b5a565b6005602052600090815260409020546001600160a01b031681565b6101846103b9366004611bca565b6108b0565b3480156103ca57600080fd5b50600254610268565b3480156103df57600080fd5b506101846103ee366004611ca3565b610cf7565b3480156103ff57600080fd5b5061018461040e366004611b92565b610eca565b610184610421366004611bca565b610f5f565b34801561043257600080fd5b5061026860025481565b34801561044857600080fd5b50610184610457366004611b5a565b61123b565b6001546001600160a01b031633146104bb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031633146105445760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b2565b60006105586001546001600160a01b031690565b6040519091506001600160a01b038216904780156108fc02916000818181858888f19350505050158015610590573d6000803e3d6000fd5b5050565b6001546001600160a01b031633146105ee5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b2565b600255565b6001546001600160a01b0316331461064d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b2565b610657600061131d565b565b6001600160a01b038083166000908152600560205260409020548391166106c25760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104b2565b600260005414156107155760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104b2565b6002600055600154600160a01b900460ff16156107675760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b2565b600082116107b75760405162461bcd60e51b815260206004820152601860248201527f4d757374206465706f736974206d6f7265207468616e2030000000000000000060448201526064016104b2565b6001600160a01b03808416600090815260056020526040902054166107de8133308661137c565b6040517f9dc29fac000000000000000000000000000000000000000000000000000000008152306004820152602481018490526001600160a01b03821690639dc29fac90604401600060405180830381600087803b15801561083f57600080fd5b505af1158015610853573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f10210aba465589e42fd8145472c6bbce9f47079ffa6fe89f5c6e741fae43bcea925060600190505b60405180910390a1505060016000555050565b6002543410156109025760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e2066656500000000000000000060448201526064016104b2565b6001600160a01b0380841660009081526005602052604090205484911661096b5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104b2565b600260005414156109be5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104b2565b6002600055600154600160a01b900460ff1615610a105760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b2565b6001600160a01b038481166000908152600560209081526040808320548985168452600490925282205460035491841693909291610a54911689898986468b61140a565b905080610aa35760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104b2565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810187905283906001600160a01b03821690636352211e9060240160206040518083038186803b158015610afe57600080fd5b505afa925050508015610b2e575060408051601f3d908101601f19168201909252610b2b91810190611b76565b60015b610b9d5760405163da1919b360e01b81526001600160a01b038a811660048301526024820189905285919082169063da1919b390604401600060405180830381600087803b158015610b7f57600080fd5b505af1158015610b93573d6000803e3d6000fd5b5050505050610c5f565b6001600160a01b0381163014610bf55760405162461bcd60e51b815260206004820152601a60248201527f455243373231206973206e6f74206f6e20746865207661756c7400000000000060448201526064016104b2565b604051632142170760e11b81523060048201526001600160a01b038b81166024830152604482018a90528316906342842e0e90606401600060405180830381600087803b158015610c4557600080fd5b505af1158015610c59573d6000803e3d6000fd5b50505050505b6001600160a01b038916600090815260046020526040902054610c83906001611d55565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527fe2d807fc8c90ab37f9344f780c2fd13681207c17b810d5cb6c066191c05f4639906060015b60405180910390a15050600160005550505050505050565b6001600160a01b03808316600090815260056020526040902054839116610d605760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104b2565b60026000541415610db35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104b2565b6002600055600154600160a01b900460ff1615610e055760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b2565b6001600160a01b0383811660009081526005602052604090819020549051632142170760e11b81523360048201523060248201526044810185905291169081906342842e0e90606401600060405180830381600087803b158015610e6857600080fd5b505af1158015610e7c573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f4be8f6117fc663fc6fbe495d6c7fd7f779b427f47d36bb2fb98523ca943eaa889250606001905061089d565b6001546001600160a01b03163314610f245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b2565b6001600160a01b039182166000908152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600254341015610fb15760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e2066656500000000000000000060448201526064016104b2565b6001600160a01b0380841660009081526005602052604090205484911661101a5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f74207265676973746572656400000000000060448201526064016104b2565b6002600054141561106d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104b2565b6002600055600154600160a01b900460ff16156110bf5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b2565b6001600160a01b038481166000908152600560209081526040808320548985168452600490925282205460035491841693909291611103911689898986468b61140a565b9050806111525760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e617475726500000000000000000000000000000060448201526064016104b2565b60405163da1919b360e01b81526001600160a01b0389811660048301526024820188905284919082169063da1919b390604401600060405180830381600087803b15801561119f57600080fd5b505af11580156111b3573d6000803e3d6000fd5b5050506001600160a01b038a166000908152600460205260409020546111db91506001611d55565b6001600160a01b038a81166000818152600460209081526040918290209490945580519182529281018a9052908616918101919091527f38c796d42faa6e2ff4bfd87672a65992ceccc9e4cacff9aeb11eb6145da8444190606001610cdf565b6001546001600160a01b031633146112955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b2565b6001600160a01b0381166113115760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104b2565b61131a8161131d565b50565b600180546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261140490859061147f565b50505050565b60408051606088811b6bffffffffffffffffffffffff199081166020808501919091529189901b166034830152604882018790526068820186905260888083018690528351808403909101815260a89092019092528051910120600090611472898285611569565b9998505050505050505050565b60006114d4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115ee9092919063ffffffff16565b80519091501561156457808060200190518101906114f29190611cce565b6115645760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104b2565b505050565b6000806115c3846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050846001600160a01b03166115d98285611605565b6001600160a01b0316149150505b9392505050565b60606115fd8484600085611629565b949350505050565b60008060006116148585611771565b91509150611621816117e1565b509392505050565b6060824710156116a15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104b2565b6001600160a01b0385163b6116f85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b2565b600080866001600160a01b031685876040516117149190611d06565b60006040518083038185875af1925050503d8060008114611751576040519150601f19603f3d011682016040523d82523d6000602084013e611756565b606091505b50915091506117668282866119e2565b979650505050505050565b6000808251604114156117a85760208301516040840151606085015160001a61179c87828585611a1b565b945094505050506117da565b8251604014156117d257602083015160408401516117c7868383611b08565b9350935050506117da565b506000905060025b9250929050565b600081600481111561180357634e487b7160e01b600052602160045260246000fd5b141561180c5750565b600181600481111561182e57634e487b7160e01b600052602160045260246000fd5b141561187c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104b2565b600281600481111561189e57634e487b7160e01b600052602160045260246000fd5b14156118ec5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104b2565b600381600481111561190e57634e487b7160e01b600052602160045260246000fd5b14156119675760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104b2565b600481600481111561198957634e487b7160e01b600052602160045260246000fd5b141561131a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104b2565b606083156119f15750816115e7565b825115611a015782518084602001fd5b8160405162461bcd60e51b81526004016104b29190611d22565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a525750600090506003611aff565b8460ff16601b14158015611a6a57508460ff16601c14155b15611a7b5750600090506004611aff565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611acf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611af857600060019250925050611aff565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831681611b3e60ff86901c601b611d55565b9050611b4c87828885611a1b565b935093505050935093915050565b600060208284031215611b6b578081fd5b81356115e781611dbb565b600060208284031215611b87578081fd5b81516115e781611dbb565b60008060408385031215611ba4578081fd5b8235611baf81611dbb565b91506020830135611bbf81611dbb565b809150509250929050565b60008060008060808587031215611bdf578182fd5b8435611bea81611dbb565b93506020850135611bfa81611dbb565b925060408501359150606085013567ffffffffffffffff80821115611c1d578283fd5b818701915087601f830112611c30578283fd5b813581811115611c4257611c42611da5565b604051601f8201601f19908116603f01168101908382118183101715611c6a57611c6a611da5565b816040528281528a6020848701011115611c82578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611cb5578182fd5b8235611cc081611dbb565b946020939093013593505050565b600060208284031215611cdf578081fd5b815180151581146115e7578182fd5b600060208284031215611cff578081fd5b5035919050565b60008251611d18818460208701611d79565b9190910192915050565b6020815260008251806020840152611d41816040850160208701611d79565b601f01601f19169190910160400192915050565b60008219821115611d7457634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611d94578181015183820152602001611d7c565b838111156114045750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461131a57600080fdfea2646970667358221220083cd1a3e95670d92ae56709cc4b6773e7b61d64b2a8a1df75ff45613946889f64736f6c63430008040033";

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
