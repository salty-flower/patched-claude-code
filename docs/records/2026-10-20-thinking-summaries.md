# Claude Code TUI dual-summary acceptance

## Interactive display versus native protocol

Implemented after the independently accepted [2.1.304 target bump](<2026-10-20-2.1.304-target-bump.md>). Scope: Claude Code TUI only; no Paseo changes.

- Interactive sessions with no explicit preference request native `summarized` mode; explicit preferences, false settings, disabled thinking and noninteractive/provider/capability boundaries remain native.
- Live text uses the neutral `∴ Summary` label. Completed ordinary summaries retain the native thinking glyph and Markdown body; narration retains its native renderer and hook chain.
- Nonempty summaries break classic tool groups without changing their message objects. Empty/whitespace blocks produce no row.
- Native signature classification, signature-delta replacement semantics and completed history data remain unchanged.
- Native thinking-only cancellation rewinds the turn and restores the prompt. After a completed text/tool response, cancellation retains the native virtual partial block. No new persistence contract for virtual blocks.

See [user-facing behavior](<../guides/Thinking-Summaries.md>), [restoration approval](<2026-10-20-thinking-summary-restoration.md>) and [runtime catalog approval](<2026-10-20-thinking-summary-catalog.md>).

## Acceptance evidence

| Gate | Result |
| --- | --- |
| Full locator/reference verification and native extraction contract | Passed on both platform graphs before final render |
| Rendered assertions and CLI version | Passed; 2.1.304 |
| Full tool suite | 74/74 files; zero failures |
| Actual native request functions | 11 tests, 889 assertions; both graph variants, including explicit/noninteractive/disabled/capability boundaries |
| Ordinary renderer and native narration preservation | 8 tests, 86 assertions; both variants, including actual ordinary-renderer execution |
| Existing API-stub/TUI runners | All 13 passed against the feature bundle |
| New Darwin PTY matrix | Default/explicit × 80×24/120×40: all four passed |
| Runtime evidence collection | Darwin receipt passed: 104 executed oracles, zero skipped; five request callbacks and all four TUI callbacks present |
| Prompt identity check after feature render | All 453 occurrences unchanged and valid |
| Obligation coverage | 166/166: 104 ported, four upstream-equivalent, 58 retired |
| Final TypeScript / whitespace checks | Passed |

The new PTY matrix exercises incremental text, late and replaced partial signature metadata, empty blocks, Read → ordinary summary → Read grouping, completed/history signature preservation, native early cancellation rollback, anchored cancellation before/after signature, recovery, normal/resumed transcript views, native pagination and local exit. It counts current rendered state—not accumulated ANSI output or concatenated overlapping pages.

## Defects and false assumptions caught by real execution

- A raw Unicode source literal produced a corrupted live glyph in actual TUI output. The replacement now uses ASCII `\u2234`; the interactive assertion still requires the real `∴` glyph.
- The initial fixture incorrectly expected thinking-only cancellation to retain a partial. Native cancellation source/dataflow and actual draft restoration establish the opposite contract; the test separately covers rollback and anchored retention.
- The shared first-party redirect fixture discarded `Request + init` overrides. A one-line standard Request construction fix preserves the abort signal and other overrides, with nine isolated transport tests. This was a real helper defect, but not the cause of the later server callback discrepancy.
- On host Bun 1.3.13, native and redirected fetch both abort pending readers, but the shared node:http adapter does not reliably notify the Response stream cancellation callback. The new harness uses local Bun.serve with idle timeout disabled and retains strict source-cancellation assertions. No product networking change or weakened cancellation assertion.
- Native transcript views are scrollable. Real navigation proves every required marker remains accessible; each viewport rejects duplicate markers rather than assuming the whole conversation fits on one screen.

## Evidence and release boundary

Local artifacts: [final render](<../../dist/dual-summary-render-2.1.304-escaped.log>), [rendered assertions](<../../dist/dual-summary-static-2.1.304.log>), [full tool suite](<../../dist/dual-summary-tool-suite-2.1.304.log>), [legacy stubs](<../../dist/dual-summary-legacy-stubs-2.1.304.log>), [four-scenario matrix](<../../dist/dual-summary-feature-matrix-pagination.log>), [Darwin evidence run](<../../dist/dual-summary-darwin-evidence-2.1.304.log>), [Darwin receipt](<../../dist/patch-obligation-evidence/2.1.304/darwin-arm64.json>), [native cancellation audit](<../../dist/thinking-summary-native-cancel-2.1.304.md>).

No actual Linux OS run or Linux receipt was produced. Linux evidence here is graph/static verification and extracted-function execution on Darwin. The local Darwin receipt does not establish two-platform release admission. Synthetic metadata envelopes test classification, not cryptographic server-signature validity or model reasoning quality. No repository commit, publication or user-facing CLI installation was performed.
