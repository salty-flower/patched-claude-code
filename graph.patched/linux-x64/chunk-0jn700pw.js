// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{O}from"./chunk-h4js79s0.js";import{dpe}from"./chunk-c9gy813e.js";import{Rt}from"./chunk-d9g10s6g.js";import{nn}from"./chunk-b6edxg9t.js";var ZOi=(t)=>`${t.path} (${nn(t.bytes)})`;var His=(t,r)=>[t].filter((e)=>e>0).map((e)=>`and ${e} more ${O(e,r)} not named here`);var Cio=(t)=>(/^ */.exec(t)?.[0]??"")+Rt(t,dpe);var Nis=(t)=>[t].filter((r)=>r>0).map((r)=>`${r} ${O(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);var Fis=(t)=>[t??[]].flat().flatMap((r)=>[`Writes this manifest first, to ${r.path}:`,...r.text.trimEnd().split(`
`)]);var a=(t)=>`stays here: ${t.path} (${t.words})`;var $is=(t)=>[...t.files.map(ZOi),...His(t.unnamed?.files??0,"file"),...t.stays.map(a),...His(t.unnamed?.stays??0,"entry")].map(Cio);export{ZOi,His,Cio,Nis,Fis,$is};
