# AST Zstd Cache

## Decision

Treat a zstd-compressed stripped Babel AST cache as a viable cross-stage reuse
candidate. Do not reject it on artifact size alone.

The first implementation should remain experimental and hash-bound. It should
not replace the existing direct parse path until CI proves a net wall-clock
win under the real patch pipeline.

## Benchmark Scope

Target bundle:

- `staging/2.1.133/cli.js`
- size: 14,252,004 bytes
- environment: local ai-sandbox session, so process launch and filesystem
  access include sandbox overhead

Benchmark implementation: retired after the measurements below were frozen.
Recreate it only when AST-cache work is promoted into the active pipeline.

Measured modes:

| Mode | Meaning |
| --- | --- |
| `parse` | Read bundle and parse with Babel. |
| `write-cache` | Read bundle, parse, strip bulky AST metadata, JSON stringify, zstd-compress to disk. |
| `read-cache` | zstd-decompress cache, JSON parse AST object, inspect program body. |

The stripped AST keeps `start` and `end` ranges. It drops comments, `loc`,
`range`, `extra`, and comment attachment fields.

## Size Results

| Artifact | Bytes | Ratio vs source |
| --- | ---: | ---: |
| Source JS | 14,252,004 | 1.00x |
| Full AST JSON | 680,260,077 | 47.73x |
| Full AST JSON gzip | 70,527,631 | 4.95x |
| Stripped AST JSON | 265,152,193 | 18.60x |
| Stripped AST JSON zstd `-3` | 34,455,926 | 2.42x |

The compressed stripped AST is large but operationally plausible. It is not a
small metadata sidecar; it is a cached parse product that trades disk and
decode cost for less repeated Babel parsing.

## Runtime Results

Three-iteration averages:

| Mode | Wall avg | CPU avg | Peak RSS avg | Avg RSS | Logical read avg | Logical write avg | Storage write avg |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `parse` | 1,651 ms | 4.94 s | 1.60 GB | 729 MB | 15.6 MB | 8 B | 0 B |
| `write-cache` | 4,388 ms | 8.76 s | 3.19 GB | 1.79 GB | 546.0 MB | 332.1 MB | 66.9 MB |
| `read-cache` | 1,215 ms | 1.53 s | 1.07 GB | 691 MB | 68.5 MB | 508.2 MB | 0 B |

Notes:

- `read-cache` was faster than direct parse in this environment:
  - wall time: about 26% lower
  - CPU time: about 69% lower
  - peak RSS: about 33% lower
- `write-cache` is more expensive than a direct parse:
  - wall time: about 2.7x parse
  - peak RSS: about 2.0x parse
- Linux storage read bytes were zero in this run because the files were hot in
  page cache. Logical I/O better reflects bytes moved through the process and
  zstd pipeline.
- Logical write for `read-cache` is dominated by zstd stdout pipe traffic and
  JSON materialization, not final disk writes.

## Reuse Rule

The cache only pays when one written parse product is reused by multiple
downstream stages. With these measurements:

| Scenario | Expected result |
| --- | --- |
| One consumer | Worse than direct parse, because `write-cache` costs more than parsing once. |
| Two consumers | Near break-even or modest win depending on process overhead. |
| Three or more consumers | Likely win, especially when replacing repeated full Babel parses in CI. |

This favors a pipeline where staging or verification writes the cache once and
later verify/render/patch-test-adjacent steps consume it.

## Guardrails

Any AST cache must be invalidated by all inputs that affect parse semantics or
source ranges:

| Key field | Reason |
| --- | --- |
| source bundle hash | AST ranges are valid only for exact bytes. |
| parser package/version | Babel AST shape can change. |
| parser options | Plugins and source type affect node shape. |
| strip schema version | Consumers depend on which fields remain. |
| target version/source/platform | Prevents accidental cross-target reuse. |

Consumers must treat the cache as an optimization, not authority:

1. If the cache key does not match, parse source bytes directly.
2. If decompression or JSON parse fails, discard cache and parse directly.
3. Never use cached AST after applying edits to the source.
4. Keep final patched bundle parse validation.
5. Prefer a cache manifest over filename conventions.

## Implementation Direction

Use zstd AST cache as a cross-stage accelerator only after removing obvious
duplicated `just` dependencies. The current priority order is:

1. Collapse CI's repeated `just` dependency chains.
2. Add an in-process verify/render path where practical.
3. Add a hash-bound AST cache for stages that must remain separate processes.
4. Measure CI before and after with the same benchmark counters.

AST IPC is acceptable if it is implemented as a cache artifact with strict
manifest validation. It should not be a naked pipe whose receiver trusts the
producer implicitly.
