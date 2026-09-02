// Generated platform dispatcher over dual upstream module graphs.
// Each graph is the upstream Bun standalone module graph materialized to
// disk with /$bunfs/root/ specifiers rewritten to graph-relative paths.
const platformDir = process.platform === "darwin" ? "darwin-arm64" : process.platform === "linux" ? "linux-x64" : null
if (!platformDir) {
  console.error(`unsupported platform: ${process.platform}`)
  process.exit(1)
}
await import(new URL(`./graph.patched/${platformDir}/cli.js`, import.meta.url).href)
