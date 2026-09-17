# Inspecting the Upstream Bun Runtime

## Governing Split

> The platform standalone binary is the only artifact that exposes the
> fork-only `Bun.*` surface; sample it through a live debugger rather than
> inferring its contract from call sites.

The bundled Bun is Anthropic's own build, versioned ahead of public releases
(2.1.273 ships `Bun-Version: 1.4.3`; public bun's newest is 1.4.2).
APIs it adds are unavailable from any package manager, so a patched bundle that
depends on one cannot be fixed by upgrading the host runtime.

## When This Applies

| Symptom | Meaning |
| --- | --- |
| `This build of @anthropic-ai/bun-internal has no Bun.<api>` at render | The patched bundle runs on a host Bun that lacks a fork-only API |
| A `Bun.<ns>.<api>` symbol appears in the graph with no public documentation | Sample it; do not reimplement from the call site alone |

A compatibility layer for such an API must be written against observed behavior.
The call sites show which arguments are passed, never what the call returns.

## Procedure

| Step | Command | Notes |
| --- | --- | --- |
| 1. Decode the binary | `chmod +x <standalone>` | Extract with the native-bundle tooling; the artifact is not executable as staged |
| 2. Start it under a PTY with the inspector | `BUN_INSPECT=ws://127.0.0.1:<port> script -qec '<binary>' /dev/null` | Keep it alive with a stdin pipe that never closes; the inspector does not come up under a plain pipe |
| 3. Confirm the target | `curl -s http://127.0.0.1:<port>/json/version` | Returns protocol and `Bun-Version` |
| 4. Connect | WebSocket to `ws://127.0.0.1:<port>/` | `/json/list` and `/json` return empty; the websocket is served at the root |
| 5. Sample | `Runtime.enable`, then `Runtime.evaluate` with `returnByValue: true` | Evaluate inside the running process to construct the API and record real return values |

Capture with the repository-owned oracle tool:

```sh
tools/patch/resource-guard.sh bun run tools/debug/capture-bun-ant-cell-segmenter.ts \
  --binary <standalone> --version <version> --platform <platform> \
  --out tools/test/fixtures/bun-ant-cell-segmenter-oracle.json
```

The tool refuses an occupied inspector port, launches the named binary under
its own PTY, attaches only to that child, and terminates it after capture.
The fixture binds the upstream version, platform, fork Bun version,
native-binary SHA-256, and capture-tool path.

### Keep Requests Local

Point the CLI at a dead local port so any incidental request fails without
reaching a backend:

```sh
ANTHROPIC_BASE_URL=http://127.0.0.1:9/ ANTHROPIC_API_KEY=stub
```

`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` suppresses the remainder.

Sampling holds the process open for as long as the session lasts, so an
outbound host firewall will surface the binary's other startup traffic.
Resolve tooling from `node_modules` (e.g. `tools/node_modules/.bin/biome`)
rather than a package runner that resolves against a registry — a runner such
as `bunx` reaches the network on its own and muddies the diagnosis.

## Entry Points That Do Not Work

| Attempt | Result |
| --- | --- |
| `BUN_BE_BUN=1 <binary>` | Still runs the CLI entrypoint; does not degrade to the bun CLI |
| `<binary> run <script>` / `<binary> <script>` | Argument is parsed by the CLI as a prompt |
| `<binary> --preload <script>` | The string ships in the binary but the compiled build does not parse bun's CLI flags |
| `<binary> --bun` | `error: unknown option '--bun'` |
| `<binary> -e '<expr>'` | `error: unknown option '-e'` |

## Pitfalls

| Pitfall | Cause | Avoidance |
| --- | --- | --- |
| Inspector never listens | Process spawned with a pipe instead of a controlling terminal | Launch via `script -qec`; the parent command holds a `sleep`-fed stdin |
| `pkill -f <binary>` kills the shell | The pattern matches the invoking shell's own command line | Use `pkill -x <name>`, or kill collected PIDs |
| Process exits before sampling | A one-shot mode (`--version`) returns immediately | Use a mode that waits on stdin |

## Reading the Results

Sample the constructor arguments *and* the return values, then pin both:

- Constructor options come from the caller in the graph (minified constants must
  be resolved from their defining chunk, including cross-chunk imports).
- Return values and the shape of any output buffers are observable only here.
- Record the corpus alongside the samples so a later port can be diffed against
  the same inputs.
