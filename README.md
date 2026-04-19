# bridge-health-monitor

CLI tool to monitor bridge validator health, multisig activity, and TVL changes across EVM chains.

Built for bridge operators and security researchers who need real-time visibility into bridge contract state.

## Features

- **Multisig Checker** — View signer addresses, thresholds, activity status, and ENS resolution
- **Live Monitor** — Poll for contract changes (owner rotation, threshold updates, balance shifts, code upgrades)
- **TVL Tracker** — Snapshot native and ERC-20 token balances

## Install

```bash
git clone https://github.com/jmpark-eng36/bridge-health-monitor.git
cd bridge-health-monitor
npm install
```

## Usage

### Check multisig status

```bash
node src/index.js check 0xYourSafeAddress --rpc https://eth.llamarpc.com

# With threshold info and 60-day lookback
node src/index.js check 0xYourSafeAddress --rpc https://eth.llamarpc.com --threshold --days 60
```

Output:
```
✓ Multisig Check Complete

Contract: 0xYour...
Threshold: 3/5
Nonce: 142

Signers:
────────────────────
  0xAA... (vitalik.eth)
    Balance: 1.23 ETH | TX Count: 456 | Status: active
  0xBB...
    Balance: 0.05 ETH | TX Count: 12 | Status: inactive
```

### Monitor for changes

```bash
# Poll every 30 seconds
node src/index.js monitor 0xYourSafeAddress --rpc https://eth.llamarpc.com --interval 30

# With webhook alerts
node src/index.js monitor 0xYourSafeAddress --rpc https://eth.llamarpc.com --webhook https://hooks.slack.com/...
```

Detects:
- Balance changes
- Contract upgrades (code hash change)
- Threshold modifications
- Signer additions/removals
- New transaction executions

### TVL snapshot

```bash
node src/index.js tvl 0xBridgeAddress --rpc https://eth.llamarpc.com \
  --tokens 0xA0b8...USDC,0xdAC1...USDT
```

## Configuration

Create a `.env` file or use `config/default.json`:

```env
RPC_URL=https://eth.llamarpc.com
```

## Supported Chains

Any EVM-compatible chain — just pass the appropriate RPC:

```bash
--rpc https://eth.llamarpc.com        # Ethereum
--rpc https://arb1.arbitrum.io/rpc    # Arbitrum
--rpc https://mainnet.base.org        # Base
--rpc https://mainnet.optimism.io     # Optimism
```

## Roadmap

- [ ] Multi-chain simultaneous monitoring
- [ ] Telegram bot alert integration
- [ ] Historical activity timeline
- [ ] Dashboard UI (web)
- [ ] Support for non-Gnosis multisigs (custom ABI flag)

## License

MIT
