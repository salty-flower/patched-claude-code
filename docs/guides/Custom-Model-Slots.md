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
Picker deduplication does not remove the configured model or change its effort override.

## Regression coverage

The transform tests exercise every historical picker variant,
including absent tier rows, annotated pins, duplicate slots, and direct slot 2 environment access.
The API-stub PTY smoke test opens `/model`, enumerates a complete row-selection cycle,
selects a distinct second slot, and checks both pinned-tier deduplication and unrelated-slot visibility.
