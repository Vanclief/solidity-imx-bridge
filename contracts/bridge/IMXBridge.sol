pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./SignatureChecker.sol";
import "./../tokens/IBridgeable.sol";
import "hardhat/console.sol"; // TODO: Remove only for debug


/// @author Franco Valencia
/// @title A Bridge contract between IMX and EVM compatible blockchains
contract IMXBridge is Ownable, SignatureChecker {

    using SafeMath for uint256;

    uint public fee;
    uint public chainID;
    address public signerAddress;

    mapping (address => uint) public nonces;
    mapping (address => address) public registeredContracts;

    constructor(uint _chainID) {
        chainID = _chainID;
    }

    function getSignerAddress() public view returns (address) {
        return signerAddress;
    }

    /// @dev The bridge must be able to update the signer address 
    /// in case the signer private key is compromised.
    function setSignerAddress(address _signerAddress) external onlyOwner {
        signerAddress = _signerAddress;
    }

    /// @dev Set the fee that is required from the caller to execute a 
    /// withdraw transaction
    function setFee(uint _fee) external onlyOwner {
        fee = _fee;
    }

    /// @dev Get the current nonce for the address that is requesting an
    /// asset withdraw
    function getNonce(address _address) public view returns (uint) {
        return nonces[_address];
    }

    modifier paysFee() {
        require(msg.value >= fee, "Tx value lower than fee");
        _;
    }

    function withdrawNFT(address _to, address _tokenAddress, uint _tokenId, bytes memory _signature) external payable paysFee(){

        // Validate the signature
        uint _nonce = getNonce(msg.sender);
        bool valid = verify(signerAddress, _to, _tokenAddress, _tokenId, _nonce, _signature);
        require(valid, "Invalid signature");

        // Transfer the asset
        IERC721 _erc721 = IERC721(_tokenAddress); 

        // Check if the NFT is on the vault
        try _erc721.ownerOf(_tokenId) returns (address _owner) {
            console.log("owner", _owner);
            require(_owner == address(this));
        } catch {
            console.log("Catch");
            IERC721Bridgeable _erc721Bridgeable = IERC721Bridgeable(_tokenAddress);
            _erc721Bridgeable.mintFor(_to, _tokenId);
        }
        // _nftContract.bridgeMint(_to, _tokenID);

        nonces[_to] = nonces[_to].add(1);

    }




}