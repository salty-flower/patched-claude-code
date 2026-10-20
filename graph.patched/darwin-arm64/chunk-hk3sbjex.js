// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{FMe,Zte}from"./chunk-44ndjnhv.js";import{_Rn}from"./chunk-1wehf1k2.js";import{psn}from"./chunk-3sgr9mv1.js";import{D}from"./chunk-kpqr86hf.js";var ZQr=Object.freeze(["attachment","hook-context","compaction"]);function eZr(t){return t!==void 0&&t.length>0&&t.every((r)=>ZQr.includes(r))?t.map((r)=>`session.append{door=${r}}`):[]}var tZr=Object.freeze(["prompt.section","prompt.context","prompt.attachment","prompt.compose","skill.prompt","attribution.text","session.compact","settings.read"]);function nZr(t){return t.filter((o)=>{let r=FMe.filter((e)=>Zte(o,e));return r.length>0&&r.every((e)=>e.startsWith("classic.")||tZr.includes(e))})}function Mcr(t){return(t.some(psn)?t.filter((e)=>e.tier==="user"):[]).flatMap((e)=>{let s=e.registrationsFor("session.append"),n=D([...nZr(e.patterns),...s.flatMap((p)=>eZr(_Rn(e.matcherFor("session.append",s.filter((a)=>a!==p)))))]);return n.length>0?[{type:"hooks-passed-over",source:e.args.pluginStorageId,patterns:n}]:[]})}export{ZQr,eZr,tZr,nZr,Mcr};
