{
  description = "audited-claude-code — pin Claude Code to an auditable, patched runtime by anchoring against the v2.1.88 reference";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        hasReleasePayload =
          builtins.pathExists ./cli.js
          && builtins.pathExists ./manifest.json
          && builtins.pathExists ./package.json
          && builtins.pathExists ./bin/claude-audited;
        releaseManifest =
          if builtins.pathExists ./manifest.json then
            builtins.fromJSON (builtins.readFile ./manifest.json)
          else
            null;
        releaseVersion =
          if releaseManifest == null then
            "unreleased"
          else
            "${releaseManifest.upstream.version}-${releaseManifest.release.id}";
        releaseSource = builtins.path {
          name = "audited-claude-code-${releaseVersion}-source";
          path = ./.;
          filter =
            path: type:
            let
              root = toString ./.;
            in
            path == "${root}/cli.js"
            || path == "${root}/manifest.json"
            || path == "${root}/package.json"
            || path == "${root}/bin"
            || path == "${root}/bin/claude-audited";
        };
        auditedClaudeCode =
          if hasReleasePayload then
            pkgs.stdenvNoCC.mkDerivation {
              pname = "audited-claude-code";
              version = releaseVersion;
              src = releaseSource;

              nativeBuildInputs = [ pkgs.makeWrapper ];
              dontConfigure = true;
              dontBuild = true;

              installPhase = ''
                runHook preInstall
                install -Dm0644 cli.js "$out/lib/audited-claude-code/cli.js"
                install -Dm0644 manifest.json "$out/share/audited-claude-code/manifest.json"
                install -Dm0644 package.json "$out/share/audited-claude-code/package.json"
                makeWrapper ${pkgs.bun}/bin/bun "$out/bin/claude-audited" \
                  --add-flags "$out/lib/audited-claude-code/cli.js"
                runHook postInstall
              '';

              meta = {
                description = "Audited, patched Claude Code bundle";
                mainProgram = "claude-audited";
              };
            }
          else
            pkgs.runCommand "audited-claude-code-unreleased" { } ''
              echo "This checkout does not contain a generated release payload." >&2
              echo "Use a claude-code-<version>-patch.<n> tag or run: just release-source <version> <patch.n>" >&2
              exit 1
            '';
      in
      {
        packages.default = auditedClaudeCode;

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
      }
    );
}
