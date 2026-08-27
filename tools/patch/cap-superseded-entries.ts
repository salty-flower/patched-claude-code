#!/usr/bin/env bun
// Cap superseded patch entries whose open-ended applies_to range extends past
// the new target version even though a -2-1-246 successor exists.
//
// Usage: bun run tools/patch/cap-superseded-entries.ts <toml-path> --after <name> ...
// Caps the entry named <name> (first [[patches]] block whose name matches) by
// rewriting its applies_to upper bound <2.2.0 -> <2.1.246.

import { readFileSync, writeFileSync } from "node:fs"

const args = process.argv.slice(2)
const file = args[0]
if (!file || !file.endsWith(".toml")) {
  console.error("usage: bun run tools/patch/cap-superseded-entries.ts <patches/file.toml> --after <name>...")
  process.exit(2)
}
const afterIndex = args.indexOf("--after")
const names = afterIndex === -1 ? [] : args.slice(afterIndex + 1).filter((a) => !a.startsWith("--"))
if (names.length === 0) {
  console.error("no entry names given")
  process.exit(2)
}

let text = readFileSync(file, "utf8")
let changed = 0
for (const name of names) {
  const nameMarker = `name = "${name}"`
  const start = text.indexOf(nameMarker)
  if (start === -1) {
    console.error(`[miss] ${name}: entry not found in ${file}`)
    continue
  }
  const nextEntry = text.indexOf("[[patches]]", start + nameMarker.length)
  const blockEnd = nextEntry === -1 ? text.length : nextEntry
  const block = text.slice(start, blockEnd)
  if (!block.includes("applies_to")) {
    console.error(`[skip] ${name}: no applies_to in block`)
    continue
  }
  if (!block.includes("<2.2.0")) {
    console.error(`[skip] ${name}: applies_to already bounded`)
    continue
  }
  const newBlock = block.replace(/(<2\.1\.\d+|<2\.2\.0)/, "<2.1.246")
  text = text.slice(0, start) + newBlock + text.slice(blockEnd)
  changed++
  console.log(`[cap] ${name}`)
}

if (changed > 0) writeFileSync(file, text)
console.log(`${changed} entr${changed === 1 ? "y" : "ies"} capped in ${file}`)
