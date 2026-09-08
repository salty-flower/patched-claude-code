# Custom model slots

## Picker rows versus model configuration

`ANTHROPIC_CUSTOM_MODEL_OPTION` and `ANTHROPIC_CUSTOM_MODEL_OPTION_2`
add custom models to `/model` only when an equivalent row is not already present.
Slot 2 reads its slug, `_NAME`, and `_DESCRIPTION` directly from `process.env`;
it does not require registration in upstream's environment accessor.

Deduplication compares both slots against the rows actually present in the picker.
For `fable`, `opus`, `sonnet`, and `haiku` rows,
it resolves the corresponding `ANTHROPIC_DEFAULT_<TIER>_MODEL` pin.
Comparisons ignore surrounding whitespace, case, and `[1m]` annotations.
The second slot also deduplicates against the first.

A configured tier pin cannot suppress a slot when that tier row is absent.
Removing a pin or choosing an unrelated custom model can make the slot reappear.

## Metadata and effort

Remove a slot's name and description configuration only if its model mirrors
a tier row that remains present in your configuration.
Those fields no longer contribute visible text while that slot is deduplicated;
the surviving tier row keeps its own label and description.
Distinct slots still use their configured names and descriptions.

Keep slot model and effort configuration when it is needed for effort resolution.
Picker deduplication does not remove the configured model or change its effort default.

## Session effort

For 2.1.263, `/effort` and picker arrow adjustments apply only to the selected model in the current session.
Switching away and back retains that model's choice; new sessions start from configuration.
`/effort auto` removes the current model's session choice without changing saved settings.
Model identity resolves aliases and ignores case and `[1m]` annotations.

Precedence for ordinary requests:
CLI `--effort` > explicit `Agent` effort > model's session choice > slot `_EFFORT_LEVEL` > `CLAUDE_CODE_EFFORT_LEVEL` > saved/model defaults.
CLI `--effort` applies across models; interactive changes explain when it prevents an adjustment.
Slot effort is a default, with no implicit lock or new `_EFFORT_LOCK` switch.
Organization effort limits still apply.

Explicit `ANTHROPIC_DEFAULT_<TIER>_MODEL_SUPPORTED_CAPABILITIES` declarations also apply on firstParty.
A valid slot `_EFFORT_LEVEL` declares effort support and its corresponding max/xhigh capability.
Other capability checks use that slot's `_SUPPORTED_CAPABILITIES` declaration.
The client sends the selected effort without speculative max/xhigh downgrades.
If the backend rejects the effort parameter, the existing recovery retries without it and reports that omission.
The backend's resulting default is unknown; a configured level must not be presented as accepted effort after rejection.

These displays describe the request parameter, not unverifiable reasoning performed inside the backend.

## Agent model and effort overrides

`Agent` accepts any model ID, including either configured custom-slot model.
It accepts `low`, `medium`, `high`, `xhigh`, or `max` as an optional effort override.
The model-visible tool description names full custom model IDs and both per-call overrides.
Coordinator guidance keeps model inheritance as the default,
but permits a model override when the user explicitly requests one and an effort override when a worker needs one.

The explicit values flow through foreground agents, background agents, and named teammates.
Named process teammates receive `--model` and `--effort`;
named in-process teammates receive the same values through their synthesized agent definition.
An explicit Agent effort overrides agent frontmatter, session choices, and slot `_EFFORT_LEVEL` defaults.
Model capability checks and organization effort limits still apply before the API request is sent.

Fork agents ignore both overrides → inherit the parent model, effort context, and cache behavior.
`CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL` clears both overrides → coordinator workers inherit instead.

## Regression coverage

The transform tests exercise every historical picker variant,
including absent tier rows, annotated pins, duplicate slots, and direct slot 2 environment access.
The API-stub PTY smoke test opens `/model`, enumerates a complete row-selection cycle,
selects a distinct second slot, and checks both pinned-tier deduplication and unrelated-slot visibility.
`tools/test/model-effort-session-tui-smoke.ts` checks session choices against rendered screens and captured local API requests.
`tools/test/subagent-model-effort-smoke.ts` makes an `Agent` call with a custom-slot model and explicit effort,
then checks the model-visible prompt, rendered schema, and subagent's captured local API request.
Run the existing `bump-prepare` and `api-stub-smoke` steps in [Bumping the Target Version](Bumping-Target.md#workflow);
they include the effort resolver, request/retry, and interactive regressions.
