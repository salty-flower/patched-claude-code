// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{ER}from"./chunk-9d5ge72j.js";import{u0,k}from"./chunk-axsjfnwn.js";import{$Mt}from"./chunk-pqjs74sd.js";import{isDeepStrictEqual as c}from"util";function tqo(){return i.CLAUDE_CODE_CCR_OWN_CONNECTION_POOL||k("tengu_reactive_quilt",!1)}async function rtr(t,e={}){if(e.proxy!==void 0||u0()!=="hosted_worker"||!tqo())return fetch(String(t),e);let r=ER(void 0).tls;if(c(e.tls,r))return $Mt(String(t),e,()=>!0);let o=new Set([r?.ca??[]].flat()),n=[e.tls?.ca??[]].flat().filter((s)=>o.has(s));if(n.length===0)throw Error("MCP request not sent: its list of trusted CA certificates has nothing in common with the one Claude Code uses now, most likely because Claude Code's TLS settings changed after the server connected. Reconnect the server to use the new settings.");return fetch(String(t),{...e,tls:{...r,ca:n}})}
export{tqo,rtr};
