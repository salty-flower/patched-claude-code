#!/usr/bin/env bun
// Ensure the native extraction support contract is declared in both code and docs.

import { readFileSync } from "node:fs"
import { join } from "node:path"
import { BUN_STANDALONE_LAYOUT_CONTRACT } from "../lib/extract-bun-standalone"
import { STAGING_SUPPORT_CONTRACT } from "./stage-claude-code"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const DOC = join(ROOT, "docs", "rules", "Native-Bundle-Extraction.md")

function requireText(body: string, text: string, label: string): void {
  if (!body.toLowerCase().includes(text.toLowerCase())) {
    throw new Error(`${DOC} is missing ${label}: ${text}`)
  }
}

function main(): number {
  const body = readFileSync(DOC, "utf8").replace(/`/g, "")
  const contracts = [
    STAGING_SUPPORT_CONTRACT.legacyWrapperCli,
    STAGING_SUPPORT_CONTRACT.nativeBunStandalone,
    STAGING_SUPPORT_CONTRACT.nativeDownloadsManifest,
  ]

  for (const contract of contracts) {
    for (const version of contract.knownGoodVersions) {
      requireText(body, version, `known-good version`)
    }
    requireText(body, contract.condition, `source-shape condition`)
  }

  requireText(body, STAGING_SUPPORT_CONTRACT.nativeBunStandalone.provisionalRange, "native provisional range")
  requireText(body, BUN_STANDALONE_LAYOUT_CONTRACT.name, "Bun standalone layout contract name")
  requireText(body, `${BUN_STANDALONE_LAYOUT_CONTRACT.offsetsSize}-byte`, "Bun offsets size")
  requireText(body, `${BUN_STANDALONE_LAYOUT_CONTRACT.moduleRecordSize}-byte`, "Bun module record size")

  console.log("native extraction contract is declared in code and docs")
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
