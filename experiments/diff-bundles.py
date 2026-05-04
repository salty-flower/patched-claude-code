#!/usr/bin/env python3
"""Tier 1 churn probe.

Extract long string literals from v2.1.88 and v2.1.112 minified cli.js, compute
overlap. Tells us, in coarse terms, how much code carried over.

Tier 2 (function-level alignment) lives in a separate script and only runs if
this signal is encouraging.
"""
from __future__ import annotations

import os
import re
import sys
from pathlib import Path

ROOT = Path(os.environ.get("AUDITED_CC_ROOT", Path(__file__).resolve().parent.parent))
V88 = ROOT / "reference/v2.1.88/cli.js"
V112 = Path(os.environ.get("AUDITED_CC_TARGET", ROOT / "staging/2.1.112/cli.js"))

# Match string literals in three quote flavours. Must avoid greedy spanning.
# Length floor of 15 keeps signal-to-noise high; minifier-generated names
# never reach this length.
LIT = re.compile(rb'(?:"([^"\\\n]{15,400})"|\'([^\'\\\n]{15,400})\'|`([^`\\\n]{15,400})`)')

# A literal is "stable" — i.e. unchanged across re-minification — when it's a
# real text string, not a template that embeds minified identifier names.
# Heuristics: drop literals that look like JS source, keep ones that look like
# English/text/paths/JSON keys.
def is_stable(s: str) -> bool:
    if "${" in s:  # template literal interpolation
        return False
    # Heavy concentration of JS-ish punctuation = inlined source code
    js_punct = sum(s.count(c) for c in ";{}()[]<>=")
    if js_punct > len(s) // 8:
        return False
    return True


def literals(path: Path) -> set[str]:
    out: set[str] = set()
    data = path.read_bytes()
    for m in LIT.finditer(data):
        s = m.group(1) or m.group(2) or m.group(3)
        try:
            decoded = s.decode("utf-8")
        except UnicodeDecodeError:
            continue
        if is_stable(decoded):
            out.add(decoded)
    return out


def main() -> int:
    a = literals(V88)
    b = literals(V112)
    inter = a & b
    only_a = a - b
    only_b = b - a

    print(f"v2.1.88 literals (>=15 chars):  {len(a):>6}")
    print(f"v2.1.112 literals (>=15 chars): {len(b):>6}")
    print(f"intersection:                   {len(inter):>6}  ({len(inter)*100/len(a):.1f}% of v88, {len(inter)*100/len(b):.1f}% of v112)")
    print(f"only in v88 (removed):          {len(only_a):>6}  ({len(only_a)*100/len(a):.1f}% of v88)")
    print(f"only in v112 (added):           {len(only_b):>6}  ({len(only_b)*100/len(b):.1f}% of v112)")

    print("\nsample of strings only in v112 (= new code in 2.1.112):")
    for s in sorted(only_b, key=len, reverse=True)[:15]:
        print(f"  + {s[:140]!r}")

    print("\nsample of strings only in v88 (= dropped or rewritten):")
    for s in sorted(only_a, key=len, reverse=True)[:15]:
        print(f"  - {s[:140]!r}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
