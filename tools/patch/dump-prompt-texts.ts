#!/usr/bin/env bun
// Dump the prompt-occurrence text inventory for a target bundle, keyed by
// occurrenceId, so prompt identity draft resolutions can be reviewed against
// the actual prompt text. Writes JSONL to stdout.
//
// Usage:
//   bun run tools/patch/dump-prompt-texts.ts staging/2.1.228/cli.js > /tmp/prompt-texts-2.1.228.jsonl

import { readFileSync } from "node:fs"
import { discoverPromptCandidates } from "../lib/prompt-catalog"

const [bundlePath] = process.argv.slice(2)
if (!bundlePath) {
  console.error("usage: dump-prompt-texts.ts <cli.js>")
  process.exit(2)
}

const source = readFileSync(bundlePath, "utf8")
const candidates = discoverPromptCandidates(source)
for (const [ordinal, candidate] of candidates.entries()) {
  console.log(
    JSON.stringify({
      occurrenceId: `v${ordinal.toString().padStart(4, "0")}`,
      ordinal,
      detectorText: candidate.detectorText,
      staticText: candidate.staticText ?? null,
    }),
  )
}
