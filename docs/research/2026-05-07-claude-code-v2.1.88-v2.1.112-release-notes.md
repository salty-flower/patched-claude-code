# Claude Code v2.1.88-v2.1.112 Release Notes

## Source Status

| Source | Use | Notes |
| --- | --- | --- |
| Anthropic Claude Code changelog | Primary notes for v2.1.89-v2.1.112 | Official page is generated from `anthropics/claude-code` `CHANGELOG.md`; it omits v2.1.88 and has no entries for v2.1.100 or v2.1.104. |
| Anthropic Claude Code "What's New" | Supplemental context for notable feature clusters | Week 16 covers v2.1.105-v2.1.113 and is useful for interpreting `/ultrareview`, Opus 4.7, native binaries, and related feature rollouts. |
| GitHub releases | Publish timestamps and empty/body checks | `v2.1.88` is no longer viewable with `gh release view`; `v2.1.100` and `v2.1.104` have release tags but no substantive release body. |
| npm registry metadata | Package publish timestamps | Registry `time` still lists v2.1.88, but fetching `@anthropic-ai/claude-code@2.1.88` now returns 404. |
| NewReleases snapshot | Fallback notes for v2.1.88 | Captures a now-unavailable v2.1.88 GitHub release body; treat as secondary evidence. |

Sources checked on 2026-05-07:

- https://code.claude.com/docs/en/changelog
- https://code.claude.com/docs/en/whats-new/2026-w16
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- https://github.com/anthropics/claude-code/releases
- https://registry.npmjs.org/@anthropic-ai%2fclaude-code
- https://newreleases.io/project/github/anthropics/claude-code/release/v2.1.88

Capture status for these notes is tracked in
[v2.1.88-v2.1.112 Delta Capture Matrix](./2026-05-07-v2.1.88-v2.1.112-delta-capture-matrix.md).

## Covered Versions

The released versions observed between v2.1.88 and v2.1.112 are:

`2.1.88`, `2.1.89`, `2.1.90`, `2.1.91`, `2.1.92`, `2.1.94`, `2.1.96`, `2.1.97`, `2.1.98`, `2.1.100`, `2.1.101`, `2.1.104`, `2.1.105`, `2.1.107`, `2.1.108`, `2.1.109`, `2.1.110`, `2.1.111`, `2.1.112`.

No npm/GitHub release was observed for skipped numeric versions such as `2.1.93`, `2.1.95`, `2.1.99`, `2.1.102`, `2.1.103`, or `2.1.106`.

## Release Digest

| Version | npm publish time | Release-note status | Digest |
| --- | --- | --- | --- |
| 2.1.88 | 2026-03-30T22:36:48Z | Yanked/unavailable upstream; secondary snapshot only | Introduced flicker-free alt-screen opt-in, PermissionDenied hooks, named subagent mentions, multiple prompt-cache/transcript/rendering fixes, PowerShell prompt updates, hook file-path normalization, and SDK error-result fixes. This is the source-map leak version and is not present in the current official changelog. |
| 2.1.89 | 2026-03-31T23:32:40Z | Official changelog | Re-published most v2.1.88 user-facing work, added defer decisions for PreToolUse hooks, bounded MCP setup in print mode, added MCP nonblocking print mode, hardened symlink-aware file allow rules, fixed structured-output cache failures, improved transcript/cache stability, and added the short-lived `/buddy` feature. |
| 2.1.90 | 2026-04-01T23:31:39Z | Official changelog | Added `/powerup`, marketplace-cache fallback, `.husky` protected-directory handling, several resume/cache fixes, PostToolUse format-on-save handling, PreToolUse JSON blocking, auto-mode boundary respect, malformed permission-dialog handling, PowerShell permission hardening, and SDK/MCP performance fixes. |
| 2.1.91 | 2026-04-02T22:37:15Z | Official changelog | Added MCP result-size persistence overrides, skill shell-execution disablement, multiline deep links, plugin `bin/` execution, resume transcript-chain fixes, remote plan-mode fixes, `permissions.defaultMode: "auto"` schema validation, and Bun `stripAnsi` performance. |
| 2.1.92 | 2026-04-04T00:05:59Z | Official changelog | Added fail-closed remote managed-settings refresh, Bedrock setup wizard, `/release-notes` picker, remote-control naming, prompt-cache-expiry hints, Stop hook fixes, streaming tool-input normalization, several fullscreen UI fixes, and Linux sandbox helper packaging. |
| 2.1.94 | 2026-04-07T21:04:05Z | Official changelog | Added Mantle Bedrock support, changed default effort to high for many providers, added plugin output-style fields, fixed marketplace/plugin hook path issues, improved terminal rendering/accessibility, fixed Bedrock model IDs, and preserved interrupted SDK/print partial responses. |
| 2.1.96 | 2026-04-08T04:32:44Z | Official changelog | Fixed a v2.1.94 Bedrock authorization regression involving bearer-token or skipped-auth configurations. |
| 2.1.97 | 2026-04-08T21:27:55Z | Official changelog | Added no-flicker focus/status features and Cedar highlighting, then hardened Bash permissions, managed-settings revocation, additional-directory refresh, MCP OAuth and memory behavior, resume persistence, Stop/SubagentStop hooks, no-flicker copy/rendering behavior, sandbox network settings, image compression, transcript accuracy, and OTEL propagation. |
| 2.1.98 | 2026-04-09T18:08:49Z | Official changelog | Added Vertex setup, Perforce read-only behavior, Monitor tool, Linux subprocess sandbox controls, dynamic prompt-section exclusion, statusline worktree metadata, and many security fixes around Bash auto-allow, redirects, wildcard permission matching, prototype-name permission keys, managed settings, sandboxing, MCP OAuth, and large-output handling. |
| 2.1.100 | 2026-04-10T05:00:41Z | GitHub tag has no substantive body; omitted from official changelog | Release exists in npm/GitHub metadata but has no official notes beyond an empty release body. Treat as an undocumented intermediate package. |
| 2.1.101 | 2026-04-10T18:41:55Z | Official changelog | Added `/team-onboarding`, OS CA trust for enterprise proxies, remote-session default environment creation, brief/focus/rate-limit improvements, SDK cleanup on early iterator exit, and fixes for LSP command injection, resume chain recovery, timeout overrides, deny-rule precedence over hook ask decisions, Bedrock SigV4 auth, subagent MCP inheritance, sandbox temp files, MCP output schemas, resume picker issues, Grep fallback, and plugin resolution. |
| 2.1.104 | 2026-04-12T02:26:22Z | GitHub tag body only says changelog update; omitted from official changelog | Release exists in npm/GitHub metadata but has no user-facing notes. Treat as an undocumented intermediate package. |
| 2.1.105 | 2026-04-13T19:51:19Z | Official changelog | Added EnterWorktree path targeting, PreCompact hooks, plugin monitors, `/proactive`, API stream fallback, network/file-write UI improvements, `/doctor` and `/config` updates, larger skill descriptions, WebFetch script/style stripping, worktree cleanup improvements, MCP truncation guidance, and many fixes across queued images, prompt wrapping, whitespace preservation, terminal output, scheduled tasks, marketplace installs, MCP startup, Bedrock model persistence, keybinding validation, telemetry disablement, terminal palettes, and plan-mode permission suggestions. |
| 2.1.107 | 2026-04-14T05:18:14Z | Official changelog | Showed thinking hints sooner during long operations. |
| 2.1.108 | 2026-04-14T18:35:26Z | Official changelog | Added 1-hour prompt-cache controls, recap, model-invoked built-in slash commands, `/undo`, resume/model UX improvements, error-message improvements, lazy highlighting, prompt-cache warnings, and fixes for login paste, telemetry cache TTL, auto-mode permission classifier context overflow, env-file trailing comments, renamed resume sessions, web remote titles, recursive transcript truncation, transcript write logging, language diacritics, and policy-managed plugin autoupdate. |
| 2.1.109 | 2026-04-15T03:45:21Z | Official changelog | Improved the extended-thinking indicator. |
| 2.1.110 | 2026-04-15T20:40:53Z | Official changelog | Added `/tui`, push notifications, focus-mode split from verbose transcript, fullscreen autoscroll control, external-editor context comments, remote-control `/context`/`/exit`/plugin reload support, SDK traceparent support, session recap for telemetry-disabled users, and fixes for MCP dropped connections, non-streaming fallback hangs, plugin dependencies, skill invocation, resume names, session cleanup, relaunch keystrokes, command injection in editor-open actions, hook-updated permission input revalidation, hook additionalContext on tool failures, stdio MCP stray output, headless auto-title traffic, Ink memory allocation, skills menu scrolling, and Remote Control auth/title issues. |
| 2.1.111 | 2026-04-16T15:16:09Z | Official changelog | Added Opus 4.7 xhigh and Max auto mode, `/effort` slider, terminal-matching theme, `/less-permission-prompts`, `/ultrareview`, PowerShell rollout controls, read-only Bash permission reductions, typo suggestions, prompt-named plan files, setup wizard improvements, skill sorting, input redraw changes, stream-json plugin errors, raw OTEL body logging, and fixes for terminal tearing, `@` file scanning, LSP stale diagnostics, resume completion, `/context` rendering, session-name loss, plugin errors, missing custom commit skills, provider-specific 429 messaging, surveys, wrapped URL clickability, and Windows env/permission paths. |
| 2.1.112 | 2026-04-16T19:23:46Z | Official changelog | Fixed auto mode incorrectly reporting `claude-opus-4-7` as temporarily unavailable. |

## Reconstruction Relevance

The v2.1.112 reconstruction should preserve, or explicitly mark missing, the security-sensitive changes introduced in this range:

- Hook-updated permission input revalidation from v2.1.110.
- Deny-rule precedence over hook ask decisions from v2.1.101.
- Bash permission hardening from v2.1.90, v2.1.97, and v2.1.98.
- Fail-closed remote managed-settings refresh from v2.1.92.
- Plugin managed-settings enforcement and plugin dependency handling from v2.1.92 through v2.1.111.
- Remote Control, SDK/headless, and resume behavior from v2.1.89 through v2.1.111.

Any final assessment of reconstructed v2.1.112 should not rely on v2.1.112's short one-line release note alone; most relevant behavior landed in earlier intermediate releases.
