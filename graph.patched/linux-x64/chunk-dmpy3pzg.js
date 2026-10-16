// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{tKt,nKt}from"./chunk-28vbsbzg.js";import{HNt}from"./chunk-3x4atckz.js";import{Ttn}from"./chunk-g1w01sh7.js";import{D}from"./chunk-eqmywwjn.js";function Tor(r){return(r.some(Ttn)?r.filter((e)=>e.tier==="user"):[]).flatMap((e)=>{let o=e.registrationsFor("session.append"),s=D([...nKt(e.patterns),...o.flatMap((t)=>tKt(HNt(e.matcherFor("session.append",o.filter((a)=>a!==t)))))]);return s.length>0?[{type:"hooks-passed-over",source:e.args.pluginStorageId,patterns:s}]:[]})}export{Tor};
