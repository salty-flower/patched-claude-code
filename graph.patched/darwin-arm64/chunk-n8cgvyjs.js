// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{sLe,Coe}from"./chunk-vy1w5pmp.js";import{VHn}from"./chunk-427gt1az.js";import{$un}from"./chunk-emh9bc9e.js";import{L}from"./chunk-ersar6wn.js";var gco=Object.freeze(["attachment","hook-context","compaction"]);function hco(t){return t!==void 0&&t.length>0&&t.every((r)=>gco.includes(r))?t.map((r)=>`session.append{door=${r}}`):[]}var yco=Object.freeze(["prompt.section","prompt.context","prompt.attachment","prompt.compose","skill.prompt","attribution.text","session.compact","settings.read"]);function _co(t){return t.filter((o)=>{let r=sLe.filter((e)=>Coe(o,e));return r.length>0&&r.every((e)=>e.startsWith("classic.")||yco.includes(e))})}function lbr(t){return(t.some($un)?t.filter((e)=>e.tier==="user"):[]).flatMap((e)=>{let s=e.registrationsFor("session.append"),n=L([..._co(e.patterns),...s.flatMap((p)=>hco(VHn(e.matcherFor("session.append",s.filter((a)=>a!==p)))))]);return n.length>0?[{type:"hooks-passed-over",source:e.args.pluginStorageId,patterns:n}]:[]})}export{gco,hco,yco,_co,lbr};
