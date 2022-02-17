pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./SignatureChecker.sol";
import "hardhat/console.sol"; // TODO: Remove only for debug


/// @author Franco Valencia
/// @title A Bridge contract 
contract IMXBridge is Ownable, SignatureChecker {

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

    function setFee(uint _fee) external onlyOwner {
        fee = _fee;
    }

    function getNonce(address _address) public view returns (uint) {
        return nonces[_address];
    }

    function withdrawNFT(address _to, address _tokenAddress, uint _tokenId, bytes memory _signature) external payable {

        require(msg.value >= fee, "Tx value lower than fee");

        /// Verify the signature
        uint _nonce = getNonce(msg.sender);

        bool valid = verify(signerAddress, _to, _tokenAddress, _tokenId, _nonce, _signature);
        require(valid, "Invalid signature");

        // If its valid send the NFT and increment the nonce
        IERC721 _nftContract = IERC721(_tokenAddress); 

            // Check if the NFT is on the vault
        try _nftContract.ownerOf(_tokenId) returns (address _owner) {
            require(_owner == address(this));
        } catch {

        }
        // _nftContract.bridgeMint(_to, _tokenID);

        // _nftContract.bridgeMint(_to, _tokenID);


    }




}