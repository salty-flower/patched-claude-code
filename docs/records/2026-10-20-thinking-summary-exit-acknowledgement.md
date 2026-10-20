# Thinking summary exit acknowledgement

## Application acknowledgement versus pipe flush

[CI for `93cb22f0a`](https://github.com/salty-flower/patched-claude-code/actions/runs/39437879243) passed both platform obligation-evidence jobs and both tool suites. The independent [Linux runtime audit](https://github.com/salty-flower/patched-claude-code/actions/runs/39437879243/job/118681204898) failed in the explicit 120×40 resumed-session exit; the main session exited successfully. All preceding summary, interruption, recovery, pagination, and resumed-view phases completed.

The bounded wait added in the [prior repair](2026-10-20-thinking-summary-ci-synchronization.md) reported the failure instead of hanging indefinitely: stdin EOF completed, but the process did not exit before the watchdog. The last cursor line still contained `/exit`. This establishes a missing application acknowledgement before EOF, not proof that GNU `script` discarded a carriage return.

The test now keeps stdin open until either the process has exited or the native shutdown hint `Resume this session with:` is followed by this fixture’s session ID. That hint acknowledges entry into native shutdown for the controlled, persistent TTY fixture—not successful termination or a general CLI shutdown protocol. Error and failsafe shutdown paths can also print it. EOF and process settlement remain bounded, and actual exit code zero remains mandatory. No command retry, fixed delay, increased timeout, product patch, or process-group change is introduced.

## Local validation

Twelve focused tests / 27 assertions, TypeScript, and Biome passed. Three complete Darwin matrices passed (12 scenarios), including both normal and resumed exits. Independent native-source review confirmed the hint guards and separate terminal buffers; neither the hint nor these local runs substitutes for fresh Linux acceptance.

## Publication boundary

The successful platform receipts belong to `93cb22f0a`; they cannot admit a later source commit. The next release attempt must obtain fresh exact-commit receipts and pass the independent Linux runtime audit. The intended release remains the unpublished `2.1.304-patch.1`.
