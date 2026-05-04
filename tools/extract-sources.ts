#!/usr/bin/env bun
// Materialise reference/v2.1.88/cli.js.map's sourcesContent into the
// per-file tree at reference/v2.1.88/sources/. Sources/ is gitignored —
// the .map remains the source of truth — but a real on-disk tree is much
// nicer for reading rationale_ref links during patch authoring.
//
// Idempotent. Runs in ~5s.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..");
const MAP = join(ROOT, "reference/v2.1.88/cli.js.map");
const OUT = join(ROOT, "reference/v2.1.88/sources");

console.error(`reading ${MAP}…`);
const raw = readFileSync(MAP, "utf8");
const sm = JSON.parse(raw) as { sources: string[]; sourcesContent: (string | null)[] };
console.error(`sources=${sm.sources.length}`);

let written = 0;
let skippedNullContent = 0;
for (let i = 0; i < sm.sources.length; i++) {
  const path = sm.sources[i];
  const body = sm.sourcesContent?.[i];
  if (!body) {
    skippedNullContent++;
    continue;
  }
  // Normalise leading "../" so source paths land under sources/<file>.
  const cleaned = path.replace(/^\.\.\//, "").replace(/^\//, "");
  const guard = normalize(cleaned);
  if (guard.startsWith("..") || guard.startsWith("/")) {
    console.error(`refusing path traversal: ${path}`);
    continue;
  }
  const dst = join(OUT, guard);
  mkdirSync(dirname(dst), { recursive: true });
  writeFileSync(dst, body);
  written++;
}

console.error(`wrote ${written} files to ${OUT}`);
if (skippedNullContent) console.error(`skipped ${skippedNullContent} sources with null content`);
