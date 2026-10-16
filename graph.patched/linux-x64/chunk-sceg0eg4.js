// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ue}from"./chunk-zg8w8y5z.js";import{Nm,KFo}from"./chunk-n1y0nb3t.js";import{JAs}from"./chunk-cpm53w4j.js";function F4t(a,t){return JAs(a,(e)=>e.replace(/\.jsonl$/,t),(e)=>{if(e.namespace!=="transcript"||e.agentId===void 0)return;let n=["subagents",...e.agentRelPath??[],`agent-${e.agentId}${t}`],r=Ue.sidecar(e.projectKey,e.sessionId,n);return n.length<=KFo&&Nm(r)===void 0?r:void 0})}
export{F4t};
