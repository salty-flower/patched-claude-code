# Installing

## Pinning Model

Pin both:

| Pin | Example |
| --- | --- |
| GitHub release tag | `claude-code-2.1.132-patch.1` |
| Raw tarball hash | `sha256-...` from the release manifest |

The release artifact contains `cli.js` and `bin/claude-audited`. It expects a
Bun runtime on PATH.

## Nix / Home Manager

Use this shape in `~/repos/machine-state` after copying the release asset URL
and raw SRI hash from `<artifact>.manifest.json`:

```nix
{ pkgs, ... }:

let
  auditedClaudeCodeVersion = "2.1.132-patch.1";
  auditedClaudeCodeSrc = pkgs.fetchurl {
    url = "https://github.com/<owner>/audited-claude-code/releases/download/claude-code-${auditedClaudeCodeVersion}/audited-claude-code-${auditedClaudeCodeVersion}.tar.gz";
    hash = "sha256-REPLACE_WITH_RELEASE_MANIFEST_HASH";
  };
  auditedClaudeCode = pkgs.stdenvNoCC.mkDerivation {
    pname = "audited-claude-code";
    version = auditedClaudeCodeVersion;
    src = auditedClaudeCodeSrc;
    nativeBuildInputs = [ pkgs.makeWrapper ];
    dontUnpack = true;
    installPhase = ''
      mkdir unpack
      tar -xzf "$src" -C unpack --strip-components=1
      mkdir -p "$out/lib/audited-claude-code" "$out/bin"
      cp -R unpack/. "$out/lib/audited-claude-code/"
      makeWrapper ${pkgs.bun}/bin/bun "$out/bin/claude-audited" \
        --add-flags "$out/lib/audited-claude-code/cli.js"
    '';
  };
in
{
  home.packages = [ auditedClaudeCode ];
}
```

For private GitHub release assets, prefer mirroring the tarball into a private
binary cache or another authenticated source that Nix can fetch
deterministically.
