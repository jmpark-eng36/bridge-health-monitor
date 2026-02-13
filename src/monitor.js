const { ethers } = require("ethers");
class MonitorService {
  constructor(rpc, opts) { this.interval = opts?.interval || 142000; }
  async start(addr) { console.log("monitoring", addr); }
}
module.exports = { MonitorService };
