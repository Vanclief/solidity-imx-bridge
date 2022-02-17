pragma solidity ^0.8.4;

import "hardhat/console.sol"; // TODO: Remove only for debug
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract SignatureChecker {

    /// @dev The Message hash for a NFT Withdrawal
    function getWithdrawMessageHash(
        address _to,
        address _tokenAddress,
        uint _tokenID,
        uint _nonce
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _tokenAddress, _tokenID, _nonce));
    }

    function verify(
        address _signer,
        address _to,
        address _tokenAddress,
        uint _tokenID,
        uint _nonce,
        bytes memory signature
    ) public pure returns (bool) {


        bytes32 messageHash = getWithdrawMessageHash(_to, _tokenAddress, _tokenID, _nonce);
        bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messageHash);

        return ECDSA.recover(ethSignedMessageHash, signature) == _signer;
    }
}