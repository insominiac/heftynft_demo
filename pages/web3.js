const assert = require('assert');
const Web3 = require('web3');
//window.ethereum.enable();

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export default web3;
