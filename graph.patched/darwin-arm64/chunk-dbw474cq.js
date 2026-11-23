// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ze}from"./chunk-jhh9hbv6.js";import{hg}from"./chunk-apc08a8f.js";import{Bsa}from"./chunk-1r207bn5.js";import{lGs}from"./chunk-d7pdhvmf.js";function X0n(a,t){return Bsa(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=Ze.sidecar(e.projectKey,e.sessionId,n);return n.length<=lGs&&hg(r)===void 0?r:void 0})}
export{X0n};
