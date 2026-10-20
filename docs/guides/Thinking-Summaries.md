# Thinking and progress summaries

## Interactive TUI versus explicit preferences

For patched 2.1.304, interactive sessions without an explicit display preference request the API’s existing `summarized` mode. The TUI preserves returned thinking summaries and native narration/progress summaries after completion and tool calls.

| Selection | Behavior |
| --- | --- |
| Interactive, setting absent | Request `summarized` when native model/provider gates allow it |
| `--thinking-display summarized` | Explicit native summary request |
| `--thinking-display omitted` | Preserve native omission preference |
| `--thinking-display highlights` | Preserve native highlights preference and capability handling |
| `showThinkingSummaries: false` | Preserve native opt-out behavior; do not apply the new default |
| Thinking disabled | Preserve native disabled handling |
| SDK / print / noninteractive | Preserve native selection rules |

These preferences do not bypass model, provider, experimental-beta or request-body override gates. A backend that does not return summary blocks cannot acquire them through a rendering patch. Summary generation may affect latency or usage.

## Stream classification versus retained text

- Live text uses a neutral summary label while its classification is unavailable.
- Completed ordinary thinking uses the native thinking presentation with its body visible; narration retains the native renderer.
- Empty and whitespace-only blocks produce no heading. Tool grouping must not swallow nonempty summaries.
- Native cancellation of a thinking-only turn rewinds that turn and restores its prompt to the input box; partial text is not retained.
- After a completed text or tool response, native interruption can retain unfinished thinking as a virtual block with an empty signature. This is not an authenticated narration classification.
- Original completed message text and signatures are not rewritten by this display feature. Existing custom-endpoint signature sanitation remains a separate request-path behavior.

Only API-returned summaries are displayed—not decrypted private reasoning. Synthetic signatures in local tests exercise native classification metadata; they are not cryptographically valid server signatures.

The [restoration approval](<../records/2026-10-20-thinking-summary-restoration.md>) covers the two historical display capabilities restored for this feature. See the [acceptance record](<../records/2026-10-20-thinking-summaries.md>) for tests and platform limits.
