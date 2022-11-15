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
        name: "id",
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
  "0x60a06040523480156200001157600080fd5b5060405162002541380380620025418339810160408190526200003491620000a1565b6200003f3362000051565b6001600160a01b0316608052620000d3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b457600080fd5b81516001600160a01b0381168114620000cc57600080fd5b9392505050565b60805161243d62000104600039600081816101b10152818161096401528181610e6c0152611924015261243d6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806380b501b3116100b8578063c1361b671161007c578063c1361b67146102fd578063cb948fc514610306578063e9dc63751461030f578063efa3c8b41461032f578063f2fde38b1461034f578063fa5ab3791461036257600080fd5b806380b501b31461028a57806380e604e81461029d5780638da5cb5b146102b0578063996f12de146102c15780639e6e7a0b146102ea57600080fd5b80635620749f1161010a5780635620749f146101eb5780636325ce2f146102195780636d73e6691461022c578063715018a61461023f5780637a50fc4a146102475780637f49cac01461025c57600080fd5b806301ffc9a71461014757806324d7806c1461016f5780632d3456701461018257806331ae450b146101975780633dae35ce146101ac575b600080fd5b61015a610155366004611c47565b610375565b60405190151581526020015b60405180910390f35b61015a61017d366004611c8d565b6103d6565b610195610190366004611c8d565b61040f565b005b61019f61046d565b6040516101669190611cec565b6101d37f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610166565b61020b6101f9366004611cff565b60066020526000908152604090205481565b604051908152602001610166565b610195610227366004611dcd565b61051b565b61019561023a366004611c8d565b61056e565b6101956105c6565b61024f6105da565b6040516101669190611e43565b61015a61026a366004611e56565b600760209081526000928352604080842090915290825290205460ff1681565b610195610298366004611f34565b610694565b61020b6102ab366004612062565b610a3c565b6000546001600160a01b03166101d3565b6102d46102cf366004611cff565b610a6d565b6040516101669a999897969594939291906120d9565b61024f6102f8366004611c8d565b610dfc565b61020b60045481565b61020b60035481565b61032261031d366004612062565b610e68565b6040516101669190612189565b61034261033d366004611cff565b610f4a565b60405161016691906121f1565b61019561035d366004611c8d565b611039565b610195610370366004611e56565b6110b4565b60006001600160e01b0319821663e9dc637560e01b14806103a657506001600160e01b031982166354c1bcd960e01b145b806103c157506001600160e01b031982166301ffc9a760e01b145b806103d057506103d0826116f3565b92915050565b6000816001600160a01b03166103f46000546001600160a01b031690565b6001600160a01b031614806103d057506103d0600183611728565b61041761174d565b610422600182611728565b1561046a5760405133906001600160a01b038316907f7c0c3c84c67c85fcac635147348bfe374c24a1a93d0366d1cfe9d8853cbf89d590600090a36104686001826117a7565b505b50565b606061047960016117bc565b6001600160401b0381111561049057610490611d18565b6040519080825280602002602001820160405280156104b9578160200160208202803683370190505b50905060005b6104c960016117bc565b811015610517576104db6001826117c6565b8282815181106104ed576104ed612204565b6001600160a01b03909216602092830291909101909101528061050f81612230565b9150506104bf565b5090565b600082815260056020526040902080546001600160a01b03163314610553576040516393687c0b60e01b815260040160405180910390fd5b81516105689060018301906020850190611b02565b50505050565b61057661174d565b610581600182611728565b61046a5760405133906001600160a01b038316907f7e1a1a08d52e4ba0e21554733d66165fd5151f99460116223d9e3a608eec5cb190600090a36104686001826117d2565b6105ce61174d565b6105d860006117e7565b565b606060006004546001600160401b038111156105f8576105f8611d18565b604051908082528060200260200182016040528015610621578160200160208202803683370190505b5090506000805b60035481101561068c576000818152600560205260409020600481015460ff1615610679578184848151811061066057610660612204565b60209081029190910101528261067581612230565b9350505b508061068481612230565b915050610628565b509092915050565b604080516101608101825233815260208082018b81528284018b9052606083018d905260016080840181905260a084018a905260c0840189905260e084018b905261010084018790526101208401889052610140840186905260035460009081526005845294909420835181546001600160a01b0319166001600160a01b03909116178155905180519394919361073393928501929190910190611b02565b506040820151805161074f916002840191602090910190611b02565b5060608201516003820155608082015160048201805460ff191691151591909117905560a0820151805161078d916005840191602090910190611b02565b5060c082015180516107a9916006840191602090910190611b02565b5060e082015180516107c5916007840191602090910190611b82565b5061010082015180516107e2916008840191602090910190611b02565b506101208201516009820155610140820151805161080a91600a840191602090910190611b02565b5050336000908152600860209081526040822060038054825460018101845592855292842090910191909155805492509061084483612230565b90915550506004805490600061085983612230565b909155505060408051600180825281830190925260009160208083019080368337019050509050338160008151811061089457610894612204565b6001600160a01b0392909216602092830291909101909101526040805160018082528183019092526000918160200160208202803683370190505090506001816000815181106108e6576108e6612204565b6020908102919091010152604080516001808252818301909252600091816020015b6060815260200190600190039081610908579050509050604051806020016040528060008152508160008151811061094257610942612204565b6020908102919091010152604051634637423960e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638c6e84729061099d90869086908690600401612249565b6000604051808303816000875af11580156109bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109e4919081019061228c565b507f6eb6ad71f0a3b9f2fa6652a096ca4bd0851eb41211391b7aab2e8564794aac2a33866001600354610a17919061231c565b604051610a2693929190612333565b60405180910390a1505050505050505050505050565b60086020528160005260406000208181548110610a5857600080fd5b90600052602060002001600091509150505481565b600560205260009081526040902080546001820180546001600160a01b039092169291610a9990612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac590612367565b8015610b125780601f10610ae757610100808354040283529160200191610b12565b820191906000526020600020905b815481529060010190602001808311610af557829003601f168201915b505050505090806002018054610b2790612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5390612367565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b50505050600383015460048401546005850180549495929460ff909216935090610bc990612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf590612367565b8015610c425780601f10610c1757610100808354040283529160200191610c42565b820191906000526020600020905b815481529060010190602001808311610c2557829003601f168201915b505050505090806006018054610c5790612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8390612367565b8015610cd05780601f10610ca557610100808354040283529160200191610cd0565b820191906000526020600020905b815481529060010190602001808311610cb357829003601f168201915b505050505090806008018054610ce590612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1190612367565b8015610d5e5780601f10610d3357610100808354040283529160200191610d5e565b820191906000526020600020905b815481529060010190602001808311610d4157829003601f168201915b50505050509080600901549080600a018054610d7990612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610da590612367565b8015610df25780601f10610dc757610100808354040283529160200191610df2565b820191906000526020600020905b815481529060010190602001808311610dd557829003601f168201915b505050505090508a565b6001600160a01b038116600090815260086020908152604091829020805483518184028101840190945280845260609392830182828015610e5c57602002820191906000526020600020905b815481526020019060010190808311610e48575b50505050509050919050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b031614610ea857600080fd5b60008281526005602052604090206001018054610ec490612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef090612367565b8015610f3d5780601f10610f1257610100808354040283529160200191610f3d565b820191906000526020600020905b815481529060010190602001808311610f2057829003601f168201915b5050505050905092915050565b606060056000838152602001908152602001600020600701805480602002602001604051908101604052809291908181526020016000905b8282101561102e578382906000526020600020018054610fa190612367565b80601f0160208091040260200160405190810160405280929190818152602001828054610fcd90612367565b801561101a5780601f10610fef5761010080835404028352916020019161101a565b820191906000526020600020905b815481529060010190602001808311610ffd57829003601f168201915b505050505081526020019060010190610f82565b505050509050919050565b61104161174d565b6001600160a01b0381166110ab5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61046a816117e7565b6110bc61174d565b60035482106110de57604051634a1850bf60e11b815260040160405180910390fd5b60008281526007602090815260408083206001600160a01b038516845290915290205460ff161561112257604051634641bb4760e01b815260040160405180910390fd5b60008281526005602090815260408083208151610160810190925280546001600160a01b03168252600181018054929391929184019161116190612367565b80601f016020809104026020016040519081016040528092919081815260200182805461118d90612367565b80156111da5780601f106111af576101008083540402835291602001916111da565b820191906000526020600020905b8154815290600101906020018083116111bd57829003601f168201915b505050505081526020016002820180546111f390612367565b80601f016020809104026020016040519081016040528092919081815260200182805461121f90612367565b801561126c5780601f106112415761010080835404028352916020019161126c565b820191906000526020600020905b81548152906001019060200180831161124f57829003601f168201915b505050918352505060038201546020820152600482015460ff16151560408201526005820180546060909201916112a290612367565b80601f01602080910402602001604051908101604052809291908181526020018280546112ce90612367565b801561131b5780601f106112f05761010080835404028352916020019161131b565b820191906000526020600020905b8154815290600101906020018083116112fe57829003601f168201915b5050505050815260200160068201805461133490612367565b80601f016020809104026020016040519081016040528092919081815260200182805461136090612367565b80156113ad5780601f10611382576101008083540402835291602001916113ad565b820191906000526020600020905b81548152906001019060200180831161139057829003601f168201915b5050505050815260200160078201805480602002602001604051908101604052809291908181526020016000905b828210156114875783829060005260206000200180546113fa90612367565b80601f016020809104026020016040519081016040528092919081815260200182805461142690612367565b80156114735780601f1061144857610100808354040283529160200191611473565b820191906000526020600020905b81548152906001019060200180831161145657829003601f168201915b5050505050815260200190600101906113db565b50505050815260200160088201805461149f90612367565b80601f01602080910402602001604051908101604052809291908181526020018280546114cb90612367565b80156115185780601f106114ed57610100808354040283529160200191611518565b820191906000526020600020905b8154815290600101906020018083116114fb57829003601f168201915b5050505050815260200160098201548152602001600a8201805461153b90612367565b80601f016020809104026020016040519081016040528092919081815260200182805461156790612367565b80156115b45780601f10611589576101008083540402835291602001916115b4565b820191906000526020600020905b81548152906001019060200180831161159757829003601f168201915b505050505081525050905080608001516115e15760405163d7c0312f60e01b815260040160405180910390fd5b60008381526006602052604081208054916115fb83612230565b909155505060008381526007602090815260408083206001600160a01b03861684528252808320805460ff191660011790556060840151868452600690925290912054036116715760008381526005602052604081206004908101805460ff19169055805490919061166c906123a1565b909155505b61167b8383611837565b6001600160a01b0382166000818152600860209081526040808320805460018101825590845282842001879055868352600682529182902054825193845290830186905282820152517f7ed2deb7015f264677924005fd808fb4d654bcd7a3ba0a12ede865d506f962df9181900360600190a1505050565b60006001600160e01b03198216632a9f3abf60e11b14806103d057506301ffc9a760e01b6001600160e01b03198316146103d0565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000546001600160a01b031633146105d85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016110a2565b6000611746836001600160a01b038416611996565b60006103d0825490565b60006117468383611a89565b6000611746836001600160a01b038416611ab3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051600180825281830190925260009160208083019080368337019050509050818160008151811061186d5761186d612204565b6001600160a01b03929092166020928302919091019091015260408051600180825281830190925260009181602001602082028036833701905050905083816000815181106118be576118be612204565b602090810291909101015260408051600180825281830190925260009181602001602082028036833701905050905060018160008151811061190257611902612204565b60209081029190910101526040516339b2213760e21b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e6c884dc9061195d908690869086906004016123b8565b600060405180830381600087803b15801561197757600080fd5b505af115801561198b573d6000803e3d6000fd5b505050505050505050565b60008181526001830160205260408120548015611a7f5760006119ba60018361231c565b85549091506000906119ce9060019061231c565b9050818114611a335760008660000182815481106119ee576119ee612204565b9060005260206000200154905080876000018481548110611a1157611a11612204565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a4457611a446123f1565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103d0565b60009150506103d0565b6000826000018281548110611aa057611aa0612204565b9060005260206000200154905092915050565b6000818152600183016020526040812054611afa575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103d0565b5060006103d0565b828054611b0e90612367565b90600052602060002090601f016020900481019282611b305760008555611b76565b82601f10611b4957805160ff1916838001178555611b76565b82800160010185558215611b76579182015b82811115611b76578251825591602001919060010190611b5b565b50610517929150611bdb565b828054828255906000526020600020908101928215611bcf579160200282015b82811115611bcf5782518051611bbf918491602090910190611b02565b5091602001919060010190611ba2565b50610517929150611bf0565b5b808211156105175760008155600101611bdc565b80821115610517576000611c048282611c0d565b50600101611bf0565b508054611c1990612367565b6000825580601f10611c29575050565b601f01602090049060005260206000209081019061046a9190611bdb565b600060208284031215611c5957600080fd5b81356001600160e01b03198116811461174657600080fd5b80356001600160a01b0381168114611c8857600080fd5b919050565b600060208284031215611c9f57600080fd5b61174682611c71565b600081518084526020808501945080840160005b83811015611ce15781516001600160a01b031687529582019590820190600101611cbc565b509495945050505050565b6020815260006117466020830184611ca8565b600060208284031215611d1157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611d5657611d56611d18565b604052919050565b600082601f830112611d6f57600080fd5b81356001600160401b03811115611d8857611d88611d18565b611d9b601f8201601f1916602001611d2e565b818152846020838601011115611db057600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215611de057600080fd5b8235915060208301356001600160401b03811115611dfd57600080fd5b611e0985828601611d5e565b9150509250929050565b600081518084526020808501945080840160005b83811015611ce157815187529582019590820190600101611e27565b6020815260006117466020830184611e13565b60008060408385031215611e6957600080fd5b82359150611e7960208401611c71565b90509250929050565b60006001600160401b03821115611e9b57611e9b611d18565b5060051b60200190565b600082601f830112611eb657600080fd5b81356020611ecb611ec683611e82565b611d2e565b82815260059290921b84018101918181019086841115611eea57600080fd5b8286015b84811015611f295780356001600160401b03811115611f0d5760008081fd5b611f1b8986838b0101611d5e565b845250918301918301611eee565b509695505050505050565b60008060008060008060008060006101208a8c031215611f5357600080fd5b8935985060208a01356001600160401b0380821115611f7157600080fd5b611f7d8d838e01611d5e565b995060408c0135915080821115611f9357600080fd5b611f9f8d838e01611d5e565b985060608c0135915080821115611fb557600080fd5b611fc18d838e01611ea5565b975060808c0135915080821115611fd757600080fd5b611fe38d838e01611d5e565b965060a08c0135915080821115611ff957600080fd5b6120058d838e01611d5e565b955060c08c0135945060e08c013591508082111561202257600080fd5b61202e8d838e01611d5e565b93506101008c013591508082111561204557600080fd5b506120528c828d01611d5e565b9150509295985092959850929598565b6000806040838503121561207557600080fd5b61207e83611c71565b946020939093013593505050565b6000815180845260005b818110156120b257602081850181015186830182015201612096565b818111156120c4576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b038b168152610140602082018190526000906120fe8382018d61208c565b90508281036040840152612112818c61208c565b9050896060840152881515608084015282810360a0840152612134818961208c565b905082810360c0840152612148818861208c565b905082810360e084015261215c818761208c565b905084610100840152828103610120840152612178818561208c565b9d9c50505050505050505050505050565b602081526000611746602083018461208c565b600081518084526020808501808196508360051b8101915082860160005b858110156121e45782840389526121d284835161208c565b988501989350908401906001016121ba565b5091979650505050505050565b602081526000611746602083018461219c565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016122425761224261221a565b5060010190565b60608152600061225c6060830186611ca8565b828103602084015261226e8186611e13565b90508281036040840152612282818561219c565b9695505050505050565b6000602080838503121561229f57600080fd5b82516001600160401b038111156122b557600080fd5b8301601f810185136122c657600080fd5b80516122d4611ec682611e82565b81815260059190911b820183019083810190878311156122f357600080fd5b928401925b82841015612311578351825292840192908401906122f8565b979650505050505050565b60008282101561232e5761232e61221a565b500390565b6001600160a01b03841681526060602082018190526000906123579083018561208c565b9050826040830152949350505050565b600181811c9082168061237b57607f821691505b60208210810361239b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000816123b0576123b061221a565b506000190190565b6060815260006123cb6060830186611ca8565b82810360208401526123dd8186611e13565b905082810360408401526122828185611e13565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ba44055fc21d5f08ea731e73438a680375dae14fd3f2a268c19fd844ee55c54d64736f6c634300080d0033";

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
