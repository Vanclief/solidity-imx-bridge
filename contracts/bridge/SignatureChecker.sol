pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

library SignatureChecker {

    /// @dev Gets the message hash for an ERC20 Withdrawal
    function _getERC20MessageHash(
        address _to,
        address _tokenAddress,
        uint _amount,
        uint _nonce,
        uint _chainId
    ) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _tokenAddress, _amount, _nonce, _chainId));
    }

    /// @dev Verifies the signature for an ERC20 Withdrawal
    function verifyERC20Withdrawal(
        address _signer,
        address _to,
        address _tokenAddress,
        uint _amount,
        uint _nonce,
        uint _chainId,
        bytes memory _signature
    ) internal pure returns (bool) {
        bytes32 _messageHash = _getERC20MessageHash(_to, _tokenAddress, _amount, _nonce, _chainId);
        return _verify(_signer, _messageHash, _signature);
    }

    /// @dev Gets the message hash for an ERC721 Withdrawal
    function _getERC721MessageHash(
        address _to,
        address _tokenAddress,
        uint _tokenID,
        uint _nonce,
        uint _chainId
    ) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _tokenAddress, _tokenID, _nonce, _chainId));
    }

    /// @dev Verifies the signature for an ERC721 Withdrawal
    function verifyERC721Withdrawal(
        address _signer,
        address _to,
        address _tokenAddress,
        uint _tokenID,
        uint _nonce,
        uint _chainId,
        bytes memory _signature
    ) internal pure returns (bool) {
        bytes32 _messageHash = _getERC721MessageHash(_to, _tokenAddress, _tokenID, _nonce, _chainId);
        return _verify(_signer, _messageHash, _signature);
    }

    function _verify(address _signer, bytes32 _messageHash, bytes memory _signature) private pure returns (bool) {
        bytes32 _signedMessageHash = ECDSA.toEthSignedMessageHash(_messageHash);
        return ECDSA.recover(_signedMessageHash, _signature) == _signer;
    }
}