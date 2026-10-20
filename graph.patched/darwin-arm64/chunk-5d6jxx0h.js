// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{je}from"./chunk-jjgc4sar.js";import{ig,sVo}from"./chunk-tx4cjw3a.js";import{tNs}from"./chunk-gypvak00.js";function l5t(a,t){return tNs(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=je.sidecar(e.projectKey,e.sessionId,n);return n.length<=sVo&&ig(r)===void 0?r:void 0})}
export{l5t};
