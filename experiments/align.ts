// Function-level alignment probe.
//
// Hypothesis: most v2.1.112 minified top-level declarations have a
// recognisable counterpart in v2.1.88 minified, where "recognisable" means
// structural fingerprint matches modulo identifier renaming. If true, we can
// pivot every v112 fn to a v88 fn, then via v88 sourcemap pivot to v88 TS
// source, then LLM-lift v112 minified body to v112 TS.
//
// Fingerprint per top-level decl:
//   - kind (Function/Var/Class/...)
//   - count of nested AST nodes by type (FunctionExpression, ArrowFunction,
//     CallExpression, MemberExpression, IfStatement, ReturnStatement, ...)
//   - bag of *human-authored* string literals (StringLiteral, length>=4,
//     letter-density>=0.5 — drops minified-id template tails)
//   - param arity for fn declarations
//
// Identifiers are deliberately excluded — they get reminified per release.
//
// Match strategy: for each v112 decl, build candidate set in v88 by literal
// bag intersection (Jaccard >= 0.6). Among candidates, pick the one with
// closest AST-node-count vector (cosine sim). Report match-rate buckets.

import * as parser from "@babel/parser";
import { readFileSync } from "node:fs";

type Fp = {
  kind: string;
  arity: number;
  nodeCounts: Record<string, number>;
  lits: Set<string>;
  loc: { line: number; col: number };
  size: number;
};

function isHumanish(s: string): boolean {
  if (s.length < 4 || s.length > 400) return false;
  if (s.includes("${")) return false;
  let letters = 0;
  for (const c of s) if (/[A-Za-z]/.test(c)) letters++;
  return letters / s.length >= 0.5;
}

function fingerprintAt(node: any, src: string): Fp {
  const counts: Record<string, number> = {};
  const lits = new Set<string>();
  let arity = 0;

  function walk(n: any) {
    if (!n || typeof n !== "object") return;
    if (Array.isArray(n)) {
      for (const x of n) walk(x);
      return;
    }
    if (typeof n.type === "string") {
      counts[n.type] = (counts[n.type] ?? 0) + 1;
      if (n.type === "StringLiteral" && typeof n.value === "string" && isHumanish(n.value)) {
        lits.add(n.value);
      }
      if (n.type === "TemplateElement" && n.value && typeof n.value.cooked === "string" && isHumanish(n.value.cooked)) {
        lits.add(n.value.cooked);
      }
    }
    for (const k of Object.keys(n)) {
      if (k === "loc" || k === "range" || k === "leadingComments" || k === "trailingComments" || k === "comments" || k === "tokens") continue;
      walk((n as any)[k]);
    }
  }

  if (node.params && Array.isArray(node.params)) arity = node.params.length;
  walk(node);

  return {
    kind: node.type,
    arity,
    nodeCounts: counts,
    lits,
    loc: { line: node.loc?.start?.line ?? -1, col: node.loc?.start?.column ?? -1 },
    size: (node.end ?? 0) - (node.start ?? 0),
  };
}

function topLevelFingerprints(src: string, label: string): Fp[] {
  console.error(`parsing ${label}…`);
  const ast = parser.parse(src, {
    sourceType: "script",
    errorRecovery: true,
    allowReturnOutsideFunction: true,
    plugins: ["jsx", "typescript"],
  });
  console.error(`  parse ok: ${ast.errors?.length ?? 0} recovered errors`);
  const out: Fp[] = [];
  for (const s of ast.program.body) {
    if (s.type === "FunctionDeclaration" || s.type === "ClassDeclaration" || s.type === "VariableDeclaration") {
      out.push(fingerprintAt(s, src));
    } else if (s.type === "ExpressionStatement") {
      // bundle-level wrappers: var X = function(){...} commas etc; treat as a unit
      out.push(fingerprintAt(s, src));
    }
  }
  console.error(`  top-level decls: ${out.length}`);
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function cosine(a: Record<string, number>, b: Record<string, number>): number {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0, na = 0, nb = 0;
  for (const k of keys) {
    const x = a[k] ?? 0;
    const y = b[k] ?? 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return dot === 0 ? 0 : dot / Math.sqrt(na * nb);
}

function bestMatch(target: Fp, pool: Fp[]): { jac: number; cos: number; idx: number } {
  let best = { jac: 0, cos: 0, idx: -1 };
  for (let i = 0; i < pool.length; i++) {
    const p = pool[i];
    if (p.kind !== target.kind) continue;
    const jac = jaccard(target.lits, p.lits);
    if (jac < 0.4) continue; // gate by lit overlap
    const cos = cosine(target.nodeCounts, p.nodeCounts);
    if (jac * cos > best.jac * best.cos) {
      best = { jac, cos, idx: i };
    }
  }
  return best;
}

import { join, dirname } from "node:path";

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..");
const V88_PATH = join(ROOT, "reference/v2.1.88/cli.js");
const V112_PATH = process.env.AUDITED_CC_TARGET ?? join(ROOT, "staging/2.1.112/cli.js");
const v88src = readFileSync(V88_PATH, "utf8");
const v112src = readFileSync(V112_PATH, "utf8");

const v88 = topLevelFingerprints(v88src, "v2.1.88");
const v112 = topLevelFingerprints(v112src, "v2.1.112");

console.error("matching v112 → v88…");
const buckets = { strong: 0, weak: 0, none: 0 };
const sizeStrong: number[] = [];
const sizeNone: number[] = [];
for (const t of v112) {
  const m = bestMatch(t, v88);
  if (m.idx < 0) {
    buckets.none++;
    sizeNone.push(t.size);
  } else if (m.jac >= 0.7 && m.cos >= 0.85) {
    buckets.strong++;
    sizeStrong.push(t.size);
  } else {
    buckets.weak++;
  }
}

const total = v112.length;
console.log(`v88 top-level: ${v88.length}`);
console.log(`v112 top-level: ${v112.length}`);
console.log("");
console.log(`strong match (jac≥0.7, cos≥0.85): ${buckets.strong}  (${(buckets.strong * 100 / total).toFixed(1)}%)`);
console.log(`weak match (jac≥0.4, lower cos):   ${buckets.weak}  (${(buckets.weak * 100 / total).toFixed(1)}%)`);
console.log(`no match (jac<0.4):               ${buckets.none}  (${(buckets.none * 100 / total).toFixed(1)}%)`);
console.log("");
const sumStrong = sizeStrong.reduce((a, b) => a + b, 0);
const sumNone = sizeNone.reduce((a, b) => a + b, 0);
const total_size = v112.reduce((a, b) => a + b.size, 0);
console.log(`bytes covered by strong: ${(sumStrong / 1024 / 1024).toFixed(1)} MiB / ${(total_size / 1024 / 1024).toFixed(1)} MiB (${(sumStrong * 100 / total_size).toFixed(1)}%)`);
console.log(`bytes uncovered (no match): ${(sumNone / 1024 / 1024).toFixed(1)} MiB (${(sumNone * 100 / total_size).toFixed(1)}%)`);
