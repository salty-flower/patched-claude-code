// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{je}from"./chunk-z3qcbx87.js";import{ig,RKo}from"./chunk-32vra4sg.js";import{E0s}from"./chunk-a62n7072.js";function Q6t(a,t){return E0s(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=je.sidecar(e.projectKey,e.sessionId,n);return n.length<=RKo&&ig(r)===void 0?r:void 0})}
export{Q6t};
