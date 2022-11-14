/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Geocache, GeocacheInterface } from "../../contracts/Geocache";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creatorContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NonExistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "NotActiveGeocache",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCreator",
    type: "error",
  },
  {
    inputs: [],
    name: "UserAlreadyFound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "AdminApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "AdminRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
    ],
    name: "GeocacheCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "geocacheIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemIndex",
        type: "uint256",
      },
    ],
    name: "GeocacheItemMinted",
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
        name: "admin",
        type: "address",
      },
    ],
    name: "approveAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creatorContract",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "geocacheToNumFound",
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
    name: "getAdmins",
    outputs: [
      {
        internalType: "address[]",
        name: "admins",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllActiveGeocacheIDs",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "geocacheIndex",
        type: "uint256",
      },
    ],
    name: "getGeolocationsOfGeocache",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUsersGeocaches",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hasMintedTokenId",
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
        name: "admin",
        type: "address",
      },
    ],
    name: "isAdmin",
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
        internalType: "uint256",
        name: "_geocacheId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "mintItemInGeocache",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numItems",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dateCreated",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_itemGeolocations",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "_epicenterLat",
        type: "string",
      },
      {
        internalType: "string",
        name: "_epicenterLong",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_radius",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_originStory",
        type: "string",
      },
    ],
    name: "newGeocache",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numActiveGeocaches",
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
    name: "numGeocaches",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "revokeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToGeocache",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateCreated",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numItems",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "string",
        name: "epicenterLat",
        type: "string",
      },
      {
        internalType: "string",
        name: "epicenterLong",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "radius",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "originStory",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_creatorContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newTokenURI",
        type: "string",
      },
    ],
    name: "updateGeocacheTokenURI",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userToGeocache",
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002533380380620025338339810160408190526200003491620000a1565b6200003f3362000051565b6001600160a01b0316608052620000d3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b457600080fd5b81516001600160a01b0381168114620000cc57600080fd5b9392505050565b60805161242f62000104600039600081816101b10152818161096401528181610e5e0152611916015261242f6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806380b501b3116100b8578063c1361b671161007c578063c1361b67146102fd578063cb948fc514610306578063e9dc63751461030f578063efa3c8b41461032f578063f2fde38b1461034f578063fa5ab3791461036257600080fd5b806380b501b31461028a57806380e604e81461029d5780638da5cb5b146102b0578063996f12de146102c15780639e6e7a0b146102ea57600080fd5b80635620749f1161010a5780635620749f146101eb5780636325ce2f146102195780636d73e6691461022c578063715018a61461023f5780637a50fc4a146102475780637f49cac01461025c57600080fd5b806301ffc9a71461014757806324d7806c1461016f5780632d3456701461018257806331ae450b146101975780633dae35ce146101ac575b600080fd5b61015a610155366004611c39565b610375565b60405190151581526020015b60405180910390f35b61015a61017d366004611c7f565b6103d6565b610195610190366004611c7f565b61040f565b005b61019f61046d565b6040516101669190611cde565b6101d37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610166565b61020b6101f9366004611cf1565b60066020526000908152604090205481565b604051908152602001610166565b610195610227366004611dbf565b61051b565b61019561023a366004611c7f565b61056e565b6101956105c6565b61024f6105da565b6040516101669190611e35565b61015a61026a366004611e48565b600760209081526000928352604080842090915290825290205460ff1681565b610195610298366004611f26565b610694565b61020b6102ab366004612054565b610a2e565b6000546001600160a01b03166101d3565b6102d46102cf366004611cf1565b610a5f565b6040516101669a999897969594939291906120cb565b61024f6102f8366004611c7f565b610dee565b61020b60045481565b61020b60035481565b61032261031d366004612054565b610e5a565b604051610166919061217b565b61034261033d366004611cf1565b610f3c565b60405161016691906121e3565b61019561035d366004611c7f565b61102b565b610195610370366004611e48565b6110a6565b60006001600160e01b0319821663e9dc637560e01b14806103a657506001600160e01b031982166354c1bcd960e01b145b806103c157506001600160e01b031982166301ffc9a760e01b145b806103d057506103d0826116e5565b92915050565b6000816001600160a01b03166103f46000546001600160a01b031690565b6001600160a01b031614806103d057506103d060018361171a565b61041761173f565b61042260018261171a565b1561046a5760405133906001600160a01b038316907f7c0c3c84c67c85fcac635147348bfe374c24a1a93d0366d1cfe9d8853cbf89d590600090a3610468600182611799565b505b50565b606061047960016117ae565b6001600160401b0381111561049057610490611d0a565b6040519080825280602002602001820160405280156104b9578160200160208202803683370190505b50905060005b6104c960016117ae565b811015610517576104db6001826117b8565b8282815181106104ed576104ed6121f6565b6001600160a01b03909216602092830291909101909101528061050f81612222565b9150506104bf565b5090565b600082815260056020526040902080546001600160a01b03163314610553576040516393687c0b60e01b815260040160405180910390fd5b81516105689060018301906020850190611af4565b50505050565b61057661173f565b61058160018261171a565b61046a5760405133906001600160a01b038316907f7e1a1a08d52e4ba0e21554733d66165fd5151f99460116223d9e3a608eec5cb190600090a36104686001826117c4565b6105ce61173f565b6105d860006117d9565b565b606060006004546001600160401b038111156105f8576105f8611d0a565b604051908082528060200260200182016040528015610621578160200160208202803683370190505b5090506000805b60035481101561068c576000818152600560205260409020600481015460ff16156106795781848481518110610660576106606121f6565b60209081029190910101528261067581612222565b9350505b508061068481612222565b915050610628565b509092915050565b604080516101608101825233815260208082018b81528284018b9052606083018d905260016080840181905260a084018a905260c0840189905260e084018b905261010084018790526101208401889052610140840186905260035460009081526005845294909420835181546001600160a01b0319166001600160a01b03909116178155905180519394919361073393928501929190910190611af4565b506040820151805161074f916002840191602090910190611af4565b5060608201516003820155608082015160048201805460ff191691151591909117905560a0820151805161078d916005840191602090910190611af4565b5060c082015180516107a9916006840191602090910190611af4565b5060e082015180516107c5916007840191602090910190611b74565b5061010082015180516107e2916008840191602090910190611af4565b506101208201516009820155610140820151805161080a91600a840191602090910190611af4565b5050336000908152600860209081526040822060038054825460018101845592855292842090910191909155805492509061084483612222565b90915550506004805490600061085983612222565b9091555050604080516001808252818301909252600091602080830190803683370190505090503381600081518110610894576108946121f6565b6001600160a01b0392909216602092830291909101909101526040805160018082528183019092526000918160200160208202803683370190505090506001816000815181106108e6576108e66121f6565b6020908102919091010152604080516001808252818301909252600091816020015b60608152602001906001900390816109085790505090506040518060200160405280600081525081600081518110610942576109426121f6565b6020908102919091010152604051634637423960e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638c6e84729061099d9086908690869060040161223b565b6000604051808303816000875af11580156109bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109e4919081019061227e565b507f6eb6ad71f0a3b9f2fa6652a096ca4bd0851eb41211391b7aab2e8564794aac2a33868e604051610a189392919061230e565b60405180910390a1505050505050505050505050565b60086020528160005260406000208181548110610a4a57600080fd5b90600052602060002001600091509150505481565b600560205260009081526040902080546001820180546001600160a01b039092169291610a8b90612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab790612342565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b505050505090806002018054610b1990612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4590612342565b8015610b925780601f10610b6757610100808354040283529160200191610b92565b820191906000526020600020905b815481529060010190602001808311610b7557829003601f168201915b50505050600383015460048401546005850180549495929460ff909216935090610bbb90612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610be790612342565b8015610c345780601f10610c0957610100808354040283529160200191610c34565b820191906000526020600020905b815481529060010190602001808311610c1757829003601f168201915b505050505090806006018054610c4990612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7590612342565b8015610cc25780601f10610c9757610100808354040283529160200191610cc2565b820191906000526020600020905b815481529060010190602001808311610ca557829003601f168201915b505050505090806008018054610cd790612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0390612342565b8015610d505780601f10610d2557610100808354040283529160200191610d50565b820191906000526020600020905b815481529060010190602001808311610d3357829003601f168201915b50505050509080600901549080600a018054610d6b90612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9790612342565b8015610de45780601f10610db957610100808354040283529160200191610de4565b820191906000526020600020905b815481529060010190602001808311610dc757829003601f168201915b505050505090508a565b6001600160a01b038116600090815260086020908152604091829020805483518184028101840190945280845260609392830182828015610e4e57602002820191906000526020600020905b815481526020019060010190808311610e3a575b50505050509050919050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b031614610e9a57600080fd5b60008281526005602052604090206001018054610eb690612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee290612342565b8015610f2f5780601f10610f0457610100808354040283529160200191610f2f565b820191906000526020600020905b815481529060010190602001808311610f1257829003601f168201915b5050505050905092915050565b606060056000838152602001908152602001600020600701805480602002602001604051908101604052809291908181526020016000905b82821015611020578382906000526020600020018054610f9390612342565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbf90612342565b801561100c5780601f10610fe15761010080835404028352916020019161100c565b820191906000526020600020905b815481529060010190602001808311610fef57829003601f168201915b505050505081526020019060010190610f74565b505050509050919050565b61103361173f565b6001600160a01b03811661109d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61046a816117d9565b6110ae61173f565b60035482106110d057604051634a1850bf60e11b815260040160405180910390fd5b60008281526007602090815260408083206001600160a01b038516845290915290205460ff161561111457604051634641bb4760e01b815260040160405180910390fd5b60008281526005602090815260408083208151610160810190925280546001600160a01b03168252600181018054929391929184019161115390612342565b80601f016020809104026020016040519081016040528092919081815260200182805461117f90612342565b80156111cc5780601f106111a1576101008083540402835291602001916111cc565b820191906000526020600020905b8154815290600101906020018083116111af57829003601f168201915b505050505081526020016002820180546111e590612342565b80601f016020809104026020016040519081016040528092919081815260200182805461121190612342565b801561125e5780601f106112335761010080835404028352916020019161125e565b820191906000526020600020905b81548152906001019060200180831161124157829003601f168201915b505050918352505060038201546020820152600482015460ff161515604082015260058201805460609092019161129490612342565b80601f01602080910402602001604051908101604052809291908181526020018280546112c090612342565b801561130d5780601f106112e25761010080835404028352916020019161130d565b820191906000526020600020905b8154815290600101906020018083116112f057829003601f168201915b5050505050815260200160068201805461132690612342565b80601f016020809104026020016040519081016040528092919081815260200182805461135290612342565b801561139f5780601f106113745761010080835404028352916020019161139f565b820191906000526020600020905b81548152906001019060200180831161138257829003601f168201915b5050505050815260200160078201805480602002602001604051908101604052809291908181526020016000905b828210156114795783829060005260206000200180546113ec90612342565b80601f016020809104026020016040519081016040528092919081815260200182805461141890612342565b80156114655780601f1061143a57610100808354040283529160200191611465565b820191906000526020600020905b81548152906001019060200180831161144857829003601f168201915b5050505050815260200190600101906113cd565b50505050815260200160088201805461149190612342565b80601f01602080910402602001604051908101604052809291908181526020018280546114bd90612342565b801561150a5780601f106114df5761010080835404028352916020019161150a565b820191906000526020600020905b8154815290600101906020018083116114ed57829003601f168201915b5050505050815260200160098201548152602001600a8201805461152d90612342565b80601f016020809104026020016040519081016040528092919081815260200182805461155990612342565b80156115a65780601f1061157b576101008083540402835291602001916115a6565b820191906000526020600020905b81548152906001019060200180831161158957829003601f168201915b505050505081525050905080608001516115d35760405163d7c0312f60e01b815260040160405180910390fd5b60008381526006602052604081208054916115ed83612222565b909155505060008381526007602090815260408083206001600160a01b03861684528252808320805460ff191660011790556060840151868452600690925290912054036116635760008381526005602052604081206004908101805460ff19169055805490919061165e9061237c565b909155505b61166d8383611829565b6001600160a01b0382166000818152600860209081526040808320805460018101825590845282842001879055868352600682529182902054825193845290830186905282820152517f7ed2deb7015f264677924005fd808fb4d654bcd7a3ba0a12ede865d506f962df9181900360600190a1505050565b60006001600160e01b03198216632a9f3abf60e11b14806103d057506301ffc9a760e01b6001600160e01b03198316146103d0565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000546001600160a01b031633146105d85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401611094565b6000611738836001600160a01b038416611988565b60006103d0825490565b60006117388383611a7b565b6000611738836001600160a01b038416611aa5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051600180825281830190925260009160208083019080368337019050509050818160008151811061185f5761185f6121f6565b6001600160a01b03929092166020928302919091019091015260408051600180825281830190925260009181602001602082028036833701905050905083816000815181106118b0576118b06121f6565b60209081029190910101526040805160018082528183019092526000918160200160208202803683370190505090506001816000815181106118f4576118f46121f6565b60209081029190910101526040516339b2213760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e6c884dc9061194f90869086908690600401612393565b600060405180830381600087803b15801561196957600080fd5b505af115801561197d573d6000803e3d6000fd5b505050505050505050565b60008181526001830160205260408120548015611a715760006119ac6001836123cc565b85549091506000906119c0906001906123cc565b9050818114611a255760008660000182815481106119e0576119e06121f6565b9060005260206000200154905080876000018481548110611a0357611a036121f6565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a3657611a366123e3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103d0565b60009150506103d0565b6000826000018281548110611a9257611a926121f6565b9060005260206000200154905092915050565b6000818152600183016020526040812054611aec575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103d0565b5060006103d0565b828054611b0090612342565b90600052602060002090601f016020900481019282611b225760008555611b68565b82601f10611b3b57805160ff1916838001178555611b68565b82800160010185558215611b68579182015b82811115611b68578251825591602001919060010190611b4d565b50610517929150611bcd565b828054828255906000526020600020908101928215611bc1579160200282015b82811115611bc15782518051611bb1918491602090910190611af4565b5091602001919060010190611b94565b50610517929150611be2565b5b808211156105175760008155600101611bce565b80821115610517576000611bf68282611bff565b50600101611be2565b508054611c0b90612342565b6000825580601f10611c1b575050565b601f01602090049060005260206000209081019061046a9190611bcd565b600060208284031215611c4b57600080fd5b81356001600160e01b03198116811461173857600080fd5b80356001600160a01b0381168114611c7a57600080fd5b919050565b600060208284031215611c9157600080fd5b61173882611c63565b600081518084526020808501945080840160005b83811015611cd35781516001600160a01b031687529582019590820190600101611cae565b509495945050505050565b6020815260006117386020830184611c9a565b600060208284031215611d0357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611d4857611d48611d0a565b604052919050565b600082601f830112611d6157600080fd5b81356001600160401b03811115611d7a57611d7a611d0a565b611d8d601f8201601f1916602001611d20565b818152846020838601011115611da257600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215611dd257600080fd5b8235915060208301356001600160401b03811115611def57600080fd5b611dfb85828601611d50565b9150509250929050565b600081518084526020808501945080840160005b83811015611cd357815187529582019590820190600101611e19565b6020815260006117386020830184611e05565b60008060408385031215611e5b57600080fd5b82359150611e6b60208401611c63565b90509250929050565b60006001600160401b03821115611e8d57611e8d611d0a565b5060051b60200190565b600082601f830112611ea857600080fd5b81356020611ebd611eb883611e74565b611d20565b82815260059290921b84018101918181019086841115611edc57600080fd5b8286015b84811015611f1b5780356001600160401b03811115611eff5760008081fd5b611f0d8986838b0101611d50565b845250918301918301611ee0565b509695505050505050565b60008060008060008060008060006101208a8c031215611f4557600080fd5b8935985060208a01356001600160401b0380821115611f6357600080fd5b611f6f8d838e01611d50565b995060408c0135915080821115611f8557600080fd5b611f918d838e01611d50565b985060608c0135915080821115611fa757600080fd5b611fb38d838e01611e97565b975060808c0135915080821115611fc957600080fd5b611fd58d838e01611d50565b965060a08c0135915080821115611feb57600080fd5b611ff78d838e01611d50565b955060c08c0135945060e08c013591508082111561201457600080fd5b6120208d838e01611d50565b93506101008c013591508082111561203757600080fd5b506120448c828d01611d50565b9150509295985092959850929598565b6000806040838503121561206757600080fd5b61207083611c63565b946020939093013593505050565b6000815180845260005b818110156120a457602081850181015186830182015201612088565b818111156120b6576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038b168152610140602082018190526000906120f08382018d61207e565b90508281036040840152612104818c61207e565b9050896060840152881515608084015282810360a0840152612126818961207e565b905082810360c084015261213a818861207e565b905082810360e084015261214e818761207e565b90508461010084015282810361012084015261216a818561207e565b9d9c50505050505050505050505050565b602081526000611738602083018461207e565b600081518084526020808501808196508360051b8101915082860160005b858110156121d65782840389526121c484835161207e565b988501989350908401906001016121ac565b5091979650505050505050565b602081526000611738602083018461218e565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016122345761223461220c565b5060010190565b60608152600061224e6060830186611c9a565b82810360208401526122608186611e05565b90508281036040840152612274818561218e565b9695505050505050565b6000602080838503121561229157600080fd5b82516001600160401b038111156122a757600080fd5b8301601f810185136122b857600080fd5b80516122c6611eb882611e74565b81815260059190911b820183019083810190878311156122e557600080fd5b928401925b82841015612303578351825292840192908401906122ea565b979650505050505050565b6001600160a01b03841681526060602082018190526000906123329083018561207e565b9050826040830152949350505050565b600181811c9082168061235657607f821691505b60208210810361237657634e487b7160e01b600052602260045260246000fd5b50919050565b60008161238b5761238b61220c565b506000190190565b6060815260006123a66060830186611c9a565b82810360208401526123b88186611e05565b905082810360408401526122748185611e05565b6000828210156123de576123de61220c565b500390565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220d550b29a1fb1265e92351d0e5dc4e73bf7aa32dbeae4029876a1158d1fa8fe9264736f6c634300080d0033";

type GeocacheConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeocacheConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Geocache__factory extends ContractFactory {
  constructor(...args: GeocacheConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _creatorContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Geocache> {
    return super.deploy(_creatorContract, overrides || {}) as Promise<Geocache>;
  }
  override getDeployTransaction(
    _creatorContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_creatorContract, overrides || {});
  }
  override attach(address: string): Geocache {
    return super.attach(address) as Geocache;
  }
  override connect(signer: Signer): Geocache__factory {
    return super.connect(signer) as Geocache__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeocacheInterface {
    return new utils.Interface(_abi) as GeocacheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Geocache {
    return new Contract(address, _abi, signerOrProvider) as Geocache;
  }
}
