# Account Email Privacy

## Model context versus authentication

The `account-email-context` patch keeps the signed-in account email out of automatically supplied model context.
Authentication and session identity still use the account record.
The upstream privacy tool check remains enabled according to its native settings.

The patch is enabled by default for supported targets.
There is no additional environment variable or settings toggle to configure.
It removes the harness-generated `userEmail` context block rather than asking the model to avoid using an address it can already see.

This boundary does not redact an email the user explicitly supplies in a message, project instruction, file, or tool result.
It does not anonymize account metadata sent through authentication or separately configured telemetry.

## Verification

The local runtime regression uses a synthetic OAuth account and a loopback API stub.
It checks the native positive control, patched main requests, actual subagent requests, interactive TUI requests, and resumed native-session history.
The synthetic credential must still reach the authentication header, and project instructions must remain available.
No live model backend is used.

```sh
TARGET_VERSION=2.1.325 PCC_EMAIL_CONTEXT_BUNDLE="$PWD/staging/2.1.325/cli.patched.js" \
  bun test --timeout 0 tools/test/account-email-context-runtime.test.ts
```

Patch intent and reference boundary: [`patches/account-email-context.toml`](../../patches/account-email-context.toml).
