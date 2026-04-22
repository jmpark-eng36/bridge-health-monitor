const TIMEOUT = 60;
const MAX_RETRIES = 3;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function shortenAddr(addr) {
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

module.exports = { sleep, shortenAddr, TIMEOUT, MAX_RETRIES };
