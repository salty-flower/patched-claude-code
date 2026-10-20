# Thinking summary capability restoration

## Approval versus implementation

The maintainer explicitly selected **“批准两项并继续（推荐）”** after presentation of the full prompt-identity proposal hash and the retirement-set digest below. This approves the bounded restoration proposal, not publication or unrelated changes.

- Approved retirement-set digest: `b981016e6d2218b0104c98e9419949af45bb0430cbc05a6f3bec6e352609e7be`.
- [Frozen proposal](<2026-10-20-thinking-summary-restoration-proposal.json>): retain 58 existing retired invariants; restore `thinking-display/thinking-render-blocks` and `thinking-display/thinking-render-expanded`.
- No additional retirement, upstream-equivalence claim, or deletion of historical decisions.
- The active target ledger now maps both restored invariants to their 2.1.304 platform entries. Rendered regression validation remains a separate gate.
- The two new behavioral invariants have a separately approved [runtime catalog](<2026-10-20-thinking-summary-catalog.md>); this retirement approval does not substitute for catalog authority.

The digest is the canonical `retirementProposalSha256` value over the remaining retirement set, rationale and evidence references—not the raw JSON file hash. Independent review checked the exact set difference against both 2.1.301 and the pure 2.1.304 ledger. If the restored set or bound rationale changes, this approval does not cover the new digest.

Scope: Claude Code interactive TUI, preserving explicit display preferences and noninteractive/SDK behavior. Display only summaries returned by the API; retain native narration classification and message/signature data.
