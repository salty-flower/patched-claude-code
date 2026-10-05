# Unconditional Privacy and Invisible Mod Migration Plan

## Mandatory Guarantees and Functional Implementations

The user selected all non-business telemetry removal and invisible entrypoint/layout changes only.
Dead telemetry implementation may remain, but its collection, buffering, storage, and sending paths must be unreachable.
Privacy, correctness, permission, sandbox, state, resume, and provenance remain required.
This document plans execution; no runtime migration or complete telemetry-removal proof has been delivered.

| Boundary decision | Upheld | Surrendered | Accountable owner |
| --- | --- | --- | --- |
| [ADR-0014: privacy independent of Mods](../decisions/0014-enforce-privacy-outside-functional-mods.md) | Artifact privacy despite environment/settings or Mod failures | Telemetry diagnostics and opt-in escape paths; physical SDK removal is unnecessary | Sole maintainer; CI executes evidence/admission |
| [ADR-0015: native interactions and host authority](../decisions/0015-preserve-native-interactions-across-mod-adapters.md) | Native entries/layout and authoritative host behavior | Aggressive patch retirement, custom panes/pickers/tools, parallel state | Sole maintainer for host, adapters, and contract |
| [ADR-0016: deterministic admission](../decisions/0016-keep-model-intents-behind-deterministic-host-admission.md) | Existing schema, permission, effective-state, and genuine-provenance checks | Automatic fulfillment of invalid/unauthorized model intents | Sole maintainer; model provides proposals only |

The five moderator seats pass under these commitments.
The ADRs remain proposed implementation records; they do not acknowledge a new obligation catalog or patch retirement.
Keep accepted ADR-0008/0009 AGENTS ownership and the existing maintainer acknowledgement rules.

### Classification of All 30 Feature Files

**Mandatory host:** a Mod hook is not the unconditional enforcement mechanism.
**Retain native:** functional behavior needs host semantics or a visible substitute would violate the selected constraint.
**Invisible candidate:** prototype behind the existing native path; retain the patch unless parity is proven.
**Verify upstream:** investigate equivalent native behavior, then follow acknowledgement requirements.

Historical files remain in the assessment even without a v2.1.285 realization.
Explicit accepted retirements are not automatically reversed.
Split mixed files by requirement rather than retiring the entire TOML for one portable locator.

| Feature file | Execution decision | Reason or exact gate |
| --- | --- | --- |
| [agent-memory-discovery](../../patches/agent-memory-discovery.toml) | Retain accepted native ownership | ADR-0008 adopts native discovery/precedence and retires realpath-only dedup; no new custom discovery worker |
| [agents-md-native-hook](../../patches/agents-md-native-hook.toml) | Retain host loader; verify upstream integration | Native builtin Mod does not itself repair the extracted disk graph; preserve ADR-0009 trusted callback and sentinel evidence |
| [anti-trace](../../patches/anti-trace.toml) | Mandatory host; expand privacy coverage separately | Current sensitive-content gates do not remove all analytics, OTel, error, and trace producers/sinks; identity and served-text controls remain distinct |
| [ask-user-question-unlimited](../../patches/ask-user-question-unlimited.toml) | Retain native patch | Keep original tool identity, unbounded coherent batch, schemas, answer mapping, custom answers, and cancellation; no serial/new-tool replacement |
| [channel-access](../../patches/channel-access.toml) | Retain native patch | Feature/provider gates and native permission relay are not post-ingress Mod filtering |
| [custom-model-slots](../../patches/custom-model-slots.toml) | Retain native patch | Native picker rows, model identity, catalog validation, and session state stay authoritative |
| [disable-background-agent-kill-on-global-interrupt](../../patches/disable-background-agent-kill-on-global-interrupt.toml) | Retain native patch | Preserve running-agent handoff, Ctrl+C behavior, and cancellation order |
| [experimental-csharp-tool](../../patches/experimental-csharp-tool.toml) | Retain historical experiment contract; no renamed Mod substitute | Same tool identity, always-ask behavior, background refusal, native sandbox writable paths and fail-closed semantics |
| [experimental-nushell](../../patches/experimental-nushell.toml) | Retain historical experiment contract | Nu executes through the existing Bash identity/provider with cwd handoff; do not claim sandbox parity beyond the documented unsandboxed experiment |
| [explicit-macos-keychain](../../patches/explicit-macos-keychain.toml) | Mandatory host isolation | Startup/prefetch/login/save/refresh/delete/resume/doctor credential storage precedes or bypasses functional hooks |
| [fable-model-picker](../../patches/fable-model-picker.toml) | Verify native OAuth evidence; respect signed decisions | Existing OAuth equivalence is separate from the historically retired API-key row; no custom picker and no automatic reinstatement |
| [file-read-path-context](../../patches/file-read-path-context.toml) | First invisible Mod candidate | Same native result row and basename suffix across six branches; correlate image paths without changing stored/model-visible data |
| [later-command](../../patches/later-command.toml) | Retain scheduler; defer suggestion-only extraction | Preserve `/later`, busy queue order, paste/image contents, composer cleanup, list and lifetime; registering a suggestion alone does not port scheduling |
| [mcp-result-rendering](../../patches/mcp-result-rendering.toml) | First invisible Mod candidate | Full text and existing warning in the same result layout; preserve expansion, scrolling, selection, errors and non-text behavior |
| [model-effort-capabilities](../../patches/model-effort-capabilities.toml) | Retain native patch | Explicit capabilities, admission, rejected-effort retry/latch and truthful notices remain coupled host behavior |
| [model-effort-session](../../patches/model-effort-session.toml) | Retain native patch | One host resolver owns CLI/Agent/session/slot/env/saved/default precedence |
| [model-effort-ui](../../patches/model-effort-ui.toml) | Retain native picker/slider; defer output-only slice | No replacement picker/pane; command/current/model-change text is a later invisible candidate after runtime state parity |
| [per-model-context-window](../../patches/per-model-context-window.toml) | Retain native patch | Authoritative window drives accounting and auto-compaction, not just displayed estimates |
| [per-model-endpoint](../../patches/per-model-endpoint.toml) | Retain native SDK routing | Keep create/count-token beta/nonbeta URL/credential/header behavior; no new provider gateway |
| [resume-1m-model-defaults](../../patches/resume-1m-model-defaults.toml) | Retain native patch | Restore core model/default/alias state before requests; request-only rewrite is insufficient |
| [signature-block-custom-endpoint](../../patches/signature-block-custom-endpoint.toml) | Mandatory host normalization | Preserve/strip actual signed historical API blocks before native request construction; display text lacks that authority |
| [statusline-footer-control](../../patches/statusline-footer-control.toml) | Retain native patch | Same flags/settings, footer geometry/keyboard actions, clipboard state, and external statusLine JSON; no extra Mod line/pane |
| [subagent-model-effort](../../patches/subagent-model-effort.toml) | Retain native patch | Native per-call schema, propagation, precedence, fork rules and process/in-process teammates |
| [subagent-preserve-tool-results](../../patches/subagent-preserve-tool-results.toml) | Retain native patch | Durable child results and native expanded/resumed views; no sidecar ledger |
| [suppress-npm-native-installer-warning](../../patches/suppress-npm-native-installer-warning.toml) | Verify upstream removal | Check the original notification/setup card on wrapper startup; masking a rendered notice is not source removal |
| [system-prompt-section-overrides](../../patches/system-prompt-section-overrides.toml) | Later invisible seam candidate; retain guard/bridge initially | Same export/rebase environment interface, snapshot/digest/diagnostics, main-only scope and zero-request stale-input refusal |
| [thinking-display](../../patches/thinking-display.toml) | Retain native patch | Existing inline row, timing, completion/interrupt cleanup and transcript toggle; no band/pane substitute |
| [transcript-preserve-repl-history](../../patches/transcript-preserve-repl-history.toml) | Retain native patch | Preserve native JSONL rows before filtering/promotion and through resume; a pre-storage hook's order remains unproven |
| [ultracode-opus46-max](../../patches/ultracode-opus46-max.toml) | Retain native capability gate | Request effort does not admit the existing native workflow toggle for max-only models |
| [workflow-history](../../patches/workflow-history.toml) | Retain runtime; defer advisory-only slice | Immutable snapshot, bounded worker history/cache identity, genuine Q&A, origins, remote paths and classifier provenance remain host-owned |

## Execution Packages and Interfaces

### Exact-Target Evidence and Shared Dossier

Start from an isolated worktree based on explicit `origin/main` after fetching.
All subsequent reads/edits target that worktree; the lead owns staging and commits.
Pin the current configured v2.1.285 target and both `darwin-arm64` and `linux-x64` artifacts.
This plan does not implicitly bump the target or the read-only v2.1.88 reference.

Stage the exact target, record platform entrypoint/module hashes,
and export its hook declarations through the real `/plugin-types` path in an isolated fixture.
Verify loading, render sites, and module restrictions before relying on public documentation.
The previous audit used v2.1.289 docs, a v2.1.277 declaration file, and static v2.1.278 samples;
none certifies the current runtime API.
If a required hook is absent, retain the patch and record the candidate as unsupported on this target.
Only a separately authorized target bump can change the production version.

Generate one shared source-to-sink dossier from the unpatched target graphs.
Record stable anchors, AST callers/consumers, byte offsets, target hashes,
configuration branches and startup/child/worker/exit paths.
Use public Mods names/types as supplemental Rosetta evidence;
do not infer behavior from a literal or declared API alone.

Split reviewer ownership by semantics, not chunk:
first-party analytics/errors; OTel/local tracing/propagation; prompt/identity leakage;
and invisible native rendering.
Give each reviewer a unique scratch directory.
Cross-check shared boundaries and surprising findings before assigning locators.
The existing [v2.1.281 dossier](../records/2026-09-24-2.1.281-anti-trace-dossier.txt)
is a lead, not target-version proof.
Sentry hosts in renderer configuration do not by themselves prove an error sender.

### Unconditional Privacy Implementation

Add one logical patch feature, `patches/nonbusiness-telemetry-removal.toml`,
with ordered entries for the exact producer/init/queue/output/flush paths found in the dossier.
Every entry retains a specific v2.1.88 `rationale_ref` and original replacement text.
Keep prompt markers, author identifiers, served-text policy, Keychain isolation,
and request-history normalization in their existing owning features.

Cover first-party event logging separately from customer OTel.
Make logs/events, metrics, spans, automatic error reporters, Perfetto/local recorders,
file-backed retries and pending error/event caches inert where present.
Remove telemetry trace-context injection/propagation in covered model, MCP and child paths.
Skip telemetry-only argument construction at call sites when a logger no-op would still evaluate it.
No-op compatibility surfaces must preserve business callback execution and return shapes.

Do not implement the policy as an environment default, a collector Mod,
a blanket network block, or physical SDK stripping.
User/config opt-ins cannot restore a prohibited source.
Existing sensitive-content opt-in gates cannot remain an escape for telemetry;
map affected obligations to the stronger implementation or propose an explicit semantic update.
Earlier acceptance of default-on analytics is superseded by the user's new requirement,
not by an agent silently rewriting an old audit record.

Extend the obligation catalog with the new complete source/cache/storage/export guarantees,
including failure/lifecycle coverage and unchanged business controls.
Use runtime evidence for these guarantees rather than static locator counts alone.
Prepare a digest-bound catalog/decision proposal;
only the maintainer can acknowledge it once concrete evidence is available.

### Invisible Read and MCP Adapters

Prototype two focused plugins under `mods/read-result-path/` and `mods/mcp-full-text/`.
Each uses the native target's hooks module and resolved UI elements in the restricted worker.
Do not import Node/Bun filesystem or host internals into the Mod worker.
Use `ui.render` at existing native result sites, including grouped paths if the target uses them.
Keep permission/tool execution paths, native identities, stored results and model payloads unchanged.

Read: preserve the current basename suffix in its original result row.
Use native output paths when available;
associate image inputs/results by `tool_use_id` and support repaint/resume without relying on one live call callback.
Avoid duplicate suffixes and cross-call associations.

MCP: show full text in the existing layout with the existing large-output warning.
Support each actual target representation, including arrays, individual blocks and string branches where present.
Chunk text within the target element limits without added blank lines, truncation or changed selection behavior.
Delegate non-text/errors to native rendering where possible.

If the exact native layout or interaction cannot be preserved,
the port fails admission and its patch remains.
Do not substitute a pane, rename a tool, or silently weaken the contract.
Only after both initial adapters pass should later invisible slices be considered:
command output/suggestions, Workflow advisory text, and the system-prompt composition seam.
Their runtime counterparts and mandatory guards remain until independently proven equivalent.

### Release and Evidence Integration

Make realization tracking implementation-neutral before retiring the first locator.
Use target ledger schema 2 with a `realizations` array on `ported` decisions:
patch references name active patch entries; Mod references name packaged Mod IDs.
A hybrid decision names both.
Read schema-1 `patchEntries` as patch realizations for old targets;
do not relabel repository Mod ports as `upstream_equivalent` or `retired`.
Keep old ledgers and their signed contents unchanged when normalizing them for verification.
Keep the existing maintainer acknowledgement requirements for genuine equivalence/retirement.

Add a hashed packaged-Mod inventory to the release manifest:
ID, entrypoint, file hashes, supported target/platforms, and exact API-export hash.
Evidence receipt schema 3 adds selected Mod artifacts and executed Mod oracle outcomes;
schema-2 receipts remain usable only for old patch-only targets.
Admission validates active realization coverage, payload/API identities,
correct-platform evidence, and zero skipped required checks.
Missing or mismatched required Mod payloads cannot pass as a patch-only receipt.

Package and load the selected Mods through the existing launcher/plugin path automatically.
Bind their files to release integrity; do not require recurring manual installation or copying.
Preserve native feature settings/entrypoints.
Deliberate disabling reports the feature as disabled;
unexpected load/hash/API failure reports a distinct failure and fails the affected feature's admission.
Privacy and retained host semantic guarantees remain enforced in either state.

Implement and ship manifest/launcher/receipt consumers together.
Do not remove a locator while its requirement has no valid Mod/upstream realization.
Complete the existing [target and TUI gates](../guides/Bumping-Target.md)
and [obligation admission](../rules/Patch-Obligations.md) before release.
Unavailable Darwin evidence or unresolved maintainer decisions block release rather than weakening coverage.

## Verification and Acceptance

Use local model/auth/MCP/collector stubs and synthetic fixtures; no live API tokens or production credentials.
Probe the actual production paths, not only a reimplemented scorer, helper, or mocked exporter.
Establish unpatched positive controls for present paths so probes can observe the claimed failure;
source analysis handles genuinely absent upstream paths.
Runtime silence alone does not prove unreachability.

| Area | Required observation |
| --- | --- |
| Privacy source paths | With first-party telemetry and every OTel/content/error/trace opt-in forced on, no telemetry attribute/payload assembly, collector record, queue/spool mutation, trace file/console/Prometheus output or send occurs |
| Privacy lifecycle | Cold startup before Mods, user Mods disabled, failed load/hook/timeout, `--safe-mode`, restart/resume, child/worker activity, retry and exit/flush remain blocked; seeded old telemetry spools are not read/replayed |
| Business controls | Model/auth/tool flows, native error messages, token/cost TUI accounting, local transcript write/resume, and required MCP operations still succeed |
| Read | Six result branches, image correlation, POSIX/Windows separators, grouped rows, errors, redraw/resume; same suffix, native geometry/focus/keyboard, and unchanged model-visible payload |
| MCP | Array/string/block cases present in target, very long text, warning threshold, structured/non-text/error outputs, grouping, expand/collapse, scroll/selection and resume; no new truncation or spacing |
| Host semantics | Native picker/effort precedence, count-token routing, context/compaction, default-1M restore, ordinary/fork/teammate effects, Keychain and sandbox contracts remain on existing checks |
| Deterministic admission | Forged/mislinked/duplicate/timeout human answers cannot gain provenance; unsupported effort/model mismatches follow native decisions; rejected requests have no protected effects |
| Release | Tampered/missing Mods, stale API exports, wrong platform/hash, failed/skipped oracle and disabled-versus-error cases cannot masquerade as passing realization evidence |

Capture rendered PTY states under controlled dimensions for original versus adapter-backed native interactions.
Exercise a real local-only action such as `/exit` after reaching the main TUI.
Use Mod tests for adapter logic, then production rendering and local-stub request captures for integration.
Run the complete affected release matrix on both real supported platforms;
Keychain evidence remains real macOS evidence.
Run `just verify` before any patch commit, together with meaningful patch/runtime/TUI checks.

## Defaults, Ownership, and Completion

- Current execution baseline: v2.1.285; no automatic target/reference bump.
- Trust scope: shipped runtime and repository-owned Mods; no machine-wide claim for arbitrary external code.
- Native interaction is required; unsupported/visibly different Mod ports stay patches.
- Existing accepted AGENTS and provenance ADRs remain intact.
- Solo maintainer owns all boundaries and semantic acceptance; CI performs repeatable checks.
- Lead owns integration/commits; workers own disjoint feature paths and isolated evidence scratch directories.

Completion means a reviewed source-to-sink privacy dossier and passing artifact-bound privacy evidence,
plus each chosen invisible port's native-interaction and semantic evidence.
Remaining host patches stay mapped to their obligations.
Historical unbumped requirements are explicitly tracked;
equivalence/retirement decisions are neither inferred nor agent-acknowledged.
The first migration can finish with privacy enforced and both rendering patches still retained
if either Mod prototype fails native parity; it cannot finish by claiming an unproved replacement.

Technical API evidence is in the [earlier feasibility audit](2026-10-04-mods-patch-feasibility.md).
Official starting points are [Mods reference](https://code.claude.com/docs/en/plugins/mods/reference),
[hook failure behavior](https://code.claude.com/docs/en/plugins/mods/events#handle-a-hook-that-fails),
[monitoring](https://code.claude.com/docs/en/monitoring-usage),
and [data usage](https://code.claude.com/docs/en/data-usage).
