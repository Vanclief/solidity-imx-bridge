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
        name: "_chainID",
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
    name: "chainID",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001cca38038062001cca833981016040819052610031916100b7565b61003a33610067565b60018055600480546001600160a01b0319166001600160a01b0393909316929092179091556003556100ef565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100c9578182fd5b82516001600160a01b03811681146100df578283fd5b6020939093015192949293505050565b611bcb80620000ff6000396000f3fe6080604052600436106101445760003560e01c806397feb926116100c0578063d29a4bf611610074578063d8619f5611610059578063d8619f56146103cf578063ddca3f43146103e2578063f2fde38b146103f857600080fd5b8063d29a4bf61461038f578063d7e5fbf3146103af57600080fd5b8063a26cb270116100a5578063a26cb27014610351578063adc879e914610364578063ced72f871461037a57600080fd5b806397feb926146102fb578063a06617cd1461031b57600080fd5b80635b7633d011610117578063715018a6116100fc578063715018a61461029b5780637ecebe00146102b05780638da5cb5b146102dd57600080fd5b80635b7633d01461025b57806369fe0e2d1461027b57600080fd5b8063046dc16614610149578063150b7a021461016b5780631a296e02146101e55780632d0335ab14610217575b600080fd5b34801561015557600080fd5b5061016961016436600461191f565b610418565b005b34801561017757600080fd5b506101af61018636600461198f565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b3480156101f157600080fd5b506004546001600160a01b03165b6040516001600160a01b0390911681526020016101dc565b34801561022357600080fd5b5061024d61023236600461191f565b6001600160a01b031660009081526005602052604090205490565b6040519081526020016101dc565b34801561026757600080fd5b506004546101ff906001600160a01b031681565b34801561028757600080fd5b50610169610296366004611ab3565b6104a6565b3480156102a757600080fd5b50610169610505565b3480156102bc57600080fd5b5061024d6102cb36600461191f565b60056020526000908152604090205481565b3480156102e957600080fd5b506000546001600160a01b03166101ff565b34801561030757600080fd5b50610169610316366004611a68565b61056b565b34801561032757600080fd5b506101ff61033636600461191f565b6006602052600090815260409020546001600160a01b031681565b61016961035f36600461198f565b610771565b34801561037057600080fd5b5061024d60035481565b34801561038657600080fd5b5060025461024d565b34801561039b57600080fd5b506101696103aa366004611a68565b610b50565b3480156103bb57600080fd5b506101696103ca366004611957565b610cd6565b6101696103dd36600461198f565b610d6b565b3480156103ee57600080fd5b5061024d60025481565b34801561040457600080fd5b5061016961041336600461191f565b610ff9565b6000546001600160a01b031633146104775760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b600255565b6000546001600160a01b0316331461055f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b61056960006110db565b565b6001600160a01b038083166000908152600660205260409020548391166105d45760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046e565b600260015414156106275760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046e565b6002600155816106795760405162461bcd60e51b815260206004820152601860248201527f4d757374206465706f736974206d6f7265207468616e20300000000000000000604482015260640161046e565b6001600160a01b03808416600090815260066020526040902054166106a081333086611138565b6040517f9dc29fac000000000000000000000000000000000000000000000000000000008152306004820152602481018490526001600160a01b03821690639dc29fac90604401600060405180830381600087803b15801561070157600080fd5b505af1158015610715573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f10210aba465589e42fd8145472c6bbce9f47079ffa6fe89f5c6e741fae43bcea925060600190505b60405180910390a15050600180555050565b6002543410156107c35760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161046e565b6001600160a01b0380841660009081526006602052604090205484911661082c5760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046e565b6002600154141561087f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046e565b60026001556001600160a01b0384811660009081526006602090815260408083205489851684526005909252822054600454918416939092916108c79116898989868a6111c6565b9050806109165760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161046e565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810187905283906001600160a01b03821690636352211e9060240160206040518083038186803b15801561097157600080fd5b505afa9250505080156109a1575060408051601f3d908101601f1916820190925261099e9181019061193b565b60015b610a105760405163da1919b360e01b81526001600160a01b038a811660048301526024820189905285919082169063da1919b390604401600060405180830381600087803b1580156109f257600080fd5b505af1158015610a06573d6000803e3d6000fd5b5050505050610ad2565b6001600160a01b0381163014610a685760405162461bcd60e51b815260206004820152601a60248201527f455243373231206973206e6f74206f6e20746865207661756c74000000000000604482015260640161046e565b604051632142170760e11b81523060048201526001600160a01b038b81166024830152604482018a90528316906342842e0e90606401600060405180830381600087803b158015610ab857600080fd5b505af1158015610acc573d6000803e3d6000fd5b50505050505b610add836001611233565b6001600160a01b038a81166000818152600560209081526040918290209490945580519182529281018a9052908616918101919091527fe2d807fc8c90ab37f9344f780c2fd13681207c17b810d5cb6c066191c05f4639906060015b60405180910390a150506001805550505050505050565b6001600160a01b03808316600090815260066020526040902054839116610bb95760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046e565b60026001541415610c0c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046e565b60026001556001600160a01b0383811660009081526006602052604090819020549051632142170760e11b81523360048201523060248201526044810185905291169081906342842e0e90606401600060405180830381600087803b158015610c7457600080fd5b505af1158015610c88573d6000803e3d6000fd5b505060408051338152602081018790526001600160a01b038516918101919091527f4be8f6117fc663fc6fbe495d6c7fd7f779b427f47d36bb2fb98523ca943eaa889250606001905061075f565b6000546001600160a01b03163314610d305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b6001600160a01b039182166000908152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff191691909216179055565b600254341015610dbd5760405162461bcd60e51b815260206004820152601760248201527f54782076616c7565206c6f776572207468616e20666565000000000000000000604482015260640161046e565b6001600160a01b03808416600090815260066020526040902054849116610e265760405162461bcd60e51b815260206004820152601a60248201527f436f6e7472616374206973206e6f742072656769737465726564000000000000604482015260640161046e565b60026001541415610e795760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046e565b60026001556001600160a01b038481166000908152600660209081526040808320548985168452600590925282205460045491841693909291610ec19116898989868a6111c6565b905080610f105760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e6174757265000000000000000000000000000000604482015260640161046e565b60405163da1919b360e01b81526001600160a01b0389811660048301526024820188905284919082169063da1919b390604401600060405180830381600087803b158015610f5d57600080fd5b505af1158015610f71573d6000803e3d6000fd5b5050506001600160a01b038a16600090815260056020526040902054610f9991506001611233565b6001600160a01b038a81166000818152600560209081526040918290209490945580519182529281018a9052908616918101919091527f38c796d42faa6e2ff4bfd87672a65992ceccc9e4cacff9aeb11eb6145da8444190606001610b39565b6000546001600160a01b031633146110535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b6001600160a01b0381166110cf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046e565b6110d8816110db565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526111c0908590611246565b50505050565b60408051606087811b6bffffffffffffffffffffffff199081166020808501919091529188901b1660348301526048820186905260688083018690528351808403909101815260889092019092528051910120600090611227888285611330565b98975050505050505050565b600061123f8284611b1a565b9392505050565b600061129b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113b39092919063ffffffff16565b80519091501561132b57808060200190518101906112b99190611a93565b61132b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161046e565b505050565b60008061138a846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050846001600160a01b03166113a082856113ca565b6001600160a01b03161495945050505050565b60606113c284846000856113ee565b949350505050565b60008060006113d98585611536565b915091506113e6816115a6565b509392505050565b6060824710156114665760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0385163b6114bd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161046e565b600080866001600160a01b031685876040516114d99190611acb565b60006040518083038185875af1925050503d8060008114611516576040519150601f19603f3d011682016040523d82523d6000602084013e61151b565b606091505b509150915061152b8282866117a7565b979650505050505050565b60008082516041141561156d5760208301516040840151606085015160001a611561878285856117e0565b9450945050505061159f565b825160401415611597576020830151604084015161158c8683836118cd565b93509350505061159f565b506000905060025b9250929050565b60008160048111156115c857634e487b7160e01b600052602160045260246000fd5b14156115d15750565b60018160048111156115f357634e487b7160e01b600052602160045260246000fd5b14156116415760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161046e565b600281600481111561166357634e487b7160e01b600052602160045260246000fd5b14156116b15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161046e565b60038160048111156116d357634e487b7160e01b600052602160045260246000fd5b141561172c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161046e565b600481600481111561174e57634e487b7160e01b600052602160045260246000fd5b14156110d85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161046e565b606083156117b657508161123f565b8251156117c65782518084602001fd5b8160405162461bcd60e51b815260040161046e9190611ae7565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561181757506000905060036118c4565b8460ff16601b1415801561182f57508460ff16601c14155b1561184057506000905060046118c4565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611894573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166118bd576000600192509250506118c4565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83168161190360ff86901c601b611b1a565b9050611911878288856117e0565b935093505050935093915050565b600060208284031215611930578081fd5b813561123f81611b80565b60006020828403121561194c578081fd5b815161123f81611b80565b60008060408385031215611969578081fd5b823561197481611b80565b9150602083013561198481611b80565b809150509250929050565b600080600080608085870312156119a4578182fd5b84356119af81611b80565b935060208501356119bf81611b80565b925060408501359150606085013567ffffffffffffffff808211156119e2578283fd5b818701915087601f8301126119f5578283fd5b813581811115611a0757611a07611b6a565b604051601f8201601f19908116603f01168101908382118183101715611a2f57611a2f611b6a565b816040528281528a6020848701011115611a47578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611a7a578182fd5b8235611a8581611b80565b946020939093013593505050565b600060208284031215611aa4578081fd5b8151801515811461123f578182fd5b600060208284031215611ac4578081fd5b5035919050565b60008251611add818460208701611b3e565b9190910192915050565b6020815260008251806020840152611b06816040850160208701611b3e565b601f01601f19169190910160400192915050565b60008219821115611b3957634e487b7160e01b81526011600452602481fd5b500190565b60005b83811015611b59578181015183820152602001611b41565b838111156111c05750506000910152565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146110d857600080fdfea26469706673582212201f404d183c5c336680477cb9fb89f3f2187101fdaa4893b5f824ab3f017822f564736f6c63430008040033";

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
    _chainID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IMXBridge> {
    return super.deploy(
      _signerAddress,
      _chainID,
      overrides || {}
    ) as Promise<IMXBridge>;
  }
  getDeployTransaction(
    _signerAddress: string,
    _chainID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _signerAddress,
      _chainID,
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
