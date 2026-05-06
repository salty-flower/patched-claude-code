// TODO(lift): v112 heavily restructured this file. Most functions moved to other modules.
// getDefaultCharacters -> imported via bE6() in bundle (moved elsewhere)
// interpolateColor -> imported via $p in bundle (moved elsewhere)
// parseRGB -> imported via t$6 in bundle (moved elsewhere)
// hueToRgb -> not found in v112 bundle chunk; possibly removed or moved

// TODO(lift): WAA() platform check appears in v112 minified but may be bundler artifact
function isSupportedPlatform(): boolean {
  return process.platform === 'darwin' || (process.platform === 'win32' && process.arch === 'x64')
}

// Convert RGB object to rgb() color string for Text component
// Preserved in v112 as fR()
export function toRGBColor(color: { r: number; g: number; b: number }): string {
  return `rgb(${color.r},${color.g},${color.b})`
}
