# Chunk 4 Lift Notes

## Files

### `src/cli/ndjsonSafeStringify.ts`
- **Status**: verbatim copy from v88
- **Drift**: none. Both declarations have jac=1, cos=1. v112 adds trailing
  declarations (hoisted var `aP7`, `OOA`) that are bundle artifacts with no
  source impact.

### `src/cli/handlers/mcp.tsx`
- **Status**: reconstructed with drift annotations
- **Key v112 changes**:
  1. **Ink rendering migration** (byte ~13529274–13535252): Most handlers now
     receive an Ink render context `q` as first parameter and use
     `q.render(<Box><Text>…</Text></Box>)` instead of `console.log`/`cliOk`.
  2. **`mcpRemoveHandler`** (byte ~13529979): When server not found, v112
     suggests configured servers by listing them from `getAllMcpConfigs()`.
     Also renders removal confirmation via Ink.
  3. **`formatMcpServerLine` extracted** (byte ~13531675): The inline
     console-log formatting in `mcpListHandler` was extracted to a pure
     helper returning `string | null`.
  4. **`mcpGetHandler`** (byte ~13532689): When server not found, v112
     fetches all configs to suggest configured server names.
  5. **`mcpAddJsonHandler`** / **`mcpAddFromDesktopHandler`** / **`mcpResetChoicesHandler`**:
     Render success messages via Ink instead of `cliOk`.
- **Unresolved**: Exact Ink component names (`qw`, `u`, `T`, `w$`) and
  render-context parameter types are minified; left as `// TODO(lift)`.

### `src/cli/handlers/plugins.ts`
- **Status**: reconstructed with drift annotations
- **Key v112 changes**:
  1. **Ink rendering migration** (byte ~13543953–13556036): Nearly all
     handlers now take an Ink render context `q` as first parameter.
     `console.log` output is collected into `string[]` and rendered via
     `<Text>{lines.join('\n')}</Text>`.
  2. **`printValidationResult` refactored** (byte ~13543953): Changed from
     void side-effects (`console.log`) to returning `string[]` for caller
     to render.
  3. **`pluginValidateHandler`** (byte ~13544444): Uses Ink render; builds
     output array from `printValidationResult` and renders once.
  4. **`pluginListHandler`** (byte ~13548470): JSON and human paths both
     collect strings then render via Ink. Non-JSON path accumulates into
     `X[]` and renders at end.
  5. **`marketplaceAddHandler`** (byte ~13551454): Uses `Suspense` + `GMA`
     component for async marketplace addition UI.
  6. **`marketplaceListHandler`** (byte ~13551734): Renders via Ink;
     JSON path wraps in `<Text>`.
  7. **`marketplaceRemoveHandler`** (byte ~13553499): Renders success via Ink.
  8. **`marketplaceUpdateHandler`** (byte ~13554840): Uses `Suspense` + `kMA`
     component for async update with progress messages.
  9. **`pluginUninstallHandler`** (byte ~13556036): Renders uninstall result
     message via Ink.
  10. **`pluginDisableHandler`** / **`pluginUpdateHandler`** (byte ~13555657):
      Render result via Ink.
- **Unresolved**: Exact Ink component names (`g9`, `qw`, `T`, `GMA`, `kMA`)
  and Suspense integration are minified; left as `// TODO(lift)`.
