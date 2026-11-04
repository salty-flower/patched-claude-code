// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{x}from"./chunk-zmmnrc9r.js";import{Sae}from"./chunk-9kshasta.js";import{vt}from"./chunk-gp9fthqh.js";import{en}from"./chunk-r3bztxeh.js";var NYs=(t)=>`${t.path} (${en(t.bytes)})`;var cUo=(t,r)=>[t].filter((e)=>e>0).map((e)=>`and ${e} more ${x(e,r)} not named here`);var m2r=(t)=>(/^ */.exec(t)?.[0]??"")+vt(t,Sae);var uUo=(t)=>[t].filter((r)=>r>0).map((r)=>`${r} ${x(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);var pUo=(t)=>[t??[]].flat().flatMap((r)=>[`Writes this manifest first, to ${r.path}:`,...r.text.trimEnd().split(`
`)]);var a=(t)=>`stays here: ${t.path} (${t.words})`;var fUo=(t)=>[...t.files.map(NYs),...cUo(t.unnamed?.files??0,"file"),...t.stays.map(a),...cUo(t.unnamed?.stays??0,"entry")].map(m2r);export{NYs,cUo,m2r,uUo,pUo,fUo};
