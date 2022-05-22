// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";
import "./Box.sol";

contract BoxV2 is Box, BaseRelayRecipient {
    //    address public trustForwarder;

    //    constructor(address _trustedForwarder) public{
    //        trustForwarder = _trustedForwarder;
    //    }
    //    mapping(address => mapping(bytes4 => bool)) private permissions;

    function setTrustedForwarder(address _trustedForwarder)public{
        _setTrustedForwarder(_trustedForwarder);
    }

    function versionRecipient() external pure override returns(string memory){
        return "1";
    }
}