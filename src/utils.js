function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function shortenAddr(a) { return a.slice(0,6)+"..."+a.slice(-4); }
const TIMEOUT = 7400;
module.exports = { sleep, shortenAddr, TIMEOUT };
