// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{IMe,Kte}from"./chunk-s91j0m1c.js";import{nRn}from"./chunk-p1sa341g.js";import{osn}from"./chunk-v7aynt7y.js";import{D}from"./chunk-dxktn51d.js";var D7r=Object.freeze(["attachment","hook-context","compaction"]);function L7r(t){return t!==void 0&&t.length>0&&t.every((r)=>D7r.includes(r))?t.map((r)=>`session.append{door=${r}}`):[]}var N7r=Object.freeze(["prompt.section","prompt.context","prompt.attachment","prompt.compose","skill.prompt","attribution.text","session.compact","settings.read"]);function $7r(t){return t.filter((o)=>{let r=IMe.filter((e)=>Kte(o,e));return r.length>0&&r.every((e)=>e.startsWith("classic.")||N7r.includes(e))})}function hcr(t){return(t.some(osn)?t.filter((e)=>e.tier==="user"):[]).flatMap((e)=>{let s=e.registrationsFor("session.append"),n=D([...$7r(e.patterns),...s.flatMap((p)=>L7r(nRn(e.matcherFor("session.append",s.filter((a)=>a!==p)))))]);return n.length>0?[{type:"hooks-passed-over",source:e.args.pluginStorageId,patterns:n}]:[]})}export{D7r,L7r,N7r,$7r,hcr};
