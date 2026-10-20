// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-h422gpw8.js";import{X}from"./chunk-tdxkq523.js";import{kE}from"./chunk-2gr8qttp.js";import{f}from"./chunk-ynakaye4.js";import{o,E,u}from"./chunk-xv841za9.js";function BVr(n){switch(n.kind){case"stdout-reader":return{authToken:void 0,tunnel:void 0};case"bearer-minter":return{authToken:n.authToken,tunnel:void 0};case"tool-container":case"runner":return{authToken:void 0,tunnel:n.tunnel}}}var h=f(()=>u({runner:u({pid:E().int().positive(),proc_start:o().min(1)}).optional()}));async function tli({transport:n,port:e,line:i}){let{parseSessionTunnelEnvelope:l,sessionTunnelRefusal:c}=await import("./chunk-18bqnq16.js"),r=l(i),d=c(n,e,r);if(d!==void 0||r===void 0)return{refusal:`--session-tunnel ${d??"needs an envelope on standard input"}`};let t=m(i);if(t==="unreadable")return{refusal:'--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"'};if(t===void 0)return{kind:"tool-container",tunnel:r};let s={pid:t.pid,procStart:t.proc_start};if(a.CCR_AGENT_PROXY_ENABLED)return{refusal:"--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay"};let{isRunnerSeen:p}=await import("./chunk-w917k7b6.js");if(!await p(s))return{refusal:`--session-tunnel cannot see the runner that started it (process ${s.pid}), so it could not tell when that runner is gone`};return{kind:"runner",tunnel:r,runner:s}}function m(n){if(n===void 0)return;try{let e=h().safeParse(X(n));return e.success?e.data.runner:"unreadable"}catch{return"unreadable"}}function nli(n){let e=kE.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;if(kE.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"),n!==void 0)return n;return e===void 0?{kind:"stdout-reader"}:{kind:"bearer-minter",authToken:e}}
export{BVr,tli,nli};
