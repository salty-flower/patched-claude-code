# Experimental Shell and C# Tools

These two opt-in experiments serve different purposes.
The Nushell patch changes how the existing `Bash` tool executes shell commands;
it does not translate Bash syntax into Nushell syntax.
The C# patch adds a separate model-visible `CSharp` tool without changing Bash.
Both direct bundle commands preload the stock-Bun CellSegmenter shim; without
it, the interactive TUI can remain blank and then report a render loop error.

From any directory, set an explicit path to this repository and run the
rendered bundle with Nushell as the Bash tool's shell:

```sh
repo=/home/minty/repos/patched-claude-code
CLAUDE_CODE_SHELL="$(command -v nu)" SHELL="$(command -v nu)" \
  bun --preload "$repo/runtime/bun-ant-cell-segmenter.ts" \
    "$repo/staging/2.1.273/cli.patched.js"
```

To enable the standalone C# tool, install or enter a .NET 10 SDK environment
and set its gate before starting Claude Code:

```sh
repo=/home/minty/repos/patched-claude-code
nix shell nixpkgs#dotnet-sdk_10 --command env \
  CLAUDE_CODE_EXPERIMENTAL_CSHARP_TOOL=1 \
  bun --preload "$repo/runtime/bun-ant-cell-segmenter.ts" \
    "$repo/staging/2.1.273/cli.patched.js"
```

The two environments can be combined; `Bash` remains available as Nushell
while `CSharp` runs an independent `.cs` file-based app using `dotnet run`.
Pass raw C# source in the CSharp tool's `command` field, not shell syntax.
The current prototype inherits Bash's input schema, including optional Bash
parameters that are not meaningful to C#; background execution is rejected.
Each call starts a fresh .NET process without persistent variables or access
to Claude Code's other tools from inside the C# program.
`CSharp` asks for permission independently of Bash.
With `sandbox.enabled: true`, its `dotnet run` goes through Claude Code's
native sandbox wrapper, using the same filesystem and network policy as Bash.
It adds only the call's private temporary source directory to the sandbox's
writable paths; the directory is removed after execution.
The sandboxed process also puts .NET and NuGet writable caches there, so
package restore starts cold on each call.
It disables NuGet's implicit vulnerability audit to avoid a network request
for package-free programs; explicit `#:package` restore still follows the
sandbox network policy.
If sandbox was requested but is unavailable, the tool fails instead of running
without it. With sandbox disabled, CSharp remains unsandboxed.
On Linux, CSharp also grants its sandbox write access to `/tmp/.dotnet/shm`
for .NET named mutexes. This shared directory is narrower than `/tmp`, but
C# can affect other same-user .NET mutexes there.
Review C# code and NuGet dependencies before approving a call.
If `dotnet` is not on the executable path, set
`CLAUDE_CODE_EXPERIMENTAL_DOTNET` to its absolute path.

To exercise the real interactive paths with a local API stub:

```sh
repo=/home/minty/repos/patched-claude-code
bun run "$repo/tools/test/nushell-provider-tui-smoke.ts" --bundle "$repo/staging/2.1.273/cli.patched.js"
nix shell nixpkgs#dotnet-sdk_10 --command bun run "$repo/tools/test/csharp-tool-tui-smoke.ts" \
  --bundle "$repo/staging/2.1.273/cli.patched.js" --case success
nix shell nixpkgs#dotnet-sdk_10 --command bun run "$repo/tools/test/csharp-tool-tui-smoke.ts" \
  --bundle "$repo/staging/2.1.273/cli.patched.js" --case stderr-exit
nix shell nixpkgs#dotnet-sdk_10 --command bun run "$repo/tools/test/csharp-tool-tui-smoke.ts" \
  --bundle "$repo/staging/2.1.273/cli.patched.js" --permission allow
nix shell nixpkgs#dotnet-sdk_10 --command bun run "$repo/tools/test/csharp-tool-tui-smoke.ts" \
  --bundle "$repo/staging/2.1.273/cli.patched.js" --permission deny
nix shell nixpkgs#dotnet-sdk_10 nixpkgs#socat nixpkgs#bubblewrap --command bun run "$repo/tools/test/csharp-tool-tui-smoke.ts" \
  --bundle "$repo/staging/2.1.273/cli.patched.js" --case success --sandbox --require-sandbox-success
```

The `--permission` cases exercise the interactive ask dialog: allow once
executes C#, while No stops before `dotnet` starts.
Remove `--require-sandbox-success` to treat a reported sandbox startup failure
as a safe failure. The strict flag requires completed C# execution and a
denied write outside the allowed paths.
