// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{S4n,ZQ,NGr}from"./chunk-y0b3kvx1.js";import{tbt}from"./chunk-wv42kg2p.js";import{D}from"./chunk-n6jrzhpg.js";function Qne(t){return tbt([...t]).filter((s)=>!S4n(s)&&!(s.type==="system"&&("persist"in s)&&s.persist===!1))}function U$n(t,s){let r={keys:D(t.filter((n)=>n.trim()!=="").flatMap(NGr)).sort((n,o)=>o.length-n.length),hits:0};return{messages:r.keys.length===0?s:s.flatMap((n)=>{if(n.role!=="user")return[n];let o=p(n.content,r);return o===void 0?[]:[{...n,content:o}]}),keys:r.keys.length,hits:r.hits}}function p(t,s){if(typeof t==="string"){let e=i(t,s);return u(e)?void 0:e}let r=t.flatMap((e)=>{if(a(e)){let n=i(e.text,s);return u(n)?[]:[{...e,text:n}]}if(y(e)&&e.content!==void 0)return[{...e,content:p(e.content,s)??""}];return[e]});return r.length===0?void 0:r}function a(t){return t.type==="text"&&"text"in t&&typeof t.text==="string"}function y(t){return t.type==="tool_result"}function i(t,s){let r=t;for(;;){let e=s.keys.find((o)=>r.includes(o));if(e===void 0)return r;let n=r.split(e);s.hits+=n.length-1,r=n.join("")}}function u(t){return ZQ(t).trim()===""}
export{Qne,U$n};
