# ADR-0013: Keep Delegation Preflight in Main-Agent Reasoning

## Governing Split

Approval-versus-task preflight remains an advisory instruction inside main-agent reasoning.
The runtime constructs authentic context and retains existing controls; no new assessment gates worker launch.

## Status

Accepted on 2026-10-01 after the user selected prompt-based self-check over a mandatory pre-start check.
This is a design decision; the instruction has not been added to the runtime.

## Context

The user proposed that the main agent check "approval vs task scope" before starting,
using either its prompt or a pre-start hook.
The original failure already caused repeated requests for approval that the user had supplied.
A new blocking reviewer could reproduce that friction through its own incorrect judgments.

The organizational-fit seat identified the extra lifecycle of a mandatory model-backed hook:
invocation, routing, timeouts, malformed results, recovery, and erroneous blocks.
The user chose advisory self-check with no new launch dependency.
The fixed workflow-start history from [ADR-0010](0010-select-worker-history-from-workflow-start.md) remains the source for selected worker history.

## Decision

Deliver a standalone model-visible instruction asking the main agent to compare the intended assignment and its scope
with genuine user instructions and approvals, including what the selected worker history will contain.
Keep that instruction within existing main-agent reasoning.
Do not require a recorded assessment, a hook invocation, an additional model call, or a passing verdict to launch a worker.

The instruction directs the main agent to repair insufficient context or excessive scope before surfacing unresolved ambiguity:

- Increase N when relevant approval is present in the available snapshot but outside the selected window.
- Narrow or reassign work when the assignment exceeds the supported task scope.
- Use the genuine existing response instead of routinely asking the user to repeat approval.
- Treat post-start messages or unavailable history according to the snapshot limitations in ADR-0010.

These are model-directed choices, not automatic expansion by the deterministic selector.
The main agent decides how to continue when a concern remains.
Its self-check conclusion remains agent-authored and cannot replace human evidence in the worker prompt or classifier.
Existing permission checks still apply, as specified by [ADR-0012](0012-preserve-user-evidence-through-classifier-normalization.md).

A review of an initial workflow plan covers the tasks and windows represented in that plan.
It does not establish that every later dynamic reviewer, repair task, or child assignment was checked.
This feature makes no per-child assessment guarantee.

## Consequences

### Invariant upheld

- The main-agent prompt receives the advisory instruction through the intended runtime path.
- Context construction retains the deterministic contracts in ADR-0010 and ADR-0011.
- Self-check statements do not acquire human authorship or bypass existing controls.
- Advisory preflight adds no required hook, model-call lifecycle, or launch-blocking condition.

### Invariant surrendered

- The runtime does not prove that the main agent performed the check or reasoned correctly.
- Unresolved self-check concerns do not automatically block launch.
- Dynamically generated worker assignments are not guaranteed independent review.
- Framing and self-check alone cannot enforce read-only behavior or correct interpretation of consent.

### Owner

- **Sole maintainer:** instruction resource, delivery, delegation-context integration, verification, and target ports.
- **Upstream Anthropic:** native main-agent execution and existing worker lifecycle.

The model's judgment is not a separately accountable authority.
The selected variant adds no operating service or new approval-system owner.

### Cross-seam contract

The deterministic side delivers the instruction and constructs the selected worker context.
The stochastic side proposes task scope and N, and may revise them after self-check.
Runtime input validation checks those proposals as defined in ADR-0010;
it does not demand evidence that the model's internal reasoning occurred.

Verify actual delivery to the main-agent prompt and the resulting worker payload.
Behavioral fixtures must observe context-window repair, task narrowing, repeated approval requests,
and worker action attempts under the cases in [ADR-0011](0011-distinguish-user-evidence-from-worker-assignments.md).
Include a task whose genuine approval is outside the initial window but present in the frozen snapshot.
Record whether the main agent selects sufficient context without asking the user again.
An emitted statement such as "preflight passed" is never the behavioral success oracle.

## Alternatives Considered

- **Mandatory pre-start assessment:** user declined; it would add a blocking semantic judgment and a maintained failure/recovery path.
- **Require a workflow-level verdict for every future child:** rejected by boundary and deterministic/stochastic reviewers; later dynamic assignments may differ from the reviewed plan.
- **Treat successful self-check as delegated user consent:** rejected by the attribution contract; assessment cannot create a human decision.
- **Automatically ask the user whenever selected history lacks approval:** rejected by problem framing; it reproduces the original failure when authentic evidence is already available.

## Revisit Triggers

- Actual evaluations show the advisory instruction is routinely skipped or reproduces repeated-approval failures.
- The user requires guaranteed assessment before each worker launch and accepts the added blocking dependency.
- Upstream supplies a native preflight interface that changes the maintenance tradeoff.
