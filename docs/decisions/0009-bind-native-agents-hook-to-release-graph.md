# ADR-0009: Bind the Native AGENTS Hook to the Release Graph

## Status

Accepted

## Governing Split

> Release packaging preserves and verifies the upstream hook and its executable closure.
> Upstream owns the hook's internals; the maintainer owns release integration.

## Context

The user requires “使用新版claudecode原生行为” (“use the newer Claude Code native behavior”).
The 2.1.281 Bun module graph does not contain the native `agents-md` hook source.
The current [native extraction contract](../rules/Native-Bundle-Extraction.md) preserves bundle assets, but does not establish that this hook and its executable dependencies are present or invoked by the patched runtime.
An absent import or an empty standalone scan cannot demonstrate that AGENTS content reached the rendered TUI.

## Decision

The release graph must preserve the native `agents-md` hook under its upstream specifier and export namespace, together with its complete executable dependency closure.
Release integration must not reimplement the hook or substitute an empty scan.
Release admission must prove actual hook invocation and the resulting AGENTS content in the rendered TUI.
A missing module, unresolved import, or missing content is a failed gate.

This decision defines the release integration boundary; it does not select an extraction, linking, or runtime mechanism.
Packaging and admission remain deterministic; stochastic reconstruction is outside the release path.
The 2.1.281 release remains blocked until this behavior is implemented and proven.

## Consequences

### Invariant upheld

- The released runtime invokes the upstream AGENTS hook with its executable dependency closure.
- Rendered-TUI evidence proves that AGENTS content reached the user-visible runtime.
- Missing modules, imports, or content cannot produce a green release gate.

### Invariant surrendered

- Internal specifier and dependency-closure compatibility across target versions is not guaranteed.
- Each target must re-prove the native module identity, closure, invocation, and rendered content.
- A target whose bundle does not expose the required hook remains unreleasable until its integration is proven.

### Owner

- **Solo maintainer**: extraction, patch and release integration, and CI evidence.
- **Upstream**: native hook internals and their target-version behavior.
- **Deterministic release tooling**: preservation checks and admission evidence.

## Alternatives Considered

- **Reimplement the hook in the patched runtime**: rejected because this boundary requires upstream-native behavior and leaves internal semantics duplicated locally.
- **Treat a missing standalone import as an empty scan**: rejected because it cannot prove hook invocation or AGENTS content in the rendered TUI.
- **Promise cross-version compatibility for internal specifiers and closures**: rejected because these are target-local implementation details; each target must be re-proven.

## Revisit Triggers

- Upstream publishes a stable integration contract that replaces the internal specifier or dependency-closure requirement.
- The repository changes its bundle-first release boundary or explicitly adopts local ownership of AGENTS hook semantics.
