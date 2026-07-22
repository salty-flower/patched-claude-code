# System Prompt Overrides

## Local Ownership

> The patched runtime exports upstream sections; the user owns every override and rebase.

The prototype applies only to the normal main-session prompt. It excludes
`--bare`, compact, title/rename, subagent, and auxiliary model calls.

Release artifacts separately contain a partial static prompt catalog. Catalog
entries are audit evidence, not override files; see
[`Prompt-Catalog.md`](Prompt-Catalog.md).

## Export

Set the export flag on a process that composes the normal main prompt:

```sh
PATCHED_CLAUDE_CODE_PROMPT_EXPORT=1 claude-patched
```

Default output:
`$XDG_CONFIG_HOME/patched-claude-code/prompts`, or
`$HOME/.config/patched-claude-code/prompts` when `XDG_CONFIG_HOME` is unset.
Set `PATCHED_CLAUDE_CODE_PROMPT_DIR` to choose another root.

## Override

Copy or create `overrides/<section-id>.md` using an ID from `manifest.json`.

| Content | Result |
| --- | --- |
| No `{{upstream}}` | Replace the section |
| One `{{upstream}}` | Insert the current upstream section at that position |
| Multiple `{{upstream}}` values | Reject before API request |

Restart Claude Code after every edit. Files are snapshotted during process
startup.

## Rebase

Plain export refuses to bind existing override prose to a changed baseline.
Diff the current `sections/` content, edit the overrides, then explicitly
rebase:

```sh
PATCHED_CLAUDE_CODE_PROMPT_EXPORT=rebase claude-patched
```

Enable hash-only diagnostics when auditing the effective vector:

```sh
PATCHED_CLAUDE_CODE_PROMPT_DIAGNOSTICS=1 claude-patched
```

The full prototype contract and pending promotion gates remain in
[`../backlog/2026-07-22-section-level-system-prompt-overrides.md`](../backlog/2026-07-22-section-level-system-prompt-overrides.md).
