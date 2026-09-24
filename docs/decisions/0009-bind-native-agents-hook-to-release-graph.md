# ADR-0009: Run the Verified AGENTS Callback in the Trusted Runtime

## Status

Accepted

## Governing Split

> Only the pinned, verified upstream builtin AGENTS callback runs on the
> trusted Claude runtime/graph side.
> Other hooks continue in the restricted worker; it receives no AGENTS
> executable closure or host-module require grant.

## Context

The user requires Claude Code 2.1.281's native AGENTS behavior.
[ADR-0008](0008-keep-native-agents-discovery-and-precedence-together.md) keeps
native discovery and precedence together and requires ordered applicable files
to reach prompt context.

Boundary probes showed that a forced embedded scan omitted the AGENTS sentinel.
Importing the native callback into the restricted hook worker failed on
`child_process`; its 124-file closure also exceeds the worker's 80-file limit.

## Decision

Run only the pinned, verified upstream builtin AGENTS callback in the trusted
Claude runtime/graph side, together with its verified upstream closure.
Keep other hooks in the restricted worker under its existing restrictions; do
not pass it the AGENTS executable closure or grant it host-module `require`
access.

Pass the callback's ordered applicable AGENTS documents and explicit loader
status into prompt/session context as inert data. Preserve ADR-0008's native
discovery and precedence semantics. Distinguish a successfully loaded empty
result from a loader or callback failure; never convert a failure into empty.

This decision fixes the trust boundary, not the runtime integration mechanism.
The 2.1.281 release remains blocked until the runtime implements this boundary
and a rendered interactive TUI sentinel proves applicable AGENTS content
reaches context in native order.

## Consequences

### Invariant upheld

- Only the pinned, verified upstream builtin callback and its closure receive
  trusted Claude runtime privileges.
- Ordered applicable documents and loader status cross into prompt/session
  context as inert data.
- Native discovery and precedence remain one behavior, as defined by ADR-0008.
- A loaded empty result remains distinct from a missing module, import failure,
  or callback failure.
- Other hooks remain in the restricted worker under existing restrictions;
  the worker receives no AGENTS executable closure or host-module `require`
  grant.
- The rendered TUI sentinel is required release evidence for this runtime path.

### Invariant surrendered

- The builtin callback and its upstream closure do not receive the restricted
  hook worker's containment; they execute with trusted Claude runtime
  privileges.
- The release boundary relies on pinning and verifying the upstream builtin
  identity and its closure for each target version.

### Owner

- **Solo maintainer**: pinning, verification, runtime integration, and TUI
  release evidence.
- **Upstream**: builtin callback internals and target-version behavior.

## Alternatives Considered

- **Force an embedded scan**: rejected because the scratch probe omitted the
  AGENTS sentinel.
- **Load the native callback in the restricted hook worker**: rejected because
  its closure imports `child_process` and contains 124 files, beyond the
  worker's 80-file limit. Raising the limit or granting host-module require
  would change the worker's trust boundary.
- **Treat loader failure as an empty result**: rejected because it hides a
  missing or failing runtime integration.

## Revisit Triggers

- Upstream publishes a stable AGENTS callback integration contract that
  changes the pinned identity or trusted-runtime boundary.
- The repository changes its Bun disk-graph release boundary or its restricted
  hook-worker trust model.
- The rendered interactive TUI sentinel cannot reliably establish that ordered
  applicable AGENTS content reaches prompt/session context.
