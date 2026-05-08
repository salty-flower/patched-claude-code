# Installing

## Pinning Model

Pin the source tag:

| Pin | Example |
| --- | --- |
| GitHub source tag | `claude-code-2.1.132-patch.1` |

The tagged source tree contains `cli.js`, `manifest.json`, `package.json`,
`bin/claude-audited`, and a flake package. It expects Bun from Nix.

## Nix / Home Manager

Prefer a native GitHub flake input so Nix uses its GitHub fetcher and
configured `access-tokens`:

```nix
{
  inputs.audited-claude-code.url =
    "github:salty-flower/audited-claude-code/claude-code-2.1.132-patch.1";
}
```

Then consume the package:

```nix
{ inputs, pkgs, ... }:

{
  home.packages = [
    inputs.audited-claude-code.packages.${pkgs.system}.default
  ];
}
```

GitHub release tarballs remain available for manual installs, but Nix configs
SHOULD NOT depend on release asset URLs.
