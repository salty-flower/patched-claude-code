// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{fVt,mVt}from"./chunk-4b995vrk.js";import{zNt}from"./chunk-ynz70n3e.js";import{Wtn}from"./chunk-2vj7p8x3.js";import{D}from"./chunk-xzypj06m.js";function Bor(r){return(r.some(Wtn)?r.filter((e)=>e.tier==="user"):[]).flatMap((e)=>{let o=e.registrationsFor("session.append"),s=D([...mVt(e.patterns),...o.flatMap((t)=>fVt(zNt(e.matcherFor("session.append",o.filter((a)=>a!==t)))))]);return s.length>0?[{type:"hooks-passed-over",source:e.args.pluginStorageId,patterns:s}]:[]})}export{Bor};
