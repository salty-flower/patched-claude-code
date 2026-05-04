# Reference Versions

The repo currently anchors on **v2.1.88** because that is the only Claude
Code release with a publicly-leaked source map (npm 2026-03-31). Adding or
replacing reference versions invalidates `rationale_ref` fields across every
patch, so it is a deliberate, audit-grade operation.

## You MUST NOT silently re-anchor

Do not delete `reference/v2.1.88/` unless every existing patch has been
re-rationalised against a new reference version. Bumping the *target*
(the version we patch — see [`Adding-Patches.md`](../guides/Adding-Patches.md)
and [`Bumping-Target.md`](../guides/Bumping-Target.md)) is a different,
cheap operation; bumping the *reference* is rare.

## Adding a new reference version

A second reference is only justified when:

1. A new public source-map leak appears for a later Claude Code version,
   AND
2. The drift between v2.1.88 and the latest target has grown large enough
   that the alignment probe in `tools/align.ts` reports under ~70% byte
   coverage at Jaccard ≥ 0.6.

When both conditions hold:

1. Stage `reference/<new-version>/{cli.js, cli.js.map, sources/}` with
   provenance recorded in `docs/records/`.
2. Run alignment in both directions to confirm it widens coverage rather
   than replacing it.
3. Update each `patches/*.toml` `rationale_ref` to the more recent
   reference where the source intent is unchanged. Where intent shifted,
   bifurcate the patch by `applies_to`.

## Removing a reference version

Permitted only after every patch has migrated off it and `tools/align.ts`
no longer references it.
