pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

import "./SignatureChecker.sol";
import "./../tokens/IBridgeable.sol";

/// @author Franco Valencia
/// @title A Bridge contract between IMX and EVM compatible blockchains
contract IMXBridge is ReentrancyGuard, Ownable, Pausable, IERC721Receiver{

    using SafeERC20 for IERC20;

    event UpdatedSignerAddress(address indexed previousSigner, address indexed newSigner);

    event ERC20Deposited(address from, uint256 amount, address tokenAddress, uint256 destinationChainID);
    event ERC721Deposited(address from, uint256 id, address tokenAddress, uint256 destinationChainID);

    event ERC20Bridged(address to, uint256 amount, address tokenAddress);
    event ERC721Bridged(address to, uint256 id, address tokenAddress);

    uint public fee; // Fees charged for bridging assets to cover offchain costs
    address public signerAddress; 

    mapping (address => uint) public nonces;
    mapping (address => address) public registeredContracts;

    constructor(address _signerAddress) {
        signerAddress = _signerAddress;
    }

    /// @dev Returns the signer public address
    function getSignerAddress() public view returns (address) {
        return signerAddress;
    }

    /// @dev The bridge must be able to update the signer address 
    /// in case the signer private key is compromised.
    function setSignerAddress(address _signerAddress) external onlyOwner {
        address oldSigner = signerAddress;
        signerAddress = _signerAddress;
        _pause();
        emit OwnershipTransferred(oldSigner, _signerAddress);
    }

    /// @dev Returns the current fee
    function getFee() public view returns (uint) {
        return fee;
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

    /// @dev Registers a contract to on the bridge, the external chain is the
    /// address of the original contract, and the current chain is the
    /// address of the contract on the current chain
    function registerContract(address _tokenAddress, address _bridgedTokenAddress) public onlyOwner {
        registeredContracts[_tokenAddress] = _bridgedTokenAddress;
    }

    /// @dev Returns if the contract is registered
    function isRegistered(address _tokenAddress) public view returns (address) {
        return registeredContracts[_tokenAddress];
    }

    /// @dev Modifier for checking that the address is registered 
    modifier checkRegistered(address _tokenAddress) {
        require(registeredContracts[_tokenAddress] != address(0), "Contract is not registered");
        _;
    }

    /// @dev Modifier for checking that the transaction paid the required
    /// fee
    modifier paysFee() {
        require(msg.value >= fee, "Tx value lower than fee");
        _;
    }

    /// @dev A function to withdraw the fees from the contract
    function withdrawFees() public onlyOwner {
        address payable _to = payable(owner());
        _to.transfer(address(this).balance);
    }

    /// @dev Deposits an ERC20 token to the Bridge and proceeds to
    /// burn it
    function depositERC20(address _tokenAddress, uint256 _amount, uint256 _destinationChainID) external checkRegistered(_tokenAddress) nonReentrant whenNotPaused {
        require(_amount > 0, "Must deposit more than 0");
        address _bridgedTokenAddress = registeredContracts[_tokenAddress];
        require(IERC20(_bridgedTokenAddress).allowance(msg.sender, address(this)) >= _amount, "Insufficient ERC20 allowance");
        IERC20(_bridgedTokenAddress).safeTransferFrom(msg.sender, address(this), _amount);
        IERC20Bridgeable(_bridgedTokenAddress).burn(address(this), _amount);
        emit ERC20Deposited(msg.sender, _amount, _bridgedTokenAddress, _destinationChainID);
    }

    /// @dev Deposits an ERC721 token to the bridge contract 
    function depositERC721(address _tokenAddress, uint256 _id, uint256 _destinationChainID) external checkRegistered(_tokenAddress) nonReentrant whenNotPaused {
        address _bridgedTokenAddress = registeredContracts[_tokenAddress];
        IERC721(_bridgedTokenAddress).safeTransferFrom(msg.sender, address(this), _id);
        emit ERC721Deposited(msg.sender, _id, _bridgedTokenAddress, _destinationChainID);
    }

    function onERC721Received(address, address, uint256, bytes memory) public pure override returns(bytes4) {
       return this.onERC721Received.selector;
    }

    /// @dev withdraws an ERC20 token from IMX to this chain
    function withdrawERC20(address _to, address _tokenAddress, uint _amount, bytes memory _signature) external payable paysFee checkRegistered(_tokenAddress) nonReentrant whenNotPaused {

        address _bridgedTokenAddress = registeredContracts[_tokenAddress];
        uint _nonce = getNonce(_to);
        bool valid = SignatureChecker.verifyERC20Withdrawal(signerAddress, _to, _tokenAddress, _amount, _nonce, block.chainid, _signature);
        require(valid, "Invalid signature");

        IERC20Bridgeable _erc20Bridgeable = IERC20Bridgeable(_bridgedTokenAddress); 
        _erc20Bridgeable.mintFor(_to, _amount);

        nonces[_to] = nonces[_to] +1;
        emit ERC20Bridged(_to, _amount, _bridgedTokenAddress);
    }

    /// @dev withdraws an ERC721 token from IMX to this chain
    function withdrawERC721(address _to, address _tokenAddress, uint _tokenId, bytes memory _signature) external payable paysFee checkRegistered(_tokenAddress) nonReentrant whenNotPaused{

        address _bridgedTokenAddress = registeredContracts[_tokenAddress];
        uint _nonce = getNonce(_to);
        bool valid = SignatureChecker.verifyERC721Withdrawal(signerAddress, _to, _tokenAddress, _tokenId, _nonce, block.chainid, _signature);
        require(valid, "Invalid signature");

        // Check if the ERC721 is on the vault, otherwise mint it
        IERC721 _erc721 = IERC721(_bridgedTokenAddress); 

        try _erc721.ownerOf(_tokenId) returns (address _owner) {
            require(_owner == address(this), "ERC721 is not on the vault");
            _erc721.safeTransferFrom(address(this), _to, _tokenId);
        } catch {
            IERC721Bridgeable _erc721Bridgeable = IERC721Bridgeable(_bridgedTokenAddress);
            _erc721Bridgeable.mintFor(_to, _tokenId);
        }

        nonces[_to] = nonces[_to] + 1;
        emit ERC721Bridged(_to, _tokenId, _bridgedTokenAddress);
    }
}