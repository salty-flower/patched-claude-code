// Generated platform dispatcher over dual upstream module graphs.
// Each graph is the upstream Bun standalone module graph materialized to
// disk with /$bunfs/root/ specifiers rewritten to graph-relative paths.
// Upstream daemon re-exec carries argv[1], but drops Bun's --preload flags.
// A successfully installed packaged helper supplies its own exact file URL.
const runtimeBootstrap = process.env.PATCHED_CLAUDE_CODE_RUNTIME_BOOTSTRAP
if (runtimeBootstrap) {
  await import(runtimeBootstrap)
  await import(new URL("./bun-ant-cell-segmenter.ts", runtimeBootstrap).href)
}
const platformDir = process.platform === "darwin" ? "darwin-arm64" : process.platform === "linux" ? "linux-x64" : null
if (!platformDir) {
  console.error("unsupported platform: " + process.platform)
  process.exit(1)
}
await import(new URL(`./graph.patched/${platformDir}/cli.js`, import.meta.url).href)
