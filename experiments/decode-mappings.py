#!/usr/bin/env python3
"""Probe v2.1.88 sourcemap precision.

For each chosen source file:
  - find its index in `sources`
  - walk all mapping segments referring to that source
  - report: how many distinct (src_line, src_col) get distinct gen positions
  - sample one mapping near the start of an interesting fn and slice cli.js
    at the gen position to confirm minified content corresponds to what
    `sourcesContent[src_idx]` says at (src_line, src_col)
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

ROOT = Path(os.environ.get("AUDITED_CC_ROOT", Path(__file__).resolve().parent.parent))
CLI_JS = ROOT / "reference/v2.1.88/cli.js"
MAP = ROOT / "reference/v2.1.88/cli.js.map"

# Look for these strings in `sources` to pick representative files.
INTERESTING = [
    "AskUserQuestion",
    "ExitPlanMode",
    "EnterPlanMode",
    "permissionContext",
    "channelNotification",
]

B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
B64_INDEX = {c: i for i, c in enumerate(B64)}


def decode_vlq(s: str, idx: int) -> tuple[int, int]:
    """Decode one VLQ value starting at s[idx]. Returns (value, next_idx)."""
    result = 0
    shift = 0
    while True:
        digit = B64_INDEX[s[idx]]
        idx += 1
        cont = digit & 0x20
        result |= (digit & 0x1F) << shift
        shift += 5
        if not cont:
            break
    sign = result & 1
    value = result >> 1
    return (-value if sign else value), idx


def decode_mappings(mappings: str):
    """Yield (gen_line, gen_col, src_idx, src_line, src_col, name_idx) per segment.
    name_idx is None if absent."""
    src_idx = 0
    src_line = 0
    src_col = 0
    name_idx = 0
    for gen_line, line in enumerate(mappings.split(";")):
        gen_col = 0
        if not line:
            continue
        for seg in line.split(","):
            if not seg:
                continue
            i = 0
            d_gc, i = decode_vlq(seg, i)
            gen_col += d_gc
            if i >= len(seg):
                yield (gen_line, gen_col, None, None, None, None)
                continue
            d_si, i = decode_vlq(seg, i)
            src_idx += d_si
            d_sl, i = decode_vlq(seg, i)
            src_line += d_sl
            d_sc, i = decode_vlq(seg, i)
            src_col += d_sc
            ni = None
            if i < len(seg):
                d_ni, i = decode_vlq(seg, i)
                name_idx += d_ni
                ni = name_idx
            yield (gen_line, gen_col, src_idx, src_line, src_col, ni)


def main():
    print("loading map ...", file=sys.stderr)
    sm = json.loads(MAP.read_text())
    sources = sm["sources"]
    contents = sm["sourcesContent"]
    mappings = sm["mappings"]
    print(f"sources={len(sources)} mappings_chars={len(mappings):,}", file=sys.stderr)

    # Find indices for the interesting source files
    picks: list[tuple[int, str]] = []
    for needle in INTERESTING:
        for i, s in enumerate(sources):
            if needle in s:
                picks.append((i, s))
                break
    print(f"\nrepresentative picks ({len(picks)}):", file=sys.stderr)
    for i, s in picks:
        print(f"  [{i}] {s}", file=sys.stderr)

    # First pass: count mappings per source
    print("\ndecoding mappings (this may take ~20s) ...", file=sys.stderr)
    per_src: dict[int, list[tuple[int, int, int, int]]] = {}
    total = 0
    for gl, gc, si, sl, sc, ni in decode_mappings(mappings):
        if si is None:
            continue
        total += 1
        if si not in per_src:
            per_src[si] = []
        per_src[si].append((gl, gc, sl, sc))
    print(f"total located segments: {total:,}", file=sys.stderr)
    print(f"distinct sources referenced: {len(per_src)} / {len(sources)}", file=sys.stderr)

    # Detail per pick
    cli = CLI_JS.read_bytes()
    cli_lines = cli.splitlines(keepends=False)
    print(f"\ncli.js: {len(cli)/1024/1024:.1f} MiB, {len(cli_lines)} gen-lines")
    print()

    for src_idx, src_path in picks:
        segs = per_src.get(src_idx, [])
        print(f"--- {src_path} (idx={src_idx}, segments={len(segs)}) ---")
        if not segs:
            print("  (no mappings)\n")
            continue

        # Distinct (src_line, src_col) reachable
        distinct_src_pos = {(sl, sc) for _, _, sl, sc in segs}
        distinct_gen_pos = {(gl, gc) for gl, gc, _, _ in segs}
        print(f"  distinct src positions: {len(distinct_src_pos)}")
        print(f"  distinct gen positions: {len(distinct_gen_pos)}")

        # Show source preview (first 3 lines)
        src = contents[src_idx]
        src_lines = src.splitlines()
        print(f"  source preview (first 3 lines):")
        for n in src_lines[:3]:
            print(f"    | {n[:120]}")

        # Sample three segments near interesting source positions
        sample = sorted(segs, key=lambda x: (x[2], x[3]))[:3]
        for gl, gc, sl, sc in sample:
            cli_slice = cli_lines[gl][gc : gc + 80].decode("utf-8", errors="replace")
            src_at = (
                src_lines[sl][sc : sc + 80] if sl < len(src_lines) else "<oob>"
            )
            print(f"  gen[{gl}:{gc}] -> src[{sl}:{sc}]")
            print(f"    cli   : {cli_slice}")
            print(f"    src   : {src_at}")
        print()


if __name__ == "__main__":
    main()
