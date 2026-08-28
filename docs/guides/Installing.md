# Installing

## Pinning Model

Choose the ref by update policy:

| Pin | Example |
| --- | --- |
| Exact source tag | `claude-code-2.1.181-patch.3` |
| Moving Nix source branch | `claude-code-latest` |

Both refs point at a minimal source tree containing `cli.js`, any platform
graphs it dispatches to, `manifest.json`, `package.json`, `bin/claude-patched`,
the prompt-override preload helper, and a flake package. It expects Bun from
Nix.

Use an exact source tag for immutable release pinning. Use
`claude-code-latest` when `nix flake update` should advance to the latest
patched Claude Code source. The lock file still records the exact commit and
narHash after each update.

## Nix / Home Manager

Prefer a native GitHub flake input so Nix uses its GitHub fetcher and
configured `access-tokens`:

```nix
{
  inputs.patched-claude-code.url =
    "github:salty-flower/patched-claude-code/claude-code-2.1.181-patch.3";
}
```

Auto-updating input:

```nix
{
  inputs.patched-claude-code.url =
    "github:salty-flower/patched-claude-code/claude-code-latest";
}
```

Then consume the package:

```nix
{ inputs, pkgs, ... }:

{
  home.packages = [
    inputs.patched-claude-code.packages.${pkgs.system}.default
  ];
}
```

GitHub release tarballs remain available for manual installs, but Nix configs
SHOULD NOT depend on release asset URLs.

## Section Prompt Overrides

See [`System-Prompt-Overrides.md`](System-Prompt-Overrides.md)
for export, override, diagnostics, and explicit rebase controls. Exported
prompt content stays under the user's config directory and is never packaged.
