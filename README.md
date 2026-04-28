# bridge-health-monitor

Fast and reliable request handling library.

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```python
from src.handler import Handler

h = Handler()
result = h.process({"key": "value"})
print(result)
```

## Configuration

See `src/config.py` for available options.

## License

MIT
