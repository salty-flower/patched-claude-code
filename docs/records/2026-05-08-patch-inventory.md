# 2026-05-08 — Patch Inventory by Logical Feature

## Governing Split

Patch entries are the mechanical audit unit: one locator, one replacement, one
`rationale_ref`, and tests against the rendered bundle.

One TOML file may group multiple ordered patch entries for a logical feature.
Keep cross-file groups visible in this record so future audits can reason about
user-facing behavior without weakening the byte-level patch contract in
`docs/rules/Patch-Format.md`.

## Inventory

| Logical feature | Patch files / entries | User-facing behavior | Split reason |
| --- | --- | --- | --- |
| Agent memory discovery | `agents-memory-additional-directories`, `agents-memory-ancestor-directories`, `agents-memory-file-detection`, `agents-memory-nested-directory`, `memory-file-realpath-overlap-dedup` | Load the intended `AGENTS.md`/memory files across project roots, ancestors, nested repos, and extra directories without duplicate realpath reads. | Distinct source gates in Claude.md discovery and path dedup logic. |
| Channel access | `channels-feature-gate`, `channels-provider-gate`, `ask-user-question-channels-gate` | Keep channel-related MCP behavior available and prevent interactive ask-user-question prompts from hanging channel sessions. | Feature/provider availability and interactive tool gating are separate upstream decisions. |
| File read result path context | `read-result-path-context`, `read-result-path-image`, `read-result-path-notebook`, `read-result-path-parts`, `read-result-path-pdf`, `read-result-path-text`, `read-result-path-unchanged` | Preserve path context across FileRead result render variants. | Each result variant has its own minified render branch and locator. |
| MCP result rendering | `mcp-result-render-array-text-full`, `mcp-result-render-string-full`, `mcp-result-render-text-block-full` | Render full MCP result text instead of compact/truncated summaries. | Array, string, and text-block results are separate render branches. |
| Statusline/footer control | `statusline-footer-control` (`statusline-footer-control-*`, `statusline-json-*`) | Let a custom status line hide selected built-in footer items via `statusLine.disabledFooter` or `--hide-builtin-footer`, tighten teammate spinner spacing, and expose permission mode, clipboard image availability, and rate-limit warning text in status JSON. | One feature file keeps the ordered CLI, settings schema, render, notification, refresh, and JSON patch entries together while preserving one locator per entry. |
| Thinking display | `thinking-render-blocks`, `thinking-render-expanded`, `thinking-render-live-stream`, `thinking-render-live-main`, `thinking-render-live-complete` | Normal mode shows the latest thinking, detailed mode expands thinking, and summarized thinking streams live without duplicated completed blocks. | Message block visibility, thinking body expansion, stream delta ingestion, main-screen prop wiring, and completion cleanup are separate render/stream responsibilities. |
| Subagent tool result preservation | `subagent-preserve-tool-results` | Preserve subagent tool results needed for auditability. | Single upstream drop point. |
| Transcript history | `transcript-preserve-repl-history` | Preserve REPL history in transcript handling. | Single session-storage boundary. |
| Installer warning | `suppress-npm-native-installer-warning` | Suppress the native installer warning for this patched bundle workflow. | Single notification hook. |

## Thinking Display Dependency Chain

| Order | Patch | Required because |
| --- | --- | --- |
| 1 | `thinking-render-live-stream` | Converts `thinking_delta` events into `streamingThinking`; otherwise streamed summaries update counters but not thinking text. |
| 2 | `thinking-render-live-main` | Passes `streamingThinking` to the normal main-screen `Messages` renderer; otherwise live text is only wired to transcript mode. |
| 3 | `thinking-render-live-complete` | Clears the transient live buffer after the completed thinking block is appended; otherwise detailed/transcript rendering can show the same summary twice. |
| 4 | `thinking-render-blocks` | Lets normal mode render the latest completed thinking block after streaming has ended. |
| 5 | `thinking-render-expanded` | Expands received thinking bodies instead of leaving them behind transcript affordances. |

These five patches remain an ordered dependency chain across separate TOMLs. If
they are consolidated later, preserve the order and keep one patch entry per
upstream ownership boundary so individual entries can retire independently.

## Maintenance Rule

When adding, retiring, or re-anchoring patches, update this record if the
logical feature grouping changes. Do not use this record as a substitute for
per-entry `rationale`, `rationale_ref`, and tests.

## Re-anchor Log

| Date | Target | Scope | Grouping change |
| --- | --- | --- | --- |
| 2026-05-08 | 2.1.133 | Re-anchored patch locators and replacements after upstream bundle drift from 2.1.132. | No. |
