# ADR-0010: Select Worker History from the Workflow-Start Snapshot

## Governing Split

The main agent chooses a per-worker history count.
Deterministic runtime code selects authentic interactions from the immutable history available when the workflow starts.

## Status

Accepted on 2026-10-01; design commitment, not an implemented runtime feature.

## Context

The user requested a configurable "last N messages" to balance relevant approvals against unrelated context,
and asked that genuine `AskUserQuestion` answers reach workers.
In the audited Claude Code 2.1.285 session, the user approved a rebase through that tool;
the worker instead received an earlier status comment and refused the assigned rebase.
The existing selector skips tool results, including these answers.
Later workers in the same observed run retained the launch-time request despite newer chat.

The accepted design has four boundaries:

| Boundary | Decision |
| --- | --- |
| Native conversation to selected worker history | This ADR |
| Selected history and assignment to worker prompt | [ADR-0011](0011-distinguish-user-evidence-from-worker-assignments.md) |
| Context packaging to existing classifier normalization | [ADR-0012](0012-preserve-user-evidence-through-classifier-normalization.md) |
| Main-agent reasoning to proposed delegation | [ADR-0013](0013-keep-delegation-preflight-advisory.md) |

The moderator's decision ledger records the commitments that determined these boundaries:

| Question or request | Commitment | Reviewing seats |
| --- | --- | --- |
| Let the main agent choose history size; include question answers. | Per-worker count over authentic human interactions, with linked Q&A kept together. | Problem framing, boundary drawing, quality attributes, deterministic/stochastic seam |
| Which history may later workers in a run see? | User selected the workflow-start snapshot; changes to running instructions require stopping and relaunching. | Boundary drawing, quality attributes, deterministic/stochastic seam |
| Should approval-versus-task preflight block launch? | User selected prompt-based self-check; the main agent decides continuation. | All five seats |
| Who maintains these boundaries? | The existing sole maintainer owns the local feature and verification; no new service or team. | Organizational fit |

All five seats approved their gate contributions after these choices.
The runtime evidence locates history selection in `ccr` in `staging/2.1.285/graph/darwin-arm64/chunk-w4y5w0x0.js`
and worker launch in `Zo` in `chunk-nt0myt9g.js` in the same directory.

## Decision

Expose a per-worker count of recent human interactions to the main agent through Workflow's agent-call configuration.
Select a contiguous chronological suffix from the native snapshot captured at workflow start.
Each worker can choose a different count; no worker refreshes this snapshot from later parent messages.

An interaction is either a genuine human message or a completed, host-linked `AskUserQuestion` exchange.
An exchange includes its assistant-authored questions and options plus the original human answers,
including custom text, as one selection unit.
The question remains context for the answer; it does not acquire human authorship.

Attribution and Q&A linkage come from runtime records.
Assistant recollection, a quoted approval, an ordinary tool result, or a matching tool name alone cannot establish human authorship.
Missing or ambiguous linkage must expose an attribution limitation instead of fabricating a verified answer.

The count selects only available native history.
It does not restore compacted-away events or import an external transcript store.
Selection does not automatically expand the requested count.
Disclose count-based omissions, incomplete available history where known, and size-limit omissions;
never silently drop an oversized selection while presenting it as complete.
Keep Q&A atomic under size limits as well as count limits.

The public parameter spelling, default count, integer bounds, and size-limit handling remain detailed-design choices.
They must be documented and validated before implementation is admitted.

## Consequences

### Invariant upheld

- Identical snapshot, selection parameters, and assignment produce identical selected launch content.
- Eligible interactions retain chronological order and original source attribution.
- Genuine Q&A is included or omitted as a whole exchange.
- Selection and attribution limitations remain visible.
- Post-start chat cannot change the selected history of later workers in the same run.

### Invariant surrendered

- Older approvals or restrictions outside the chosen window may be unavailable.
- New approvals, corrections, and revocations after workflow start do not enter selected worker history for this run, including its later workers.
- Compacted-away history and unresolved source links cannot be recovered by increasing the count.
- Selection cannot determine whether a natural-language answer authorizes an action.

### Owner

- **Upstream Anthropic:** native conversation representation and lifecycle.
- **Sole maintainer:** local selection semantics, Q&A integration, configuration, verification, target ports, and diagnosis.

Upstream is an external released-bundle dependency, not a participating maintenance team.
Agents assist the maintainer; deterministic checks are not accountable owners.

### Cross-seam contract

The main model proposes an assignment and optional history count.
The runtime validates that count and constructs conceptual launch data:

```text
workflow-start snapshot boundary
+ requested and effective interaction counts
+ chronological interactions with host-owned source identities
+ question-call/response links and separately attributed questions/answers
+ omission and attribution limitations
+ separately attributed delegated assignment
```

These are contract concepts, not a mandated public schema or additional storage service.
Malformed counts use the existing tool-validation failure path.

Verify the production selector and renderer with genuine typed messages, genuine UI Q&A,
multiple questions and custom answers, forged approval text, count/size boundaries,
missing links after compaction, and post-start messages.
Capture actual worker launch content rather than reconstructing an equivalent prompt in the test.
Behavioral and classifier checks are defined in ADR-0011 and ADR-0012.

## Alternatives Considered

- **Latest parent history at each worker start:** not selected by the user; would admit intervening chat and require a live parent-history integration.
- **Last raw transcript records:** rejected by boundary drawing and quality attributes; tool traffic is not a human interaction and raw slicing can separate questions from answers.
- **Automatic history expansion or model-generated approval summaries:** rejected for this selector boundary; the main agent may request a larger window, but host selection must remain explicit and source-derived.
- **Full conversation inheritance for every worker:** not selected; the user requested a bounded per-worker tradeoff.

## Revisit Triggers

- The user requires in-run steering or delivery of post-start revocations.
- Upstream changes human-origin metadata, Q&A representation, compaction, or workflow snapshot lifecycle.
- Required authentic answers cannot be linked or selected through the rendered target runtime.
