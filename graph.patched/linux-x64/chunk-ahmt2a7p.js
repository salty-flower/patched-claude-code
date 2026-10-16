// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{a}from"./chunk-xwn0mfnc.js";import{X}from"./chunk-cwsn6mdf.js";import{xD}from"./chunk-2j2r7x9x.js";import{p}from"./chunk-he0s6sfd.js";import{o,v,u}from"./chunk-zypddzr3.js";function O1r(n){switch(n.kind){case"stdout-reader":return{authToken:void 0,tunnel:void 0};case"bearer-minter":return{authToken:n.authToken,tunnel:void 0};case"tool-container":case"runner":return{authToken:void 0,tunnel:n.tunnel}}}var h=p(()=>u({runner:u({pid:v().int().positive(),proc_start:o().min(1)}).optional()}));async function hJs({transport:n,port:e,line:i}){let{parseSessionTunnelEnvelope:l,sessionTunnelRefusal:c}=await import("./chunk-jrstmvbt.js"),r=l(i),d=c(n,e,r);if(d!==void 0||r===void 0)return{refusal:`--session-tunnel ${d??"needs an envelope on standard input"}`};let t=m(i);if(t==="unreadable")return{refusal:'--session-tunnel was handed a "runner" that is not a "pid" and its "proc_start"'};if(t===void 0)return{kind:"tool-container",tunnel:r};let s={pid:t.pid,procStart:t.proc_start};if(a.CCR_AGENT_PROXY_ENABLED)return{refusal:"--session-tunnel does not serve a runner whose session routes git through the agent proxy: it cannot start that relay"};let{isRunnerSeen:f}=await import("./chunk-4m3esm8n.js");if(!await f(s))return{refusal:`--session-tunnel cannot see the runner that started it (process ${s.pid}), so it could not tell when that runner is gone`};return{kind:"runner",tunnel:r,runner:s}}function m(n){if(n===void 0)return;try{let e=h().safeParse(X(n));return e.success?e.data.runner:"unreadable"}catch{return"unreadable"}}function yJs(n){let e=xD.CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN;if(xD.unset("CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN"),n!==void 0)return n;return e===void 0?{kind:"stdout-reader"}:{kind:"bearer-minter",authToken:e}}
export{O1r,hJs,yJs};
