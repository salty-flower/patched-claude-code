import { join } from "node:path"
import { patchApplies } from "./apply-patches"
import type { PatchEntry } from "./patch-files"

export const WORKFLOW_HISTORY_MODULE = "patched-workflow-history.js"

/** Emit after patching, so locators never scan the bundled support code. */
export async function emitWorkflowHistoryRuntime(
  root: string,
  graphDirectory: string,
  patches: readonly PatchEntry[],
  version: string,
): Promise<void> {
  if (!patches.some((entry) => entry.name.startsWith("workflow-history-") && patchApplies(entry, version))) return
  const result = await Bun.build({
    entrypoints: [join(root, "tools", "runtime", "workflow-history.ts")],
    target: "bun",
    format: "esm",
    minify: true,
    sourcemap: "none",
  })
  if (!result.success) throw new AggregateError(result.logs, "Failed to bundle Workflow history support")
  if (result.outputs.length !== 1) throw new Error("Workflow history support must bundle to one self-contained module")
  await Bun.write(join(graphDirectory, WORKFLOW_HISTORY_MODULE), result.outputs[0])
  await Bun.write(
    join(graphDirectory, "patched-workflow-history.LICENSE.txt"),
    Bun.file(join(root, "tools", "node_modules", "mustache", "LICENSE")),
  )
}
