const TIMEOUT = 5;
const MAX_RETRIES = 2;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function shortenAddr(addr) {
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

module.exports = { sleep, shortenAddr, TIMEOUT, MAX_RETRIES };
