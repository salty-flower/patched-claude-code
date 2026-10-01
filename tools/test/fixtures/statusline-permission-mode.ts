import { appendFileSync } from "node:fs"

// Observe exactly what the runtime sends to a user-owned statusline command.
const payload: unknown = JSON.parse(await Bun.stdin.text())
const capture = process.argv[2]
if (!capture) throw new Error("statusline capture path is required")
appendFileSync(capture, `${JSON.stringify(payload)}\n`)
const mode = (payload as { permission_mode?: unknown }).permission_mode
console.log(`statusline mode=${typeof mode === "string" ? mode : "MISSING"}`)
