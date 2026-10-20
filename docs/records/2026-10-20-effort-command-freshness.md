# Effort command completion freshness

## Current invocation versus matching history

[CI for `76886aa0d`](https://github.com/salty-flower/patched-claude-code/actions/runs/39444129916) passed both tool suites, the Linux runtime audit, and Linux obligation evidence. The new dual-summary matrix also passed within the Darwin evidence job; a later legacy effort-session test failed before the seventh probe echoed.

[Darwin job](https://github.com/salty-flower/patched-claude-code/actions/runs/39444129916/job/118702234110): the final viewport showed the correct Astra model and low effort, but no new probe text. The failed assertion was input acknowledgement, not an incorrect API model/effort value.

Source inspection found a separate synchronization gap: repeated `/model fable` and `/effort low` commands could match an earlier invocation’s output while the new command was still completing. The observed failure is consistent with that gap; the logs do not establish where the later paste was lost. A successful retry alone would not repair this known freshness defect.

## Scoped test repair

Command results are restricted to the transcript suffix after the latest successfully completed unique probe. Old matching results before that boundary cannot acknowledge the next invocation. A missing visible anchor remains incomplete rather than falling back to the entire screen. Repeating the same command without a new probe is rejected explicitly. The initial no-probe path is restricted to the fresh-session bootstrap.

This fixture’s existing repeated commands already have intervening probes; no additional model requests, fixed sleeps, timeout increases, product changes, shared input-helper changes, or dual-summary-test changes are needed. Existing result patterns, input-readiness checks, API assertions, and runtime observations remain mandatory. Old lines may scroll out without requiring an increasing whole-screen match count.

## Local validation

Seven freshness regressions passed; all 19 repair-focused tests passed together. TypeScript and Biome passed. Three unfiltered full effort-session smoke runs passed, retaining the complete runtime-observation roster. These local Darwin runs do not replace the next commit’s real-platform CI.

## Publication boundary

Prior commits remain unpublished. A new source commit requires fresh complete CI, both platform receipts, and package admission; earlier successful jobs do not admit the repair automatically.
