# Thinking summary runtime catalog approval

## Catalog approval versus runtime execution

The maintainer explicitly selected **“批准并继续（推荐）”** after presentation of the complete catalog digest `069724b3d5f4509160fa760a7c9693fcc88b106cc780ac58f727f672c60424fd`.

The [frozen proposal](<2026-10-20-thinking-summary-catalog-proposal.json>) preserves all 164 historical obligations, in their original order and with their original fields. It adds two 2.1.304 obligations for both Darwin ARM64 and Linux x64:

| Invariant | Minimum evidence | Promise |
| --- | --- | --- |
| `thinking-display-interactive-default` | runtime | Default interactive summary selection; explicit/noninteractive/disabled/capability boundaries retained |
| `thinking-preserve-summary-boundaries` | runtime | Nonempty summaries survive tool grouping in order |

The acknowledged catalog contains 166 obligations. Coverage after adoption passes: 104 ported, four upstream-equivalent, 58 retired. The separately approved [restoration digest](<2026-10-20-thinking-summary-restoration.md>) is unchanged.

Approval does not count as execution evidence. Runtime admission requires the complete explicit callback roster, recorded only after assertions succeed; static checks and unrelated suite success cannot satisfy it. Cross-platform source inspection on Darwin does not authorize a Linux OS receipt. This approval does not authorize publication.
