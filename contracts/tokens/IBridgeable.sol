// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/// @dev IBridgeable contains the interface that are necessary for 
/// withdrawal of IMX-minted tokens to L1

interface IERC20Bridgeable {
    function mintFor(address to, uint256 amount) external;
}

interface IERC721Bridgeable {
    function mintFor(address to, uint256 id) external;
}
