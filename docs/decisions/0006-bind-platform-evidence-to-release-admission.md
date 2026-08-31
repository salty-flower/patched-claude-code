# ADR-0006: Bind Platform Evidence to Release Admission

## Status

Accepted

## Governing Split

> Platform execution owns what actually ran.
> Release admission owns whether the collected evidence is sufficient.

## Context

The 2.1.251 patch.1 release treated Ubuntu CI success as release confidence
while Darwin-only Keychain tests were skipped.
The `/later` harness also selected an older patch entry and exercised only one
platform, proving that a test job can run without testing the active realization
being claimed.

Discovery, selection, execution, skip, and success are distinct facts.

## Decision

Every required platform execution must emit an immutable evidence receipt bound
to the exact artifact it tested.

```text
family/invariant IDs
+ target version
+ source commit
+ upstream and patched artifact digests
+ platform and evidence class
+ selected patch entry IDs
+ selected and executed oracle IDs
+ outcomes
```

Release admission must join receipts with the obligation catalog and target
decisions.
It must reject a release when any required receipt is missing, skipped, stale,
synthetic, hash-mismatched, produced on the wrong platform, or does not name the
current target's active realization.

Evidence classes are not interchangeable:

| Required class | Insufficient substitutes |
| --- | --- |
| `static` | None; exact-byte and locator assertions remain required |
| `runtime` | Static assertions alone |
| `real-os-runtime` | Static assertions, emulation, or another OS |

The `/later` oracle must exercise absent and supplied UUID paths through the
rendered target and assert defined, non-colliding scheduler identities.
The explicit-Keychain oracle must run on macOS with selected/default sentinels
and prove selected-only reads, writes, deletes, fail-closed behavior, and an
unchanged default sentinel.

## Consequences

### Invariant upheld

- A platform is called verified only when its required active realization and
  semantic oracle ran successfully against the released bytes.
- Wrong-version selection, platform skip, stale attestation replay, and artifact
  mismatch cannot appear green.
- Static locator success cannot satisfy a runtime behavior obligation.

### Invariant surrendered

- Cross-platform static checks and emulation cannot substitute for an unavailable
  required runner.
- Runner outage or loss of a required platform delays the release.
- Evidence proves execution of declared oracles, not that the oracle set covers
  every future semantic failure.

### Owner

- **Sole maintainer**: required platforms, evidence classes, oracle intent,
  workflow maintenance, and failure response.
- **Platform jobs**: execute active realizations and emit receipts.
- **Release admission**: aggregate receipts and fail closed.

All responsibilities remain in one repository and release workflow.
Hosted runner operation remains external; retry, defer, or halt decisions remain
with the maintainer.

## Alternatives Considered

- **Green job name as evidence**: rejected by quality-attribute; it does not
  prove selection or execution of the current realization.
- **Allow skipped platform tests**: rejected by problem-framing; absence would
  again masquerade as success.
- **Linux-only release gate plus later macOS audit**: rejected because the
  released claim would precede its required evidence.
- **Independent platform-verification service**: rejected by org-fit; it adds an
  unownable operational boundary for a single maintainer.

## Revisit Triggers

- A required real-OS behavior gains a demonstrably equivalent deterministic
  harness.
- Hosted runners cannot provide a required platform for an acceptable period.
- Artifact production moves outside the current release workflow.

