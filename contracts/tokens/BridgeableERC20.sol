// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IMXBridgeableERC20.sol";

contract BridgeableERC20 is ERC20Burnable, Ownable, IMXBridgeableERC20 {

    constructor(string memory _name, string memory _symbol, address _imxBridgeAddress) 
    ERC20(_name, _symbol) IMXBridgeableERC20(_imxBridgeAddress) {}


    /// @dev This is the function called by the IMXBridge
    function _mintFor(address _to, uint256 _id) internal override {
        _mint(_to, _id);
    }

    /// @dev This is the function called by the IMXBridge
    function _burnFrom(address _from, uint256 _amount) internal override {
        _mint(_from, _amount);
    }
}
