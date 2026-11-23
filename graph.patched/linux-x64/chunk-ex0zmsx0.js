// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ze}from"./chunk-fqmzf5r4.js";import{hg}from"./chunk-1fka5x2f.js";import{Goa}from"./chunk-97p9g3pm.js";import{CGs}from"./chunk-7m8yhnnj.js";function DMn(a,t){return Goa(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=Ze.sidecar(e.projectKey,e.sessionId,n);return n.length<=CGs&&hg(r)===void 0?r:void 0})}
export{DMn};
