{
  description = "patched-claude-code — pin Claude Code to a patched runtime by anchoring against the v2.1.88 reference";

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
        releaseManifest =
          if builtins.pathExists ./manifest.json then
            builtins.fromJSON (builtins.readFile ./manifest.json)
          else
            null;
        graphDirectory =
          if releaseManifest == null then null else releaseManifest.runtime.graphDirectory or null;
        hasReleaseGraph =
          graphDirectory == null
          || (
            builtins.pathExists (./. + "/${graphDirectory}/darwin-arm64/cli.js")
            && builtins.pathExists (./. + "/${graphDirectory}/linux-x64/cli.js")
          );
        hasReleasePayload =
          releaseManifest != null
          && builtins.pathExists ./cli.js
          && builtins.pathExists ./package.json
          && builtins.pathExists ./bin/claude-patched
          && builtins.pathExists ./runtime/macos-keychain.ts
          && builtins.pathExists ./runtime/system-prompt-overrides.ts
          && builtins.pathExists ./prompts/catalog/manifest.json
          && hasReleaseGraph;
        releaseVersion =
          if releaseManifest == null then
            "unreleased"
          else
            "${releaseManifest.upstream.version}-${releaseManifest.release.id}";
        releaseSource = builtins.path {
          name = "patched-claude-code-${releaseVersion}-source";
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
            || path == "${root}/bin/claude-patched"
            || path == "${root}/runtime"
            || path == "${root}/runtime/macos-keychain.ts"
            || path == "${root}/runtime/system-prompt-overrides.ts"
            || path == "${root}/graph.patched"
            || builtins.match "${root}/graph.patched/.*" path != null
            || path == "${root}/graph"
            || builtins.match "${root}/graph/.*" path != null
            || path == "${root}/prompts"
            || path == "${root}/prompts/catalog"
            || builtins.match "${root}/prompts/catalog/.*" path != null;
        };
        patchedClaudeCode =
          if hasReleasePayload then
            pkgs.stdenvNoCC.mkDerivation {
              pname = "patched-claude-code";
              version = releaseVersion;
              src = releaseSource;

              nativeBuildInputs = [ pkgs.makeWrapper ];
              dontConfigure = true;
              dontBuild = true;

              installPhase = ''
                runHook preInstall
                install -Dm0644 cli.js "$out/lib/patched-claude-code/cli.js"
                install -Dm0644 runtime/macos-keychain.ts "$out/lib/patched-claude-code/macos-keychain.ts"
                install -Dm0644 runtime/system-prompt-overrides.ts "$out/lib/patched-claude-code/system-prompt-overrides.ts"
                for graph_dir in graph.patched graph; do
                  if [ -d "$graph_dir" ]; then
                    cp -R "$graph_dir" "$out/lib/patched-claude-code/$graph_dir"
                  fi
                done
                install -Dm0644 manifest.json "$out/share/patched-claude-code/manifest.json"
                install -Dm0644 package.json "$out/share/patched-claude-code/package.json"
                mkdir -p "$out/share/patched-claude-code/prompts"
                cp -R prompts/catalog "$out/share/patched-claude-code/prompts/catalog"
                makeWrapper ${pkgs.bun}/bin/bun "$out/bin/claude-patched" \
                  --set PATCHED_CLAUDE_CODE_RELEASE_MANIFEST "$out/share/patched-claude-code/manifest.json" \
                  --set PATCHED_CLAUDE_CODE_BUNDLE "$out/lib/patched-claude-code/cli.js" \
                  --add-flags "--preload" \
                  --add-flags "$out/lib/patched-claude-code/system-prompt-overrides.ts" \
                  --add-flags "$out/lib/patched-claude-code/cli.js"
                runHook postInstall
              '';

              meta = {
                description = "Patched Claude Code bundle";
                mainProgram = "claude-patched";
              };
            }
          else
            pkgs.runCommand "patched-claude-code-unreleased" { } ''
              echo "This checkout does not contain a generated release payload." >&2
              echo "Use a claude-code-<version>-patch.<n> tag or run: just release-source <version> <patch.n>" >&2
              exit 1
            '';
      in
      {
        packages.default = patchedClaudeCode;

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
            actionlint
          ];

          shellHook = ''
            export PATCHED_CC_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
            echo "patched-claude-code dev shell — root=$PATCHED_CC_ROOT" >&2
          '';
        };

        formatter = pkgs.nixfmt-rfc-style;
      }
    );
}
