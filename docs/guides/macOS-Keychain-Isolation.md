# macOS Keychain Isolation

## Selection boundary

`CLAUDE_CODE_KEYCHAIN_PATH` selects one macOS Keychain for the process.

| State | Credential storage |
| --- | --- |
| Unset | Existing default login Keychain behavior, including the existing plaintext fallback |
| Absolute path | Only that Keychain; no default-Keychain or plaintext fallback |
| Invalid, missing, or locked path | Credential operation fails with an actionable error |

The selected Keychain covers both Claude credential formats:

- Claude OAuth lookup and `/login` writes
- refresh-token mutations
- logout, invalidation, and deletion
- legacy managed API-key lookup, `/login` writes, and deletion
- MCP OAuth, plugin secrets, and other data sharing the secure-storage abstraction
- SessionStore resume and `claude plugin eval` secure-storage child-process credentials
- macOS doctor writeability probes

The variable is macOS-only and supported by the packaged `claude-patched` launcher.
Direct execution of `cli.js` with the variable set fails before credential lookup;
it cannot silently use the default Keychain.

## Prerequisites

Create and unlock each Keychain before starting Claude Code:

```sh
security create-keychain "/absolute/path/work.keychain-db"
security unlock-keychain "/absolute/path/work.keychain-db"
```

Omitting `-p` keeps the Keychain password out of the command argument list and lets `security` prompt for it.
Managed environments may create and unlock the Keychain through their existing credential-management tooling.

The path must:

- be absolute;
- identify an existing, unlocked Keychain;
- contain no NUL, carriage-return, or line-feed characters.

Spaces, quotes, shell metacharacters, and other command-sensitive characters are supported.

## Security behavior

- **Fail closed**: an explicit selection never reads, writes, or deletes the default Keychain and never accepts an existing `.credentials.json` as a credential source.
  Public selection takes precedence if an inherited internal materialization marker is also present.
- **No migration**: existing credential blobs are not copied between Keychains.
- **No secret arguments**: credential payloads are hex-encoded and sent through `security -i` stdin.
- **Single command line**: the explicit Keychain path is serialized before the one terminating newline.
- **Atomic mutation**: secure-storage mutations retain Claude Code's `.storage-write` cross-process lock.
- **Cache ordering**: generation and in-flight read guards prevent stale reads from replacing newer writes.
- **Temporary children**: SessionStore resume and plugin evaluation materialize mode-`0600` credentials from the selected Keychain only; resume strips the refresh token.
- **Plugin eval child**: the child does not inherit the public Keychain path.
  An internal mode restricts it to the temporary plaintext store and disables all default-Keychain paths.
  Legacy mutations fail; Keychain diagnostics report unavailable.
- **Diagnostics**: macOS doctor creates and deletes its probe only in the selected Keychain.
- **Size limit**: UTF-8 bytes exceeding the `security -i` line buffer are rejected instead of being exposed through process arguments.
- **Existing ACL behavior**: writes retain Claude Code's existing `add-generic-password -U` flags and Keychain accessibility behavior.

Treat the selected Keychain file and its password as credentials.
File isolation alone does not protect an unlocked Keychain from other processes running as the same macOS user.
Abnormal termination can leave child-process credential files in temporary directories until operating-system cleanup.

In 2.1.220, `claude plugin eval` materializes the secure-storage credential blob used by OAuth.
It does not materialize the separate legacy managed API-key item; use OAuth credentials for plugin evaluation with explicit selection.

## Two isolated profiles

Create and unlock two Keychains, then pair each one with its own config directory:

```sh
CLAUDE_CONFIG_DIR="$HOME/.claude-work" \
CLAUDE_CODE_KEYCHAIN_PATH="$HOME/Library/Keychains/claude-work.keychain-db" \
claude-patched
```

```sh
CLAUDE_CONFIG_DIR="$HOME/.claude-personal" \
CLAUDE_CODE_KEYCHAIN_PATH="$HOME/Library/Keychains/claude-personal.keychain-db" \
claude-patched
```

Run `/login` once in each profile.
Credentials already stored in the default login Keychain are intentionally invisible to both explicit profiles.

## Failure recovery

| Error | Action |
| --- | --- |
| Relative or empty path | Set an absolute Keychain path |
| Keychain missing | Create it with `security create-keychain` |
| Keychain locked | Run `security unlock-keychain "/absolute/path/profile.keychain-db"` |
| Credential blob exceeds stdin limit | Remove unnecessary secure-storage entries; the process will not fall back to secret-bearing arguments |
| Raw `cli.js` rejects the variable | Use the packaged `claude-patched` launcher so the runtime bridge is preloaded |

Unset `CLAUDE_CODE_KEYCHAIN_PATH` to restore the unmodified default login Keychain behavior.
