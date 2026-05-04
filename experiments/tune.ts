// Tighten the analysis: see how thresholds change the picture, and what
// kind of decls end up in the "no match" bucket.
import * as parser from "@babel/parser";
import { readFileSync } from "node:fs";
import { join } from "node:path";
const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..");
const V88_PATH = join(ROOT, "reference/v2.1.88/cli.js");
const V112_PATH = process.env.AUDITED_CC_TARGET ?? join(ROOT, "staging/2.1.112/cli.js");
const v88src = readFileSync(V88_PATH, "utf8");
const v112src = readFileSync(V112_PATH, "utf8");

function fp(node: any) {
  const counts: Record<string, number> = {};
  const lits = new Set<string>();
  function w(n: any) {
    if (!n || typeof n !== "object") return;
    if (Array.isArray(n)) { for (const x of n) w(x); return; }
    if (typeof n.type === "string") {
      counts[n.type] = (counts[n.type] ?? 0) + 1;
      if (n.type === "StringLiteral" && typeof n.value === "string" && n.value.length>=4 && !n.value.includes("${")) {
        const lt = [...n.value].filter(c=>/[A-Za-z]/.test(c)).length;
        if (lt/n.value.length >= 0.5) lits.add(n.value);
      }
    }
    for (const k of Object.keys(n)) {
      if (k==="loc"||k==="range"||k==="leadingComments"||k==="trailingComments") continue;
      w(n[k]);
    }
  }
  w(node);
  return { kind: node.type, counts, lits, size: (node.end??0)-(node.start??0) };
}

function jac(a:Set<string>,b:Set<string>){if(a.size===0&&b.size===0)return 0;let i=0;for(const x of a)if(b.has(x))i++;return i/(a.size+b.size-i);}
function cos(a:Record<string,number>,b:Record<string,number>){const k=new Set([...Object.keys(a),...Object.keys(b)]);let d=0,x=0,y=0;for(const i of k){const u=a[i]??0,v=b[i]??0;d+=u*v;x+=u*u;y+=v*v;}return d===0?0:d/Math.sqrt(x*y);}

const ast88 = parser.parse(v88src,{sourceType:"script",errorRecovery:true,plugins:["jsx","typescript"]});
const ast112 = parser.parse(v112src,{sourceType:"script",errorRecovery:true,plugins:["jsx","typescript"]});
const fp88 = ast88.program.body.map(fp);
const fp112 = ast112.program.body.map(fp);

// For each v112 decl, find best (jac, cos) regardless of threshold
let buckets = {gt8: 0, gt6: 0, gt4: 0, gt2: 0, lt2: 0};
let bytes = {gt8: 0, gt6: 0, gt4: 0, gt2: 0, lt2: 0};
let zeroLit = 0, zeroLitSize = 0;
for (const t of fp112) {
  if (t.lits.size === 0) { zeroLit++; zeroLitSize += t.size; continue; }
  let bestJac = 0;
  for (const p of fp88) {
    if (p.kind !== t.kind) continue;
    const j = jac(t.lits, p.lits);
    if (j > bestJac) bestJac = j;
  }
  const sz = t.size;
  if (bestJac >= 0.8) { buckets.gt8++; bytes.gt8 += sz; }
  else if (bestJac >= 0.6) { buckets.gt6++; bytes.gt6 += sz; }
  else if (bestJac >= 0.4) { buckets.gt4++; bytes.gt4 += sz; }
  else if (bestJac >= 0.2) { buckets.gt2++; bytes.gt2 += sz; }
  else { buckets.lt2++; bytes.lt2 += sz; }
}
const ttl = fp112.length;
const ttsz = fp112.reduce((a,b)=>a+b.size,0);
console.log(`v112 decls: ${ttl}, total bytes: ${(ttsz/1024/1024).toFixed(1)} MiB`);
console.log(`zero-literal decls: ${zeroLit} (${(zeroLitSize/1024/1024).toFixed(2)} MiB) — un-fingerprintable by literals`);
console.log("");
console.log("v112 → v88 best literal Jaccard distribution (literal-bearing decls only):");
function row(label:string, n:number, b:number) {
  console.log(`  ${label.padEnd(12)}: count=${String(n).padStart(5)} (${(n*100/ttl).toFixed(1).padStart(4)}%)  bytes=${(b/1024/1024).toFixed(1).padStart(4)} MiB (${(b*100/ttsz).toFixed(1).padStart(4)}%)`);
}
row(">=0.8", buckets.gt8, bytes.gt8);
row("0.6-0.8", buckets.gt6, bytes.gt6);
row("0.4-0.6", buckets.gt4, bytes.gt4);
row("0.2-0.4", buckets.gt2, bytes.gt2);
row("<0.2", buckets.lt2, bytes.lt2);
