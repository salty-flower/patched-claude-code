# WebSearch Model

## Model selection

Set `CLAUDE_CODE_WEB_SEARCH_MODEL` to route WebSearch's internal search request independently of the conversation model:

```sh
CLAUDE_CODE_WEB_SEARCH_MODEL=gpt-6-luna claude-patched
```

The override takes precedence over `tengu_plum_vx3` and `ANTHROPIC_SMALL_FAST_MODEL` for this request.
An unset or empty value preserves upstream model selection.
Values use the native model ID parser, including aliases such as `sonnet` and the `[1m]` suffix.
The native request layer converts the parsed model to its wire ID and handles context-window metadata.

For a mixed provider session, keep the main model on DeepSeek and set this variable to a search-capable Codex model ID.
The proxy must support Anthropic's `web_search_20250305` server tool for the selected model.
This patch changes the model for the internal model-backed search path; upstream's separate CCR proxy-search path does not make that model request.

## Verification

```sh
bun test tools/test/web-search-model.test.ts
just render
bun run tools/test/web-search-model-tui-smoke.ts --bundle staging/2.1.310/cli.patched.js
```

The smoke test uses an isolated config and local API stub.
It checks the HTTP `model` field for an explicit ID, `sonnet[1m]`, an unset override, and an empty override.
The explicit-ID case runs in an interactive PTY, completes WebSearch, returns to the main model, and exits with `/exit`.
