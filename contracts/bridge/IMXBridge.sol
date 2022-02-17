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

    event ERC720Bridged(address to, uint256 amount);
    event ERC721Bridged(address to, uint256 id);

    uint public fee; // Fees charged for bridging assets to cover offchain costs
    uint public chainID; // The chain ID where this contract is deployed
    address public signerAddress; 

    mapping (address => uint) public nonces;
    mapping (address => address) public registeredContracts;

    constructor(address _signerAddress, uint _chainID) {
        signerAddress = _signerAddress;
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

    /// @dev Modifier for checking that the transaction paid the required
    /// fee
    modifier paysFee() {
        require(msg.value >= fee, "Tx value lower than fee");
        _;
    }

    function withdrawERC20() external payable paysFee() {

    }

    function withdrawERC721(address _to, address _tokenAddress, uint _tokenId, bytes memory _signature) external payable paysFee(){

        uint _nonce = getNonce(msg.sender);
        bool valid = _verifyERC721Withdrawal(signerAddress, _to, _tokenAddress, _tokenId, _nonce, _signature);
        require(valid, "Invalid signature");

        IERC721 _erc721 = IERC721(_tokenAddress); 

        // Check if the NFT is on the vault
        try _erc721.ownerOf(_tokenId) returns (address _owner) {
            require(_owner == address(this), "ERC721 is not on the vault");
            _erc721.safeTransferFrom(address(this), _to, _tokenId);
        } catch {
            IERC721Bridgeable _erc721Bridgeable = IERC721Bridgeable(_tokenAddress);
            _erc721Bridgeable.mintFor(_to, _tokenId);
        }

        emit ERC721Bridged(_to, _tokenId);
        nonces[_to] = nonces[_to].add(1);
    }

}