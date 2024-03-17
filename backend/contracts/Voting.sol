// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Voter {
        bool exists;
        bool casted;
        string voted_party;
    }

    struct Party {
        bool exists;
        uint128 num_of_votes;
    }

    event VoteCasted(address indexed voter, uint256 time_of_vote);

    string[] parties;
    address private EC;
    uint256 start_time;
    uint256 end_time;

    mapping(string => Party) private p_parties;
    mapping(address => Voter) private p_voters;

    constructor(
        string[] memory _parties,
        uint256 _start_time,
        uint256 _durationInHours,
        address[] memory _voters
    ) {
        for (uint i = 0; i < _parties.length; ++i) {
            p_parties[_parties[i]].exists = true;
        }
        for (uint i = 0; i < _voters.length; ++i) {
            p_voters[_voters[i]].exists = true;
        }
        parties = _parties;
        EC = msg.sender;
        start_time = _start_time;
        end_time = _start_time + _durationInHours * 1 hours;
    }

    modifier only_if_owner() {
        require(msg.sender == EC, "Only contract owner can execute this");
        _;
    }

    modifier only_if_eligible_to_vote() {
        require(
            p_voters[msg.sender].exists == true,
            "You are not in the voter list."
        );
        require(
            p_voters[msg.sender].casted == false,
            "Your vote has already been casted."
        );
        require(
            block.timestamp > start_time && block.timestamp < end_time,
            "Voting window is closed."
        );
        _;
    }

    function castVote(
        string memory party_name
    ) external only_if_eligible_to_vote {
        p_voters[msg.sender].casted = true;
        p_voters[msg.sender].voted_party = party_name;
        ++p_parties[party_name].num_of_votes;

        emit VoteCasted(msg.sender, block.timestamp);
    }

    function addParty(string memory party_name) external only_if_owner {
        require(!p_parties[party_name].exists, "Party already exists");
        p_parties[party_name].exists = true;
        parties.push(party_name);
    }

    function addVoter(address voter_address) external only_if_owner {
        require(!p_voters[msg.sender].exists, "Voter already exists");
        p_voters[voter_address].exists = true;
    }

    function getParties() external view returns (string[] memory) {
        return parties;
    }

    function getParty(
        string memory party_name
    ) external view returns (Party memory) {
        return p_parties[party_name];
    }
}
