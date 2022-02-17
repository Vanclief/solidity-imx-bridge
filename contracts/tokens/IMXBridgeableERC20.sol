// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IBridgeable.sol";

abstract contract IMXBridgeableERC20 is IERC20Bridgeable {

    address public imxBridgeAddress;

    event ERC20Bridged(address to, uint256 amount);

    constructor(address _imxBridgeAddress) {
        imxBridgeAddress = _imxBridgeAddress;
    }

    function mintFor(address _to, uint256 _amount) external override {
        require(msg.sender == imxBridgeAddress, "Function can only be called by IMXBridge");
        _mintFor(_to, _amount);

        emit ERC20Bridged(_to, _amount);
    }

    function _mintFor(
        address to,
        uint256 amount
    ) internal virtual;
}
