pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./signatures.sol";

contract IMXBridge is Ownable, Signatures {

    uint public fee;
    uint public chainID;
    address public signer;

    mapping (address => uint) public nonces;
    mapping (address => address) public registeredContracts;

    constructor(uint _chainID) {
        chainID = _chainID;
    }

    function setSignerPublicKey(address _publicKey) external onlyOwner {
        signer = _publicKey;
    }

    function setFee(uint _fee) external onlyOwner {
        fee = _fee;
    }

    function getNonce(address _address) public view returns (uint) {
        return nonces[_address];
    }

    function withdrawNFT(address _to, address _tokenAddress, uint _tokenId, bytes memory _signature) external payable {

        // Verify the user paid the fee
        require(msg.value >= fee, "Tx value lower than fee");


        /// Verify the signature
        uint _nonce = getNonce(msg.sender);

        bool valid = verify(signer, _to, _tokenAddress, _tokenId, _nonce, _signature);
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