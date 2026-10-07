# ADR-0015: Preserve Native Interactions and Host Authority Across Mod Adapters

## Status

Proposed.
The user selected the interaction constraint on 2026-10-05; candidate ports remain unproven.

## Context

The user chose: "只迁移入口与布局均无感的功能，其余保留原生交互及 patch".
The earlier feasibility audit includes custom panes, pickers, and tools as technical alternatives.
Those alternatives do not satisfy the selected migration boundary.

Model choice, effort, capabilities, routing, context accounting, restore behavior,
permissions, and durable history change together through existing host contracts.
A request rewrite or new control cannot establish equivalent canonical session state.

## Decision

Allow a functional Mod to adapt an existing native path only when its entrypoint,
tool/command identity, layout, focus, keyboard behavior, and lifecycle remain equivalent.
Keep native host handlers and resolvers as the sole authority for schemas,
effective state, precedence, routing, permissions, sandbox behavior, and persistence.
Adapters use existing typed events/calls; introduce no generic intent bus or parallel preference authority.

Prioritize Read basename and MCP full-text rendering behind their existing result rows.
Delegate unchanged rendering to the engine where possible.
Keep other patches until an equally invisible adapter or proven upstream behavior satisfies the whole requirement.
Custom pickers, panes, renamed tools, serial substitutes for batched questions,
and sidecar substitutes for native history are excluded from this plan.

Keep [ADR-0008](0008-keep-native-agents-discovery-and-precedence-together.md)
and [ADR-0009](0009-bind-native-agents-hook-to-release-graph.md) unchanged.
Native AGENTS discovery/precedence stays together;
only its verified builtin callback and closure receive the trusted host integration.
Do not revive explicitly retired realpath semantics or broaden restricted-worker privileges.

The crossing data is the native event/call input, stable correlation IDs,
and the host's result/effective state through the target's existing API.
Record each requirement's realization and evidence independently of whether it uses a patch or Mod.
An absent target variant is an assessment gap, not permission to discard a feature;
accepted ADRs and signed maintainer retirements remain authoritative.

Package selected repository Mods with the release rather than requiring recurring manual installation.
Record deliberate disablement separately from load, hash, or API failures.
Unexpected failure must be visible and cannot count as successful feature admission.
It cannot re-enable telemetry or weaken the host's retained guarantees.

## Consequences

### Invariant upheld

- Migrated features keep their native entry, layout, identities, keyboard/focus behavior,
  permissions, output meaning, and applicable restart/resume behavior.
- Native schemas, model/effort precedence, routing, context accounting, and durable history remain authoritative.
- Failed or missing adapters cannot masquerade as verified equivalent behavior.
- Privacy remains enforced independently of feature enablement.

### Invariant surrendered

- Aggressive patch retirement and visibly different Mod-only substitutes are deferred.
- This plan does not deliver custom picker/pane/tool interfaces or duplicate native state in Mod storage.
- A deliberately disabled functional Mod may remove its optional enhancement,
  with its disabled state reported distinctly from an error.

### Owner

The sole maintainer owns native integration, adapters, their contracts, and acceptance of parity evidence.
Upstream supplies native internals but is not accountable for this repository's release.
CI checks artifact identities, platform coverage, and executed evidence;
agents may propose ports and patch retirement but cannot acknowledge them.

### Cross-seam contract

Model-visible tools and host-attributed context retain their native meaning.
A display adapter cannot mutate stored/model-visible results merely to alter presentation.
Use production-path local stubs and rendered PTY fixtures to verify identical accepted effects,
schema/refusal behavior, correlation, persistence, and native interaction.
No model-compliance score substitutes for that deterministic evidence.

## Alternatives Considered

- **Mod-owned picker, pane, or renamed tool:** excluded by the user's explicit interaction choice.
- **Override only the outgoing model/effort request:** rejected as full equivalence;
  native state, precedence, capability/context checks, and restore paths remain coupled.
- **Replace AGENTS discovery with a custom worker Mod:** conflicts with ADR-0008/0009;
  requires a separate explicit decision rather than this migration.
- **Treat a sidecar recorder as native history preservation:** rejected because expanded/resumed native transcripts
  and host provenance must remain equivalent.

## Revisit Triggers

- The user explicitly accepts a named interaction change.
- Upstream publishes an exact-target API that preserves native controls or authoritative state.
- An adapter cannot pass the existing interaction, semantic, or lifecycle contract.
