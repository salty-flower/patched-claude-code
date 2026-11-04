// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ge}from"./chunk-62j6znyn.js";import{bg,tLs}from"./chunk-qj8veqay.js";import{MRi}from"./chunk-2nma2tga.js";function Egn(a,t){return MRi(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=Ge.sidecar(e.projectKey,e.sessionId,n);return n.length<=tLs&&bg(r)===void 0?r:void 0})}
export{Egn};
