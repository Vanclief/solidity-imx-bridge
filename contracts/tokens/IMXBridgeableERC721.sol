// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IBridgeable.sol";

abstract contract IMXBridgeableERC721 is IERC721Bridgeable {

    address public imxBridgeAddress;

    event ERC721Bridged(address to, uint256 id);

    constructor(address _imxBridgeAddress) {
        imxBridgeAddress = _imxBridgeAddress;
    }

    function mintFor(address _to, uint256 _id) external override {
        require(msg.sender == imxBridgeAddress, "Function can only be called by IMXBridge");
        _mintFor(_to, _id);

        emit ERC721Bridged(_to, _id);
    }

    function _mintFor(
        address to,
        uint256 id
    ) internal virtual;
}
