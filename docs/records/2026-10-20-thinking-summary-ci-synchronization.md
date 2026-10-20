# Thinking summary CI synchronization repair

## Render completion versus transport chunks

The first release attempt at `0b7fd1bca887d013eee3a7e892b1a58669f375c5` did not pass its Darwin evidence gate. Both platform tool suites passed; publication remained gated. The maintainer subsequently approved fixing the test and continuing publication.

[Failed Darwin job](https://github.com/salty-flower/patched-claude-code/actions/runs/39417509867/job/118610638146): default 120×40 cancellation expected one `C2-7F2` marker but observed zero. An unchanged local run reproduced the failure: the captured cursor was still in the history area and text was partially overwritten. Replaying the complete captured ANSI stream produced exactly one retained marker, no live label, and the cursor back at the composer.

The corrected gate requires transport cancellation, composer readiness, no live label, and a visible retained marker. The subsequent exactly-one assertion is unchanged. A permanently missing marker still times out; duplicates still fail. Synthetic split-chunk tests reproduce the premature old gate and verify the stronger completion condition. No product patch, request behavior, signature contract, or runtime obligation was changed.

## Bounded lifecycle versus a notification-only watchdog

The two Linux runtime jobs reached the new harness and remained in progress until the obsolete attempt was cancelled. Their logs did not identify the blocked operation, so the precise Linux root cause was not established locally.

Source inspection found raw waits for stdin flush and process exit outside the watchdog-aware event wait. Normal shutdown sent stdin EOF only during later cleanup. A Darwin subprocess probe showed process-substitution input could keep inherited output pipes open until explicit EOF; it did not reproduce a Linux process-exit deadlock.

The harness now sends EOF after submitting `/exit`, routes input settlement and exit observation through its existing watchdog-aware wait, and still requires exit code zero. Cleanup retains its separate bound. Phase diagnostics identify the active wait without logging environment values. Tests cover EOF-dependent children, nonzero exit rejection, a never-settling input operation, and an exit that never arrives.

## Validation boundary

- Eight focused regression tests / 17 assertions, TypeScript and Biome: passed.
- The complete final four-scenario Darwin matrix, including both main/resumed exits: passed locally.
- Linux release acceptance remains the responsibility of a fresh real Linux CI run; local source review and lifecycle hardening do not constitute that evidence.
- The same unpublished `2.1.304-patch.1` coordinate is retained because the runtime bundle is unchanged. Exact-commit CI and both platform evidence gates remain mandatory.
