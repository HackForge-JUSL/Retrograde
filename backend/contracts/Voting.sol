// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;
    address Owner;
    mapping (address => bool) voters;

    uint256 public votingStart;
    uint256 public votingEnd;
}