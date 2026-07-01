# API Stub Harness

## Status

- Existing coverage lives in
  `tools/test/signature-block-custom-endpoint-runtime.test.ts`.
- Current stub validates one resumed-transcript API replay path.
- This file tracks planned work to make API-boundary runtime checks reusable
  during target bumps.

## Scope

| In scope | Out of scope |
| --- | --- |
| Local HTTP stub for Claude API request capture | Full Claude API simulator |
| Rendered bundle runtime tests that must not spend tokens | Real network/model calls in CI |
| Request URL, header, body, and stream assertions | Behavioral claims about upstream model output |
| PTY/TUI flows backed by local stub responses | Repacking patched JS into native binaries |

## Priority

1. **Shared `ClaudeApiStub` helper.**
   - Capture method, path, query, headers, raw body, parsed JSON body, request
     order, and receiving stub instance.
   - Support `/v1/messages` and `/v1/messages/count_tokens`.
   - Provide streaming SSE and non-streaming JSON responses.
   - Fail unknown paths by default.

2. **`per-model-endpoint` runtime coverage.**
   - Start separate global and per-model stubs.
   - Set `ANTHROPIC_BASE_URL` to the global stub.
   - Set `ANTHROPIC_MODEL_BASE_URL_<sanitized_model>` to the per-model stub.
   - Set `ANTHROPIC_MODEL_API_KEY_<sanitized_model>` and
     `ANTHROPIC_MODEL_AUTH_TOKEN_<sanitized_model>`.
   - Assert create and count-tokens requests hit the per-model stub.
   - Assert `x-api-key` and `Authorization` precedence.
   - Cover beta and non-beta request builders when reachable.

3. **PTY/TUI plus stub smoke harness.**
   - Launch `staging/<ver>/cli.patched.js` in a PTY.
   - Drive a short prompt through the TUI with `ANTHROPIC_BASE_URL` pointing
     at the local stub.
   - Assert the stub receives the model request.
   - Assert the TUI renders the stub text response.
   - Exit with a local-only interaction such as `/exit`.

4. **Streaming and error fixtures.**
   - `text-ok`: normal `message_start` to `message_stop`.
   - `delayed-text`: delayed SSE chunks.
   - `count-tokens-ok`: minimal token-count response.
   - `api-error`: structured JSON error response.
   - `malformed-sse`: invalid frame for render-loop failure detection.

5. **Transcript replay matrix.**
   - Custom endpoint replay strips stale signed thinking.
   - Same endpoint replay preserves valid thinking blocks.
   - Model, key, or endpoint changes strip signed thinking.
   - Mixed text, `thinking.signature`, and `redacted_thinking` content stays
     request-safe.

## Verification Gates

- `just tool-test <ver>` includes the shared stub helper tests.
- `just patch-test <ver>` remains static-only unless explicitly extended.
- Target-bump SOP continues to require a separate PTY/TUI baseline; this
  backlog adds stub-backed coverage for token-burning paths.
- No stub-backed test may contact non-localhost network endpoints.

## Promotion Gate

Promote this backlog into `docs/guides/Bumping-Target.md` only after:

- A reusable stub helper exists outside one patch-specific runtime test.
- At least one API patch family uses the helper.
- The PTY/TUI stub smoke path is documented with a stable command.
