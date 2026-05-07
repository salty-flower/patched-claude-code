{
  description = "audited-claude-code — pin Claude Code to an auditable, patched runtime by anchoring against the v2.1.88 reference";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
            jq
            nushell
            python3
            ripgrep
            fd
            bat
            eza
            gh
            git
            just
            prek
          ];

          shellHook = ''
            export AUDITED_CC_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
            echo "audited-claude-code dev shell — root=$AUDITED_CC_ROOT" >&2
          '';
        };

        formatter = pkgs.nixfmt-rfc-style;
      });
}
