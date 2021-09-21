import web3 from './web3'

const address = '0xaD97D72ddb2F2C2298f1d885bD129E3B32A9C897'
//console.log(address)
const abi = [{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_startBlock","type":"uint256"},{"name":"_endBlock","type":"uint256"},{"name":"_ipfsHash","type":"string"},{"name":"_floorPrice","type":"uint256"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedAuctions","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedAuctions","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}]
// @ts-ignore

export default new web3.eth.Contract(abi, address);