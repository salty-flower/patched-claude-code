# Workflow History Implementation Audit — 2.1.285

## Transport Evidence and Model Interpretation

The implementation preserves bounded human history and genuine question answers through worker framing and native classifier normalization.
Verification uses deterministic local fixtures and the rendered interactive TUI.
It establishes context delivery and actual local action wiring, not GPT or Claude compliance with natural-language authorization.

The runtime contract and configuration are documented in [Workflow History](../guides/Workflow-History.md).
The four accepted design decisions begin with [ADR-0010](../decisions/0010-select-worker-history-from-workflow-start.md).

## Audited Failure

Source session: `f6875be6-e104-43f2-9da0-2b1b1c1bdf35`, Claude Code 2.1.285.
The native Workflow selector relayed the latest qualifying user text while skipping tool results,
including an actual `AskUserQuestion` rebase approval.
The worker therefore received an unrelated status comment with framing that called it the only user voice,
and refused the assigned rebase.
Later workers in the observed run retained its launch-time request despite subsequent chat.

Code and transcript supported separate repairs to selection, framing, and classifier attribution.
Increasing the window alone would still lose tool-carried human answers.

## Target Bindings

All entries in [`workflow-history.toml`](../../patches/workflow-history.toml) apply only to `>=2.1.285 <2.1.286`.
The native Workflow surface postdates the v2.1.88 audit baseline;
patch `rationale_ref` fields therefore anchor the corresponding agent prompt, tool-result provenance, and classifier boundaries.
Current target bindings below provide the additional released-bundle evidence.

| Boundary | Darwin arm64 | Linux x64 |
| --- | --- | --- |
| History selector / renderer | `ccr` / `pcr`, `chunk-w4y5w0x0.js` | `Ulr` / `Wlr`, `chunk-f5hg8144.js` |
| Native human-origin analyzer | `hq` | `lK` |
| Assignment renderer / display unwrap | `BRn` / `woo` | `TRn` / `Vro` |
| Workflow runner / option sanitizer | `Ho` / `kpn`, `chunk-nt0myt9g.js` | `Ho` / `cpn`, `chunk-n7eej4er.js` |
| Classifier normalizer / serializer | `bzt` / `Iyo`, `chunk-59zy4j10.js` | `Dzt` / `Kho`, `chunk-qazw855w.js` |
| Authoring reference / tool description | `far` / `mar`, `chunk-758w7s8t.js` | `Ksr` / `Ysr`, `chunk-4wgtv6g6.js` |

The runner captures projected native records once and freezes them recursively.
Its host-generated snapshot digest and canonical count participate in the native option-based memo identity,
so replay cannot reuse an output under a different snapshot or history count.
Local and remote selection call sites use the same captured records;
the unavailable remote execution path has only static coverage.

Selected history uses native human origin; the computed assignment uses coordinator origin.
The native classifier receives these distinctions after its real transcript normalization and memory redaction.
The complete native activation function, its two invocation sites, and provenance gate remain unchanged.

## Question-Answer Attribution

The helper requires a unique preceding assistant `AskUserQuestion` call,
an unambiguous successful result linked through `sourceToolAssistantUUID` and tool-use identity,
matching original questions and options, and structured human output.
It excludes errors, duplicates, missing links, raw-only tool claims, automatic timeout answers,
and answers attached to another tool.
Multiple questions, custom text, and annotations stay in one interaction.

The native question UI strips model-prefilled answers before collecting user input.
The helper reads the host's structured result instead of promoting raw result text or model-supplied answers.
This trusts the native host and configured hooks:
a trusted hook that rewrites structured fields while preserving valid linkage cannot be distinguished cryptographically from the host's original output.

## Resource and Release Delivery

The patch imports a graph-local `patched-workflow-history.js` built from repo-owned TypeScript and YAML.
Mustache 4.2.0 is pinned, bundled, and accompanied by its license.
The helper is emitted after patch application on both platform graphs.
Graph copying, release integrity, source-tag payloads, and Nix packaging include both generated files.
No global preload or external runtime package lookup is required.

Four obligations cover bounded history, assignment provenance, classifier answers, and advisory delivery.
The evidence runner requires actual runtime callbacks;
registry membership and static locator success alone cannot satisfy them.
Each platform still needs its own real-host receipt before release admission.

## Verification Evidence

Final helper, native classifier/authoring, prompt-identity, and rendered Workflow checks use Bun 1.3.13,
matching the repository's CI pin.
Existing resume, signature, and system-prompt fixtures pass unchanged under this version
after exceeding their deadlines with local Bun 1.4.2.
The focused statusline fixture includes its footer, thinking, and model-effort-session dependencies;
its runtime assertions and deadlines are unchanged, and the complete-bundle statusline smoke also passes.

| Check | Observation |
| --- | --- |
| Helper unit fixtures | Count validation, immutable snapshots, memo identity, chronological corrections, atomic size omissions, forged input, duplicate links, custom/multiple answers, timeout exclusion, and frame escaping |
| Native classifier regression | Imports the patched target's actual selector, message constructors, normalizer, and serializer in an isolated child; authentic answers survive, fabricated sources receive no human credit |
| Classifier policy comparison | Full native activation function, both call sites, and provenance gate are identical to upstream; this does not invoke a model-backed classification decision |
| Native authoring calls | Execute the actual authoring reference and both tool-description branches; verify default, bounds, advisory wording, and a single self-check marker after nested rendering |
| Rendered Darwin interactive TUI | Real question UI submission, unrelated follow-up, N=1/N=3 workers, and later parent input while the first worker is held |
| Captured worker requests | N=1 omits Q&A atomically; N=3 carries original source IDs, questions, and answers; the later worker excludes post-start input |
| Actual local operations | Scripted worker executes fetch/rebase, `bun test`, and non-force FF push against an isolated bare remote; tool-result order and final repository/remote state are asserted |
| Terminal lifecycle | Question and Workflow screens render; local `/exit` completes without render-boundary errors |
| Negative control | Unmodified bundle fails the same N=3 context assertion before action assertions |
| Both target graphs | Locator verification and full rendering succeed; Linux runtime evidence remains a Linux-host responsibility |

Evaluation validity:

- Expected attribution and action order follow from explicit fixture inputs and exact user UI selection.
- The fixture uses production rendering, native normalization, real Workflow execution, and default permission mode with exact local command allow rules.
- Captured requests expose context loss; actual tool results and Git state expose missing or reordered operations.
- Stub responses choose actions deterministically, so these checks cannot measure model interpretation, repeated-approval propensity, reviewer compliance, or semantic classifier decisions.

No model behavior score is claimed.
Live semantic evaluations of withheld consent, revocation, read-only assignments, and advisory window repair remain distinct from this deterministic transport verification.
Remove the local patch when upstream supplies equivalent bounded, attributed history and compatible question-answer normalization.
