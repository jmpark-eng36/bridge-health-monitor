"""Tests for utility functions."""
import pytest
from src.utils import get_hash, safe_get

def test_get_hash():
    result = get_hash("hello")
    assert len(result) == 64
    assert result == get_hash("hello")  # deterministic

def test_get_hash_empty():
    result = get_hash("")
    assert isinstance(result, str)

def test_safe_get():
    d = {"a": {"b": 19}}
    assert safe_get(d, "a") == {"b": 19}
    assert safe_get(d, "missing") is None
    assert safe_get(d, "missing", "default") == "default"

def test_safe_get_none():
    assert safe_get(None, "key") is None
