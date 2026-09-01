# Historical Patch Retirement Proposal

## Scope

Target `2.1.251` obligations without a current realization.

## Proposed Decision

Retire the historical behaviors that the maintained patched bundle no longer uses.
Keep all currently ported obligations fail-closed.

This record is evidence for a proposal, not maintainer acknowledgement.
The exact retirement set is bound by the target ledger's proposal digest.

## Maintainer Disposition (2026-09-01)

- Sole maintainer carved seven `statusline-footer-control` invariants out of
  the batch and directed re-anchoring at 2.1.251: `command-length-mount`,
  `rate-limit-warning`, `rate-limit-warning-deps`, `effort-notification`,
  `effort-level`, `clipboard-image-hint`, `clipboard-image-hint-context`.
- Those seven are `ported` against the new 2.1.251 footer entries.
- Signed proposal binds the remaining 78 retirements
  (`8d47105348e0b5081414e43a448346e04849552bcc0aacdcc3bd8159180f86d5`);
  registry catalog signed (`cfb0439d65b1e4a05c022b03dfd8cb4851342dccd7f6037ab845c65795295b2c`).
