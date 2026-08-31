# Patch Obligations

## Governing Split

> `patch-obligations/registry.json` defines durable promises.
> `patch-obligations/versions/<version>.json` defines one target's realization.

Patch files are implementations, not identity authority.
The registry MUST cover every historical patch lineage, including lineages absent from the previous release.
An agent-generated registry remains a proposal until the sole maintainer acknowledges its exact catalog digest.

## Target Decisions

Every registry obligation MUST have exactly one target decision:

| Disposition | Required fields | Authority |
| --- | --- | --- |
| `ported` | Current active patch entries covering every required platform | tooling verifies |
| `upstream_equivalent` | Evidence references and digest-bound maintainer acknowledgement | sole maintainer |
| `retired` | Evidence references and digest-bound maintainer acknowledgement | sole maintainer |

Missing, duplicate, unknown, inactive, or platform-incomplete mappings MUST block.
Agents MAY propose decisions; agents MUST NOT acknowledge equivalence or retirement.

Multiple `retired` decisions MAY share one ledger-level `retirementProposal` and
digest-bound `retirementAcknowledgement`.
The digest MUST bind the exact retirement set, reason, and evidence references.
An unsigned or changed proposal MUST block as one batch rather than requiring
one acknowledgement per obligation.
Signed retirement decisions SHOULD be carried into later target ledgers unchanged.

## Evidence Receipts

`just obligation-evidence <version> <platform>` MUST run on the named real OS/architecture.
The receipt binds:

- target version and source commit;
- upstream and patched platform entrypoint hashes;
- selected current patch entries;
- executed oracle IDs and evidence class;
- zero skipped required oracles.

`just obligation-admission <version>` MUST reject missing, failed, skipped, stale, wrong-platform, hash-mismatched, or weaker-class evidence.
`static < runtime < real-os-runtime`; stronger evidence MAY satisfy a weaker requirement on the same platform.

## Release Boundary

Packaging MUST depend on obligation admission.
Release metadata MUST publish disposition counts and include the exact registry,
target ledger, acknowledgement, and evidence receipts.
Runner loss, incomplete migration, or an unavailable semantic decision delays the release.
See ADR-0005, ADR-0006, and ADR-0007 in [`../decisions/`](../decisions/).
