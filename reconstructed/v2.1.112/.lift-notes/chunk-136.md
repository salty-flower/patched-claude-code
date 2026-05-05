# Chunk 136 Lift Notes

## Files (22)
- src/utils/imageResizer.ts
- src/utils/imageStore.ts
- src/utils/imageValidation.ts
- src/utils/immediateCommand.ts
- src/utils/inProcessTeammateHelpers.ts
- src/utils/ink.ts
- src/utils/intl.ts
- src/utils/jetbrains.ts
- src/utils/json.ts
- src/utils/jsonRead.ts
- src/utils/keyboardShortcuts.ts
- src/utils/lazySchema.ts
- src/utils/localInstaller.ts
- src/utils/lockfile.ts
- src/utils/log.ts
- src/utils/logoV2Utils.ts
- src/utils/managedEnv.ts
- src/utils/managedEnvConstants.ts
- src/utils/markdown.ts
- src/utils/markdownConfigLoader.ts
- src/utils/mcp/dateTimeParser.ts
- src/utils/mcpInstructionsDelta.ts

## Drift Summary

### Verbatim (jac=1, cos=1 or cos>=0.998)
- immediateCommand.ts, ink.ts, intl.ts, jetbrains.ts, json.ts, jsonRead.ts,
  keyboardShortcuts.ts, lazySchema.ts, localInstaller.ts, lockfile.ts,
  logoV2Utils.ts, managedEnv.ts, markdown.ts, mcp/dateTimeParser.ts,
  mcpInstructionsDelta.ts

### Tight drift (cos >= 0.998, minor renames)
- inProcessTeammateHelpers.ts: jac=0.5/cos=0.996 — `updateTaskState` call pattern
  changed from direct function to `K.update(q, ...)` style (AppState updater
  pattern). Helper `handlePlanApprovalResponse` simplified.
- log.ts: jac=0.818/cos=0.999 — Added new cloud providers
  (CLAUDE_CODE_USE_ANTHROPIC_AWS, CLAUDE_CODE_USE_MANTLE) to the logError
  disable-list. `getLogDisplayTitle` uses renamed internal helpers but same
  logic.
- managedEnvConstants.ts: jac=0.842/cos=1 — Added Anthropic AWS and Mantle
  provider env vars to PROVIDER_MANAGED_ENV_VARS, DANGEROUS_SHELL_SETTINGS,
  and SAFE_ENV_VARS. New entries: ANTHROPIC_AWS_*, ANTHROPIC_BEDROCK_MANTLE_*,
  CLAUDE_CODE_USE_ANTHROPIC_AWS, CLAUDE_CODE_USE_MANTLE, and related skip-auth
  vars. Added new safe vars: DISABLE_INSTALLATION_CHECKS, OTEL_LOG_RAW_API_BODIES,
  OTEL_LOG_TOOL_CONTENT. Added new Vertex region model entries up to
  VERTEX_REGION_CLAUDE_4_7_OPUS.
- markdownConfigLoader.ts: jac=0.967/cos=1 — Added 'routines' to
  CLAUDE_CONFIG_DIRECTORIES. `feature('TEMPLATES')` conditional on templates
  stays. Removed `parseSlashCommandToolsFromFrontmatter` (was `RF` in v88,
  no longer present in v112). Some internal function renames in memoized
  loadMarkdownFilesForSubdir.

### Real drift (jac < 0.95 or cos < 0.998)
- imageResizer.ts: jac=0.739/cos=0.999, jac=0.714/cos=0.99 —
  `maybeResizeAndDownsampleImageBuffer` and `maybeResizeAndDownsampleImageBlock`
  now take a `limits` object parameter instead of using global constants.
  New `Fm1` constant (API_IMAGE_MAX_BASE64_SIZE) used in fallback logic.
  `compressImageBuffer` signature changed. Removed `compressImageBufferWithTokenLimit`
  and `rX4` helper (token-to-bytes conversion). Error class renamed in minified
  but kept as `ImageResizeError` in source.
- imageStore.ts: jac=0.667/cos=0.994 — Removed `cacheImagePath` export.
  `storeImages` now takes a setter function and uses immutable Map updates
  (`Qq5` helper) instead of mutating a global Map. Removed `getStoredImagePath`
  and `clearStoredImagePaths` exports. In-memory cache is now managed via
  AppState rather than module-level Map.
- imageValidation.ts: jac=0.625/cos=0.977, jac=0.5/cos=0.976 —
  `isBase64ImageBlock` extracted to separate decl. Added `c04` (sanitizeForLogging)
  function that redacts base64 image data for logging. `validateImagesForAPI`
  removed from this file's slice (moved elsewhere or inlined). The module-level
  var decl now contains `ImageSizeError` class and `dNY` (query source set).

## TODOs
- imageResizer.ts: `limits` parameter type — inferred as `{ targetRawSize: number; maxWidth: number; maxHeight: number; maxBase64Size: number }` but exact interface name unknown.
- imageStore.ts: `storeImages` second parameter type — inferred as React-style setter `(updater: (prev: AppState) => AppState) => void` but exact type unknown.
- imageValidation.ts: `sanitizeForLogging` function added in v112 — exact return type and full behavior inferred from minified.
- inProcessTeammateHelpers.ts: `updateTaskState` call pattern may have changed signature in v112.
- markdownConfigLoader.ts: Some lodash/memoize internal renames — function behavior unchanged.
