const assert = require('assert');

describe('utils', () => {
  it('should shorten address', () => {
    const { shortenAddr } = require('../src/utils');
    const result = shortenAddr('0x1234567890abcdef1234567890abcdef12345678');
    assert(result.length < 42);
    assert(result.includes('...'));
  });

  it('should export constants', () => {
    const c = require('../src/constants');
    assert(c.DEFAULT_POLL_INTERVAL > 0);
    assert(Array.isArray(c.GNOSIS_SAFE_ABI));
  });
});
