// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IMXBridgeableERC721.sol";

contract BridgeableNFT is ERC721, Ownable, IMXBridgeableERC721 {

    string public baseTokenURI;

    constructor(string memory _name, string memory _symbol, address _imxBridgeAddress) 
    ERC721(_name, _symbol) IMXBridgeableERC721(_imxBridgeAddress) {}


    /// @dev This is the function called by the IMXBridge
    function _mintFor(address _to, uint256 _id) internal override {
        _safeMint(_to, _id);
    }

    /// @dev Overwrite the ERC721 implementation of _baseURI to get the 
    /// base URL from a variable
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    /// @dev Allow the contract owner to update the BaseTokenURI in case of 
    /// changes to the metadata or for late reveal
    function setBaseTokenURI(string memory uri) public onlyOwner {
        baseTokenURI = uri;
    }
}
