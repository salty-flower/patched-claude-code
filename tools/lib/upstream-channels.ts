export const NPM_REGISTRY_PACKAGE_URL = "https://registry.npmjs.org/%40anthropic-ai%2fclaude-code"

export const DIRECT_RELEASE_BASE = "https://downloads.claude.ai/claude-code-releases"

export const DIRECT_LATEST_URL = `${DIRECT_RELEASE_BASE}/latest`

export function directManifestUrl(version: string): string {
  return `${DIRECT_RELEASE_BASE}/${version}/manifest.json`
}

export function directNativeBinaryUrl(version: string, platform: string, binary: string): string {
  return `${DIRECT_RELEASE_BASE}/${version}/${platform}/${binary}`
}
