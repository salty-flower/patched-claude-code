// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{I}from"./chunk-b5xhmzas.js";import{_pe}from"./chunk-f4qppfzf.js";import{Rt}from"./chunk-qk996v8z.js";import{nn}from"./chunk-sjk3kdyw.js";var p0i=(t)=>`${t.path} (${nn(t.bytes)})`;var His=(t,r)=>[t].filter((e)=>e>0).map((e)=>`and ${e} more ${I(e,r)} not named here`);var Dio=(t)=>(/^ */.exec(t)?.[0]??"")+Rt(t,_pe);var Nis=(t)=>[t].filter((r)=>r>0).map((r)=>`${r} ${I(r,"entry stays","entries stay")} on this machine (secrets, links, ignored files)`);var Fis=(t)=>[t??[]].flat().flatMap((r)=>[`Writes this manifest first, to ${r.path}:`,...r.text.trimEnd().split(`
`)]);var a=(t)=>`stays here: ${t.path} (${t.words})`;var $is=(t)=>[...t.files.map(p0i),...His(t.unnamed?.files??0,"file"),...t.stays.map(a),...His(t.unnamed?.stays??0,"entry")].map(Dio);export{p0i,His,Dio,Nis,Fis,$is};
