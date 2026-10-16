// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-k4g6y57j.js";import{Y}from"./chunk-bnfhb7sj.js";import{OM}from"./chunk-zwab6e3j.js";import{f}from"./chunk-5r64b6x9.js";import{o,E,u}from"./chunk-82bgdty3.js";function pjr(n){switch(n.kind){case"stdout-reader":return{authToken:void 0,tunnel:void 0};case"bearer-minter":return{authToken:n.authToken,tunnel:void 0};case"tool-container":case"runner":return{authToken:void 0,tunnel:n.tunnel}}}var h=f(()=>u({runner:u({pid:E().int().positive(),proc_start:o().min(1)}).optional()}));async function lJs({transport:n,port:e,line:i}){let{parseSessionTunnelEnvelope:l,sessionTunnelRefusal:c}=await import("./chunk-mnsnn707.js"),r=l(i),d=c(n,e,r);if(d!==void 0||r===void 0)return{refusal:`--session-tunnel ${d??"needs an envelope on standard input"}`};let t=m(i);if(t==="unreadable")return{refusal:'--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"'};if(t===void 0)return{kind:"tool-container",tunnel:r};let s={pid:t.pid,procStart:t.proc_start};if(a.CCR_AGENT_PROXY_ENABLED)return{refusal:"--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay"};let{isRunnerSeen:p}=await import("./chunk-ba16hs6v.js");if(!await p(s))return{refusal:`--session-tunnel cannot see the runner that started it (process ${s.pid}), so it could not tell when that runner is gone`};return{kind:"runner",tunnel:r,runner:s}}function m(n){if(n===void 0)return;try{let e=h().safeParse(Y(n));return e.success?e.data.runner:"unreadable"}catch{return"unreadable"}}function dJs(n){let e=OM.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;if(OM.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"),n!==void 0)return n;return e===void 0?{kind:"stdout-reader"}:{kind:"bearer-minter",authToken:e}}
export{pjr,lJs,dJs};
