module.exports = {
  GNOSIS_SAFE_ABI: [
    'function getOwners() view returns (address[])',
    'function getThreshold() view returns (uint256)',
    'function nonce() view returns (uint256)',
  ],
  DEFAULT_POLL_INTERVAL: 30000,
  VERSION: '0.9.15',
};
