# ADR-0016: Keep Model Intents Behind Deterministic Host Admission

## Status

Proposed.
The moderator contract is complete; implementation evidence remains target-specific.

## Context

Claude Code contains stochastic model decisions and deterministic host effects.
Moving a feature behind a Mod must not transfer permission, provenance,
effective-state authority, or privacy classification to model-generated text.
Existing Workflow decisions already distinguish genuine human evidence from coordinator assignments.
See [ADR-0011](0011-distinguish-user-evidence-from-worker-assignments.md)
and [ADR-0012](0012-preserve-user-evidence-through-classifier-normalization.md).

## Decision

The model may propose actions through existing typed tool, command, and API paths.
The deterministic host binds caller/source identity from its own dispatch state,
validates schemas and semantic references, applies existing permission/state rules,
and owns accepted effects and durable records.
Introduce neither a generic intent API nor an LLM reviewer to authorize effects.

Host-to-model context carries business text and existing host-attributed records.
Model-to-host requests carry existing call identity, registered capability, and arguments.
Model-supplied claims about human origin, approval, telemetry purpose,
or effective effort are not authoritative metadata.

## Consequences

### Invariant upheld

- Identical host state and typed input produce the same admission decision under the same policy.
- Invalid schema, unsupported value, missing authorization, or false provenance cannot bypass existing controls.
- A model-written quote or heading cannot create a human answer or approval.
- Effective model/effort comes from host resolution rather than echoing requested values as applied.
- Telemetry prohibition does not depend on a model following instructions or a Mod hook succeeding.

### Invariant surrendered

- Not every model-proposed action is fulfilled; invalid or unauthorized requests are rejected or follow existing approval rules.
- The design does not guarantee that a model obeys business instructions or chooses the best valid action.
- No natural-language compliance evaluation or model critic is an enforcement authority.

### Owner

The sole maintainer owns the deterministic admission contract,
adapter/host integration, fixtures, and release decisions.
The model provider supplies stochastic proposals and has no authority over local policy.
CI executes deterministic fixtures; agents propose changes and evidence.

### Cross-seam contract

**Host to model:** preserve native tool schemas and ordered host-attributed context.
Human messages, questions/answers, assignments, and tool output retain distinct origins.

**Model to host:** treat existing structured calls as candidate requests.
Bind identity and source references at dispatch;
resolve capabilities, aliases, effort precedence, permissions, sandbox, and scope through existing host rules.

For Workflow human evidence, require the successful result's host linkage to its preceding question,
matching questions/options and genuine submitted answers in the immutable run snapshot.
Timeouts, duplicates, raw tool claims, quoted approvals, and coordinator assignments do not become human evidence.
For display adapters, retain original stored results and model-visible payloads.

Verify the contract with scripted local model/transport stubs through the production dispatch path.
Include forged/mislinked answers, unsupported effort, model/capability mismatches,
valid business controls, and telemetry enabled with Mods absent or failing.
Expected decisions come from fixture state and the pinned host resolver,
not from one defensible natural-language answer or a statistical compliance threshold.
Observe protected effects directly; a parseable request alone is insufficient evidence.

## Alternatives Considered

- **Prompt instructions as enforcement:** rejected because stochastic compliance cannot guarantee local effects.
- **LLM critic for policy or provenance:** rejected because it adds another stochastic authorization step.
- **Schema-only validation:** insufficient for forged human origin, mismatched references,
  unsupported effective-state claims, and telemetry disguised as business activity.
- **Generic new intent transport:** unnecessary; use existing typed paths and preserve native identities.

## Revisit Triggers

- A new capability bypasses existing dispatch, attribution, or admission paths.
- Upstream changes native question linkage, caller identity, or resolver semantics.
- Fixtures reveal protected side effects on rejected or misattributed input.
