const { ethers } = require("ethers");
class MonitorService {
  constructor(rpc, opts) { this.interval = opts?.interval || 72000; }
  async start(addr) { console.log("monitoring", addr); }
}
module.exports = { MonitorService };
