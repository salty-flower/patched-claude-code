# ADR-0014: Enforce Artifact Privacy Independently of Functional Mods

## Status

Proposed.
User requirements locked on 2026-10-05; runtime implementation and evidence are pending.

## Context

The user requires all non-business telemetry paths to be unreachable,
including anonymous analytics, OTel, error reporting, and local trace capture.
Unreachable implementation may remain in the artifact.
The existing anti-trace patches restrict some sensitive content;
they do not establish this stronger requirement.

Functional Mods can intercept exposed events but may be disabled, fail to load,
time out, or fail before invoking the next handler.
A collector hook does not establish control over startup producers, buffers,
local files, or independent exporters.

## Decision

Keep mandatory privacy enforcement on the patched artifact side of the boundary.
Functional Mods cannot supply or override that guarantee.
Use unconditional host patches wherever the exact target retains reachable prohibited paths;
accept upstream removal only with source-path and runtime evidence.

The guarantee covers the shipped runtime, its host-owned child/worker paths,
and repository-owned packaged Mods.
It does not claim to prevent telemetry implemented independently by arbitrary external programs or third-party Mods.
An external client is not covered merely because the patched runtime starts it.

Block telemetry-specific attribute collection, payload construction, queues, retry spools,
file/console/Prometheus output, network export, and trace propagation.
Prevent initialization, reinitialization, shutdown flush, and replay of old telemetry queues.
A sink-only no-op is insufficient when caller arguments still construct telemetry payloads.

Preserve model/auth/tool traffic, native conversation history, functional token/cost accounting,
and user-visible error messages.
Keep source-level identity/prompt leakage controls separate from exporter suppression.
Keep Keychain isolation and custom-endpoint thinking normalization as distinct host guarantees.

The release contract crosses as requirement IDs, target version,
artifact/Mod hashes, source-to-sink evidence, and platform-specific receipts.
The release is ineligible when a required path is unresolved or a required probe was skipped.

## Consequences

### Invariant upheld

- No covered non-business telemetry is collected, buffered, stored, or sent,
  even when environment/settings enable it or Mods are absent, disabled, or broken.
- Startup, child/worker execution, retries, resume, and shutdown cannot bypass the prohibition.
- Necessary business effects and native local history continue to work.
- Privacy admission binds to the exact released artifacts, independently of functional Mod availability.

### Invariant surrendered

- Telemetry-based diagnostics, analytics, and opt-in telemetry escape paths are unavailable in this patched runtime.
- The artifact may retain unreachable SDK/exporter implementations; physical byte removal is not promised.
- The artifact does not enforce a machine-wide network or data-loss policy for arbitrary external code.

### Owner

The sole maintainer owns privacy policy, host patches, repository-owned Mods,
cross-boundary evidence, and release acceptance.
CI performs repeatable verification and packaging gates.
Agents propose implementations and findings; they cannot acknowledge retirement or equivalence.
See [ADR-0007](0007-limit-agent-authority-to-proposals.md).

### Cross-seam contract

Model requests and tool calls remain business inputs to deterministic host dispatch.
Neither model-authored text nor a Mod setting can reclassify a prohibited telemetry producer as business traffic.
Enforce this at reviewed source paths, not with a natural-language purpose label or model critic.
Use deterministic stubs and negative source/storage/export probes,
paired with successful model/auth/tool/history controls.

## Alternatives Considered

- **Functional Mod as the sole privacy guard:** rejected by the quality-attribute review;
  disabled/failed hooks and unexposed startup/storage paths break the unconditional guarantee.
- **Exporter or network suppression alone:** rejected because construction, queues, local output,
  and spool replay remain observable effects.
- **Disable all nonessential traffic with one configuration flag:** rejected as a guarantee;
  it is configurable and may also disable functional feature evaluation.
- **Remove every telemetry dependency physically:** unnecessary for the user's selected unreachable-path standard.

## Revisit Triggers

- A new target introduces a producer, storage path, exporter, worker entrypoint, or trace propagator.
- A functional Mod adds network, storage, or diagnostics behavior relevant to the covered guarantee.
- The user changes the guarantee to require physical removal or machine-wide enforcement.
