# Workflow History

## Human Evidence and Delegated Scope

Workflow workers receive selected human history separately from the parent agent's assignment.
The assignment defines the worker's role, including narrower review-only scope;
it cannot create user consent.
The main agent receives an advisory instruction to compare task scope against the genuine evidence available to the worker.

## Per-Worker Configuration

Set `userHistoryTurns` in a Workflow script's agent options:

```javascript
const result = await agent("Review the proposed changes without editing files", {
  userHistoryTurns: 12,
});
```

| Setting | Contract |
| --- | --- |
| Default | 8 human interactions |
| Range | Integer from 1 through 64; invalid values fail option validation |
| Source | Immutable native history captured when the Workflow run starts |
| Selection | Latest N eligible interactions, retained in chronological order |
| Size bound | 32,000 JavaScript string characters for the rendered history envelope |
| Oversize handling | Remove oldest whole selected interactions until the envelope fits; disclose omissions |
| Cache identity | Bind the selected count and host-generated snapshot digest into native worker options |

A direct human message counts once.
A successful host-linked `AskUserQuestion` exchange counts once, with its original questions, options, answers, custom response, and annotations kept together.
Questions and options remain assistant-authored context.
Ordinary tool output, quoted approvals, automatic timeout answers, and compact summaries do not become human evidence.

The worker receives requested, available, and effective counts,
count and size omissions, known compaction, and attribution limitations.
An oversized latest interaction can leave the selected history empty;
the renderer reports this instead of truncating an answer into a different instruction.

## Choosing the Window

Increase `userHistoryTurns` when relevant permission or a restriction is older than the selected window.
Each worker can use a different count over the same snapshot.
The runtime does not expand the count automatically or recover compacted-away events.

Stop and relaunch the Workflow when later instructions must enter selected history.
Messages received after launch do not alter the snapshot used by later workers in that run.
The new count applies to the native top-level human-history relay;
existing child-run and scheduled-trigger handling remains in place.

The advisory self-check adds no required assessment, hook, model call, or launch verdict.
The main agent may repair the selected window or narrow the assignment using its existing reasoning.
Existing tool permissions and classifier activation conditions still apply.

## Verification and Porting

Implementation is scoped to Claude Code **2.1.285**, on the Darwin arm64 and Linux x64 bundle graphs.
Retarget all minified bindings before enabling another version.
Use the Bun version pinned by [CI](../../.github/workflows/ci.yml) for verification.
Long prompts live in [`workflow-history-prompts.yaml`](../../tools/runtime/workflow-history-prompts.yaml)
and render through Mustache in the graph-local helper.

The [implementation record](../records/2026-10-02-workflow-history.md) separates deterministic attribution checks,
rendered TUI evidence, and model behavior that has not been evaluated.
Host runtime records and trusted hooks remain the source of provenance;
this feature does not authenticate a compromised host or enforce natural-language task scope.

Design contracts: [history selection](../decisions/0010-select-worker-history-from-workflow-start.md),
[assignment framing](../decisions/0011-distinguish-user-evidence-from-worker-assignments.md),
[classifier normalization](../decisions/0012-preserve-user-evidence-through-classifier-normalization.md),
and [advisory preflight](../decisions/0013-keep-delegation-preflight-advisory.md).
