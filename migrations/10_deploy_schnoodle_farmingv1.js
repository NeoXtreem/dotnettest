// migrations/10_deploy_schnoodle_farmingv1.js

const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');
const contractName = 'SchnoodleFarmingV1';

module.exports = async function (deployer, network) {
  const Schnoodle = artifacts.require('SchnoodleV1');
  const schnoodle = await Schnoodle.deployed();

  // Deploy proxy contract
  const Contract = artifacts.require(contractName);
  const proxy = await deployProxy(Contract, [schnoodle.address], { deployer });
  if (network === 'develop') return;

  // Transfer ownership of contract to SchnoodleGovernance
  const SchnoodleGovernance = artifacts.require('SchnoodleGovernance');
  await (await Contract.deployed()).transferOwnership((await SchnoodleGovernance.deployed()).address);

  const { appendList } = require('../scripts/contracts.js');
  appendList(`${contractName}@${await (await admin.getInstance()).getProxyImplementation(proxy.address)}`, network);
};
