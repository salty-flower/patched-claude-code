# ADR-0008: Keep AGENTS Discovery and Precedence in the Native Runtime

## Status

Accepted

## Governing Split

> Native Claude Code owns AGENTS discovery and precedence as one behavior.
> The patched runtime must deliver the resulting applicable files to prompt
> context in native order.

## Context

The 2.1.281 target bump must preserve applicable `AGENTS.md` instructions while
running through the Bun disk graph.
Discovery, path/content identity, scope, and precedence jointly determine which
instructions reach the prompt and in what order.

The prior patch obligation promised realpath-overlap at-most-once behavior.
The user approved retiring that promise and adopting Claude Code 2.1.281's native
path/content semantics.

The current release candidate does not include a working AGENTS loader in its
Bun disk graph.
Choosing native ownership does not satisfy the runtime obligation by itself;
loader absence remains a release blocker.

## Decision

Keep AGENTS discovery and precedence together under Claude Code 2.1.281's native
runtime behavior.
The session and prompt-context assembly consumes the ordered applicable files,
including each file's path, content, scope, and precedence.

Release evidence must show applicable parent, project, and child AGENTS content
reaching context in native order through a rendered interactive TUI fixture.
An absent loader or a failing fixture blocks release admission.

The patch layer does not promise that realpath-overlapping files are included at
most once.
Accept the target's native path/content identity and deduplication behavior.

## Consequences

### Invariant upheld

- Applicable native AGENTS content reaches prompt context in native order, with
  path, content, scope, and precedence preserved.
- The rendered interactive TUI fixture covers parent, project, and child files;
  missing loader behavior or incorrect order prevents release.
- AGENTS discovery and precedence cannot drift into separate sources of
  behavior.

### Invariant surrendered

- The patch layer no longer guarantees realpath-overlap at-most-once inclusion.
- Native path/content identity semantics determine overlap handling, including
  cases where realpath identity differs.

### Owner

- **Claude Code upstream**: native AGENTS discovery, identity, scope, and
  precedence semantics.
- **Sole maintainer**: integration into the patched Bun runtime, interactive
  fixture and release verification, and acceptance of upstream behavior.

Upstream owns the native semantics; it is not a project team or an accountable
release owner.

### Deterministic/stochastic seam

AGENTS discovery, ordering, and prompt-input assembly are deterministic.
The downstream language-model seam does not move: the model receives assembled
context, while this decision makes no guarantee about how the model follows or
interprets that context.

## Alternatives Considered

- **Keep patch-owned realpath overlap suppression**: rejected because the user
  approved the target's native path/content semantics and retired the old
  at-most-once promise.
- **Separate native discovery from patch-owned precedence**: rejected because
  discovery and precedence jointly define the applicable ordered instruction
  set and belong to one behavior boundary.
- **Treat the selected native behavior as sufficient without a runtime loader**:
  rejected because the current Bun disk graph lacks the loader; only a rendered
  interactive fixture can establish that the selected behavior reaches context.

## Revisit Triggers

- A later Claude Code version changes AGENTS path/content identity, scope, or
  precedence semantics.
- The patched runtime moves away from Bun disk-graph execution or adopts a
  separately maintained AGENTS loader.
- The rendered interactive fixture cannot reliably observe which applicable
  files and precedence reach prompt context.
