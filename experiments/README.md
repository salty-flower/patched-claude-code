# Experiments

Scripts that established the project's viability and answered single
questions. Not part of the production pipeline; kept so any future
re-evaluation reuses the same probes.

| Script | Question it answered |
| --- | --- |
| `decode-mappings.py` | Is the v2.1.88 sourcemap precision token-level, and is `sourcesContent` complete? |
| `diff-bundles.py` | First, naïve regex-based bundle-literal churn estimate. Subsumed by `align.ts`. |
| `diff-via-tssource.py` | Drive bundle diff from real TS-source literals (better signal than raw bundle scan). |
| `align.ts` | AST function-level alignment of v2.1.112 → v2.1.88. Definitive viability answer. |
| `tune.ts` | Distribution of best literal-Jaccard match per v2.1.112 declaration. |

Re-run with current toolchain:

```sh
direnv allow                  # if you haven't
bun install --cwd .
python3 decode-mappings.py    # paths inside the file are absolute, edit if relocated
bun run align.ts
bun run tune.ts
```

Findings are summarised in [`../docs/records/2026-05-04-POC.md`](../docs/records/2026-05-04-POC.md).
