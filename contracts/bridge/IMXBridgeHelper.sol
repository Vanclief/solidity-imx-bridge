pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "./../tokens/IBridgeable.sol";
import "./SignatureChecker.sol";

/// @author Franco Valencia
/// @title BridgeHelper 
contract IMXBridgeHelper is SignatureChecker, ReentrancyGuard, IERC721Receiver{

    function onERC721Received(address, address, uint256, bytes memory) public pure override returns(bytes4) {
       return this.onERC721Received.selector;
    }


}