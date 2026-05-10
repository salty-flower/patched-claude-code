# Installing

## Pinning Model

Choose the ref by update policy:

| Pin | Example |
| --- | --- |
| Exact source tag | `claude-code-2.1.132-patch.1` |
| Moving Nix source branch | `claude-code-latest` |

Both refs point at a minimal source tree containing `cli.js`, `manifest.json`,
`package.json`, `bin/claude-patched`, and a flake package. It expects Bun from
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
    "github:salty-flower/audited-claude-code/claude-code-2.1.132-patch.1";
}
```

Auto-updating input:

```nix
{
  inputs.patched-claude-code.url =
    "github:salty-flower/audited-claude-code/claude-code-latest";
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
