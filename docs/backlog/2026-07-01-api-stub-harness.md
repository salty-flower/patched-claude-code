# API Stub Harness

## Status

- Implemented shared coverage lives in `tools/test/helpers/claude-api-stub.ts`.
- `signature-block-custom-endpoint` now uses the shared helper for transcript
  replay.
- `per-model-endpoint` has rendered-bundle runtime coverage for create and
  count-tokens calls.
- `just api-stub-smoke <ver>` renders the target, starts a local stub, verifies
  a PTY launch/exit path, and verifies a stubbed rendered-bundle API response.

## Scope

| In scope | Out of scope |
| --- | --- |
| Local HTTP stub for Claude API request capture | Full Claude API simulator |
| Rendered bundle runtime tests that must not spend tokens | Real network/model calls in CI |
| Request URL, header, body, and stream assertions | Behavioral claims about upstream model output |
| PTY/TUI flows backed by local stub responses | Repacking patched JS into native binaries |

## Priority

1. **Shared `ClaudeApiStub` helper.** Done.
   - Capture method, path, query, headers, raw body, parsed JSON body, request
     order, and receiving stub instance.
   - Support `/v1/messages` and `/v1/messages/count_tokens`.
   - Provide streaming SSE and non-streaming JSON responses.
   - Fail unknown paths by default.

2. **`per-model-endpoint` runtime coverage.** Done.
   - Start separate global and per-model stubs.
   - Set `ANTHROPIC_BASE_URL` to the global stub.
   - Set `ANTHROPIC_MODEL_BASE_URL_<sanitized_model>` to the per-model stub.
   - Set `ANTHROPIC_MODEL_API_KEY_<sanitized_model>` and
     `ANTHROPIC_MODEL_AUTH_TOKEN_<sanitized_model>`.
   - Assert create and count-tokens requests hit the per-model stub.
   - Assert `x-api-key` and `Authorization` precedence.
   - Cover beta and non-beta request builders when reachable.

3. **PTY plus stub smoke harness.** Done.
   - Launch `staging/<ver>/cli.patched.js` in a PTY.
   - Exit through `/exit` with a local-only interaction.
   - Run the same rendered bundle in print mode with `ANTHROPIC_BASE_URL`
     pointing at the local stub.
   - Assert the stub receives the model request.
   - Assert the rendered bundle prints the stub text response.

4. **Streaming and error fixtures.** Done.
   - `text-ok`: normal `message_start` to `message_stop`.
   - `delayed-text`: delayed SSE chunks.
   - `count-tokens-ok`: minimal token-count response.
   - `api-error`: structured JSON error response.
   - `malformed-sse`: invalid frame for render-loop failure detection.

5. **Transcript replay matrix.** Remaining.
   - Custom endpoint replay strips stale signed thinking.
   - Same endpoint replay preserves valid thinking blocks.
   - Model, key, or endpoint changes strip signed thinking.
   - Mixed text, `thinking.signature`, and `redacted_thinking` content stays
     request-safe.

## Verification Gates

- `just tool-test <ver>` includes the shared stub helper tests.
- `just api-stub-smoke <ver>` renders the target and runs the PTY/API smoke.
- `just api-stub-smoke-rendered <ver>` reruns the smoke against an existing
  `staging/<ver>/cli.patched.js`.
- `just patch-test <ver>` remains static-only unless explicitly extended.
- Target-bump SOP continues to require a separate PTY/TUI baseline; this
  backlog adds stub-backed coverage for token-burning paths.
- No stub-backed test may contact non-localhost network endpoints.

## Promotion Gate

Promote this backlog into `docs/guides/Bumping-Target.md` only after:

- The remaining transcript replay matrix is implemented.
- At least one more API patch family uses the helper.
- The split PTY/API smoke command has stayed stable across a target bump.
