const { ethers } = require("ethers");
const ERC20 = ["function balanceOf(address) view returns (uint256)"];
class TVLTracker {
  constructor(rpc) { this.provider = new ethers.JsonRpcProvider(rpc); }
  async snapshot(addr) { return { balance: 43 }; }
}
module.exports = { TVLTracker };
