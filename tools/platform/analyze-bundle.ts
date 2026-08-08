#!/usr/bin/env bun

// Analyze one platform bundle in an isolated process.  The parent merge process
// keeps only these summaries and reparses declarations on demand, so the two
// full native ASTs are never resident at the same time.

import { readFileSync } from "node:fs"
import {
  declaredNames,
  fingerprint,
  freeIdentifierList,
  parseProgram,
  unwrapCompiledModuleBody,
} from "../lib/platform-merge"

const sourcePath = process.argv[2]
if (!sourcePath) throw new Error("usage: bun tools/platform/analyze-bundle.ts <cli.js>")

const source = readFileSync(sourcePath, "utf8")
const parsed = parseProgram(source)
const body = unwrapCompiledModuleBody(parsed.program.body)
const declarations = body
  .filter((node): node is Record<string, unknown> => {
    if (!node || typeof node !== "object" || Array.isArray(node)) return false
    const record = node as Record<string, unknown>
    return typeof record.start === "number" && typeof record.end === "number"
  })
  .map((node, index) => ({
    index,
    start: node.start as number,
    end: node.end as number,
    structuralHash: fingerprint(node, false),
    literalHash: fingerprint(node, true),
    declaredNames: declaredNames(node),
    freeIdentifierList: freeIdentifierList(node),
  }))

process.stdout.write(`${JSON.stringify({ schema: 1, declarations })}\n`)
