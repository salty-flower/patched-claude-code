# System Prompt Overrides

## Upstream composition versus user policy

Upstream owns section construction, runtime context, cache partitioning, output styles, and request assembly.
The packaged helper applies user-owned selections to native structured sections; this repository ships no replacement prompt policy.
Native `prompt.compose` works with its packaged worker after the graph URL relocation fix.
Native dispatch errors fall back to core composition, so a mod's stale-target exception does not prevent an API request.
The narrow helper bridge validates outside that fallback; it is not a plugin framework.

## Selection contract

The structured contract starts at target `2.1.301`.
Identity is the native `(scope, id)` pair, such as `shared/lean_body` or `session/memory`.
Upstream strips colon variant suffixes before exposing IDs; selected text can still vary by model, tools, style, and settings.
IDs are audited for an exact target version, not promised permanently across versions or equated with static catalog lineage IDs.

| Rule | Result |
| --- | --- |
| Unselected section, including an unknown upstream ID | Preserve exact upstream text and position |
| `keep` | Require the named section to exist; preserve current text |
| `replace` | Require a selected-text SHA-256 match; insert text from `file` |
| `remove` | Require a selected-text SHA-256 match; omit that section |

Replacement files permit zero or one `{{upstream}}` placeholder, substituted literally.
Configuration and replacement files are snapshotted at process startup; restart workers after edits.
No rule matches English prose, array positions, or cache boundary markers.
`targetVersion` must equal the packaged upstream version.
Replacement/removal rules require `expectedSha256`: an SRI SHA-256 string or explicit array of accepted text hashes.
Keep rules may optionally supply the same check.
Only selected hashes are checked, so another project's memory path or changing token state does not invalidate an unrelated static rule.
Missing selected IDs preserve native absence; changed selected text retains the complete native section and skips that rule.
Other independently matched rules still apply, and a later matching composition applies the reviewed rule again.
Each selection/reason emits one warning per process, without prompt text or private paths.
Duplicate targets, malformed files, unreadable resources, unsupported versions, and ambiguous upstream identities still fail before the main request.
The launcher separately verifies the complete packaged graph inventory and hash.

## Export and minimal machine-state configuration

Set `PATCHED_CLAUDE_CODE_PROMPT_DIR` to the directory managed by machine-state.
The default is `$XDG_CONFIG_HOME/patched-claude-code/prompts`, falling back to `$HOME/.config/patched-claude-code/prompts`.
Export using the intended model, tools, and output style:

```sh
PATCHED_CLAUDE_CODE_PROMPT_EXPORT=1 claude-patched
```

Export writes private `upstream/<scope>-<id>.md` files and `sections.v2.json` with IDs and baseline hashes.
It also retains the legacy `manifest.json`/`sections/` export.
Runtime prose can contain private context; do not publish it or copy sample runtime values into generic prose.

For an exported lean profile, install the user's existing text as `prompt.md` and generate `config.json` inside that directory:

```sh
jq '([.sections[] | select(.scope == "shared" and .id == "lean_body")]) as $targets | if ($targets | length) != 1 then error("expected shared/lean_body; inspect this profile") else {schema: 2, targetVersion, rules: [$targets[] | {id, scope, action: "replace", expectedSha256: .baselineSha256, file: "prompt.md"}]} end' sections.v2.json > config.json
```

This adopts the actual native ID and exported hash, without putting personal prose in this repository.
For a full profile, select desired IDs from the [section inventory](../records/2026-10-16-2.1.301-memory-audit.md#native-section-inventory).
Add explicit `remove` rules for redundant behavior only after reviewing each complete section.
An explicit dynamic retention rule is `{"id":"memory","scope":"session","action":"keep"}`, without pinning its project-dependent text.
Use `memory_static` instead when the exported SDK profile exposes that split.

Machine-state only installs this directory and sets `PATCHED_CLAUDE_CODE_PROMPT_DIR` for each launcher/worker.
The standard packaged `system-prompt-overrides.ts` preload performs the wiring.
After successful initialization it supplies an exact bootstrap URL to the repository dispatcher, so daemon re-exec restores the helper and terminal sidecar even when upstream drops Bun preload arguments.
Do not set `PATCHED_CLAUDE_CODE_RUNTIME_BOOTSTRAP` manually.
Remove the appended `compact-prompt.ts` import and custom global Symbol wrapper.
English-prefix, first-section, and cache-boundary detection are unnecessary.

The existing machine-state module can replace its sidecar mutation with this package wrapper, using the generated `config.json` and its existing `prompt.md`:

```nix
{ lib, pkgs, ... }:
let
  promptDirectory = pkgs.linkFarm "claude-system-prompt" [
    { name = "config.json"; path = ./config.json; }
    { name = "prompt.md"; path = ./prompt.md; }
  ];
in
{
  programs.claude-code.package = lib.mkForce (
    pkgs.patched-claude-code.overrideAttrs (old: {
      postInstall = (old.postInstall or "") + ''
        wrapProgram "$out/bin/claude-patched" \
          --set PATCHED_CLAUDE_CODE_PROMPT_DIR ${promptDirectory}
      '';
    })
  );
}
```

Export into a separate writable directory before installing this immutable configuration.
This is the consumer migration example; the installed Nix deployment itself was not changed or executed by this task.

## Memory and live context

Normal composition retains complete memory rules and real paths in `session/memory`.
The SDK preset can split rules into `shared/memory_static` plus separately assembled dynamic memory context; preserve both.
The [memory audit](../records/2026-10-16-2.1.301-memory-audit.md#memory-contract) covers frontmatter, index conventions, deduplication, correction/deletion, exclusions, background authority, and reference verification, including variant differences.
Selecting generic body sections leaves unselected project/user instructions, skills, tools, environment/model context, focus mode, token state, output style, and provider steering under upstream ownership.
The helper never reconstructs dynamic values from export samples.

## Ordering and diagnostics

1. Upstream resolves output style and native `prompt.section` answers during structured section construction.
2. Native `prompt.compose` composes or replaces that result.
3. The helper validates and applies `config.json`, inserting user prose at selected IDs.
4. Upstream partitions caches and performs its prompt-string deletion mapping.
5. Legacy ordinal overrides apply when no structured config is active.
6. Upstream assembles remaining context, style/provider steering, attribution, and request parameters.
7. The observer records hashes at the completed main request builder return, after body overrides and sanitation.

User prose belongs to step 3, not a second post-validation wrapper.
Output style affects initial section selection and is delivered through upstream `output_style_instructions` message attachments on this target.
A generic-body override does not select or suppress those attachments.
Explicit upstream prompt-string deletion still runs after structured replacement and can delete matching user prose.

```sh
PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS=1 claude-patched
```

`[system-prompt-request]` contains version, request source, final `system`, `messages`, and `tools` hashes, final system text-vector hash, and section IDs/provenance/hashes.
`recoveries` lists current-composition selection IDs/scopes and `absent` or `hash_mismatch` reasons; retained sections keep `upstream` provenance.
`systemSha256` hashes UTF-8 `JSON.stringify(request.system)`, including cache metadata.
`messagesSha256` and `toolsSha256` use the same JSON hashing, including styles/instructions delivered as message context and the final tool definitions.
`systemTextVectorSha256` hashes length-prefixed block text.
`vector` separately describes the intermediate flattened vector and legacy ordinal changes.
The section list describes structured upstream/user/removed provenance; legacy edits are represented by `vector.sectionDiff`.
Here `upstream` means the native composer's input to this bridge, including any native mod answers; it is not an authorship claim about plugin-supplied text.
Section hashes describe that structured stage; the vector and completed-request hashes separately reflect later deletion, assembly, styles, and body overrides.
No prompt text, display headings, memory paths, override paths, or user content is printed.
Auxiliary request kinds are outside the main-session observer.
Attribution is untouched and remains controlled by upstream's `CLAUDE_CODE_ATTRIBUTION_HEADER`.

## Legacy compatibility and migration

Without `config.json`, `manifest.json` and `overrides/<version-ordinal>.md` retain strict coordinate/vector validation and `{{upstream}}` behavior.
The v1 bridge remains available; its dynamic-vector limitations are not silently relaxed.
Structured config and active legacy Markdown overrides are mutually exclusive, with a startup error instead of implicit priority.
Preserve the old directory, export into a new directory, review native IDs, and bind only intended replacements/removals to current hashes.
Install user text and config there, change the directory setting, remove the wrapper, and restart all entrypoints.
On target or selected-text changes, export separately, diff sections, and deliberately update version/hashes.
Export never rewrites `config.json` or automatically accepts semantic drift.
Legacy explicit rebase remains `PATCHED_CLAUDE_CODE_PROMPT_EXPORT=rebase claude-patched`.

Full custom `--system-prompt`, bare, compact, subagent, title/rename, and auxiliary calls are outside the supported structured main-session contract.
Analysis-only, teammate, and detached renderer calls bypass structured overrides; forks inheriting an already rendered main prompt retain that inherited prompt.
Entrypoints must load the packaged preload; direct `bun cli.js` preserves upstream behavior without a helper.
Actual section lists, origins, hashes, SDK/ACP/daemon execution, and unexecuted branches are in the [runtime record](../records/2026-10-16-2.1.301-prompt-runtime.md).
The [target bump report](../records/2026-10-16-2.1.301-target-bump.md) covers the remaining patch and release gates.
