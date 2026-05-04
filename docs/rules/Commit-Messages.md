# Commit Messages

Surface-first conventional style. The owning subsystem goes in the type, not
generic `feat`/`chore`.

## Format

```
<type>[(scope)][!]: <summary>
```

`!` marks a change disruptive enough that future-you should stop and read
the body. Use it when re-anchoring or retiring a patch.

## Common types

- `patches`: new patch, edit to existing patch, or retirement
- `reference`: changes to `reference/<version>/`
- `tools`: alignment/lift/verify scripts
- `docs(rules)` / `docs(guides)` / `docs(records)`: documentation
- `flake`: Nix devShell, formatter, inputs
- `experiments`: POC / evaluation scripts

Pick the most specific stable owner. `chore` and `build` are forbidden.

## Body conventions

- Lead with WHY. Bundle text alone shows WHAT.
- When a patch is added, mention the upstream gate it disables and the
  cleanup condition (link to `docs/rules/Reference-Versions.md` if the
  cleanup ties to a future upstream change).
- When re-anchoring, link to the old `rationale_ref` and the new one.
