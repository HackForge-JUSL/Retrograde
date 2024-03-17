const { ethers } = require('ethers');

async function main() {  
  const abi = require('./build/contracts/Voting.json').abi;
  const bytecode = require('./build/contracts/Voting.json').bytecode;
  
  const Voting = new ethers.ContractFactory(abi, bytecode, wallet);

  const _parties = ["Mark", "Mike", "Henry", "Rock"];
  const _start_time = Math.floor(Date.now() / 1000);
  const _durationInHours = 90;
  const _voters = ["0x414478223a5eb2c5a6cc3d7df3684e952165d996", "0x414478223a5eb2c5a6cc3d7df3684e952165d996"];
  const VotingInstance = await Voting.deploy(_parties, _start_time, _durationInHours, _voters);

  await VotingInstance.deployed();
  console.log('Contract deployed to:', VotingInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
