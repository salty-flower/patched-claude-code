#!/usr/bin/env python3
"""Tier 1.5 probe — drive the diff from real TS source literals.

Previous tier-1 saw ~40-66% bundle-literal overlap, but it was contaminated
by template strings that *contain inlined identifiers* — those change every
release purely from re-minification, not real churn.

Better oracle: extract literals from `sourcesContent` (the unminified TS
source embedded in v2.1.88's .map). Those are real strings authored by
humans. Their survival rate inside v2.1.112's minified bundle tells us
how much code actually carries forward, agnostic of identifier renaming.

Skip dead/feature-gated source files (sources missing from v88 bundle anyway).
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(os.environ.get("AUDITED_CC_ROOT", Path(__file__).resolve().parent.parent))
V88 = ROOT / "reference/v2.1.88/cli.js"
V112 = Path(os.environ.get("AUDITED_CC_TARGET", ROOT / "staging/2.1.112/cli.js"))
MAP = ROOT / "reference/v2.1.88/cli.js.map"

LIT = re.compile(r'(?:"([^"\\\n]{15,400})"|\'([^\'\\\n]{15,400})\'|`([^`\\\n]{15,400})`)')


def is_humanish(s: str) -> bool:
    """Real strings — error messages, prompts, prose, paths, JSON keys."""
    letters = sum(c.isalpha() for c in s)
    if letters < len(s) * 0.5:
        return False
    if "${" in s:
        return False
    return True


def main() -> int:
    print("loading v2.1.88 map ...", file=sys.stderr)
    sm = json.loads(MAP.read_text())
    sources = sm["sources"]
    contents = sm["sourcesContent"]
    print(f"sources={len(sources)}", file=sys.stderr)

    # Collect literals per source
    print("scanning sourcesContent for stable literals ...", file=sys.stderr)
    src_lits: dict[int, set[str]] = {}
    for i, c in enumerate(contents):
        if not c:
            continue
        lits: set[str] = set()
        for m in LIT.finditer(c):
            s = m.group(1) or m.group(2) or m.group(3)
            if is_humanish(s):
                lits.add(s)
        if lits:
            src_lits[i] = lits

    total_lits = sum(len(v) for v in src_lits.values())
    print(f"sources with humanish literals: {len(src_lits)}/{len(sources)}", file=sys.stderr)
    print(f"total humanish literals across TS sources: {total_lits:,}", file=sys.stderr)

    # Load both bundles as bytes (avoid full unicode decode on 13M)
    v88 = V88.read_bytes()
    v112 = V112.read_bytes()
    print(f"v88 bundle: {len(v88)/1024/1024:.1f} MiB", file=sys.stderr)
    print(f"v112 bundle: {len(v112)/1024/1024:.1f} MiB", file=sys.stderr)

    # For each source: how many of its literals are in v88, in v112?
    survived_v88 = 0
    survived_v112 = 0
    survived_both = 0
    sources_fully_in_v88 = 0  # all literals in v88
    sources_fully_in_v112 = 0
    sources_majority_in_v112 = 0  # >=80% literals in v112
    sources_in_neither = 0

    for idx, lits in src_lits.items():
        in_v88 = sum(1 for l in lits if l.encode("utf-8") in v88)
        in_v112 = sum(1 for l in lits if l.encode("utf-8") in v112)
        survived_v88 += in_v88
        survived_v112 += in_v112
        survived_both += sum(
            1 for l in lits if l.encode("utf-8") in v88 and l.encode("utf-8") in v112
        )
        n = len(lits)
        if in_v88 == n:
            sources_fully_in_v88 += 1
        if in_v112 == n:
            sources_fully_in_v112 += 1
        if in_v112 >= n * 0.8:
            sources_majority_in_v112 += 1
        if in_v88 == 0 and in_v112 == 0:
            sources_in_neither += 1

    n_sources = len(src_lits)
    print(f"\n--- TS literal survival rate ---")
    print(f"survived in v88:           {survived_v88:>6}/{total_lits} ({survived_v88*100/total_lits:.1f}%)")
    print(f"survived in v112:          {survived_v112:>6}/{total_lits} ({survived_v112*100/total_lits:.1f}%)")
    print(f"survived in both:          {survived_both:>6}/{total_lits} ({survived_both*100/total_lits:.1f}%)")
    print()
    print(f"--- per-source coverage (out of {n_sources} sources with humanish literals) ---")
    print(f"100% literals in v88:      {sources_fully_in_v88}  ({sources_fully_in_v88*100/n_sources:.1f}%)")
    print(f"100% literals in v112:     {sources_fully_in_v112}  ({sources_fully_in_v112*100/n_sources:.1f}%)")
    print(f">=80% literals in v112:    {sources_majority_in_v112}  ({sources_majority_in_v112*100/n_sources:.1f}%)")
    print(f"in neither (dead code):    {sources_in_neither}  ({sources_in_neither*100/n_sources:.1f}%)")

    # Show a few sources that survived strongly
    print(f"\n--- example: 5 sources fully present in v112 ---")
    n = 0
    for idx, lits in src_lits.items():
        if all(l.encode("utf-8") in v112 for l in lits) and len(lits) >= 5:
            print(f"  [{idx}] {sources[idx]}  (literals={len(lits)})")
            n += 1
            if n >= 5:
                break

    print(f"\n--- example: 5 sources gone from v112 (likely removed) ---")
    n = 0
    for idx, lits in src_lits.items():
        in_v88 = sum(1 for l in lits if l.encode("utf-8") in v88)
        in_v112 = sum(1 for l in lits if l.encode("utf-8") in v112)
        if in_v88 == len(lits) and in_v112 == 0 and len(lits) >= 3:
            print(f"  [{idx}] {sources[idx]}  (literals={len(lits)}, all in v88, none in v112)")
            n += 1
            if n >= 5:
                break

    return 0


if __name__ == "__main__":
    sys.exit(main())
