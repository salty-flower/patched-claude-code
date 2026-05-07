export const NPM_REGISTRY_PACKAGE_URL = "https://registry.npmjs.org/%40anthropic-ai%2fclaude-code"

export const GCS_RELEASE_BASE =
  "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/claude-code-releases"

export const GCS_STABLE_URL = `${GCS_RELEASE_BASE}/stable`

export function gcsManifestUrl(version: string): string {
  return `${GCS_RELEASE_BASE}/${version}/manifest.json`
}

export function gcsNativeBinaryUrl(version: string, platform: string, binary: string): string {
  return `${GCS_RELEASE_BASE}/${version}/${platform}/${binary}`
}
