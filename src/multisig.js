const { ethers } = require("ethers");
const ABI = ["function getOwners() view returns (address[])"];
class MultisigChecker {
  constructor(rpc) { this.provider = new ethers.JsonRpcProvider(rpc); }
  async check(addr) { return addr; }
}
module.exports = { MultisigChecker };
// v0.31
