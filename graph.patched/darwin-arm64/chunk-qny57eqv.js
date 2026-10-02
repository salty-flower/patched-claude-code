// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{dLn,wee,xIt}from"./chunk-59zy4j10.js";import{Kd}from"./chunk-er6f56rj.js";import{Wlt}from"./chunk-jfbsd9e8.js";import{U}from"./chunk-7xx63g64.js";function RQ(e){return Wlt([...e]).filter((t)=>!dLn(t)&&!(t.type==="system"&&("persist"in t)&&t.persist===!1))}function eAn(e,t){let r={keys:U(e.filter((s)=>s.trim()!=="").flatMap(a)).sort((s,o)=>o.length-s.length),hits:0};return{messages:r.keys.length===0?t:t.flatMap((s)=>{if(s.role!=="user")return[s];let o=u(s.content,r);return o===void 0?[]:[{...s,content:o}]}),keys:r.keys.length,hits:r.hits}}function a(e){return(xIt({type:"cowork_memory_context",version:null,content:e,leg:"laptop"}).rendered??[]).flatMap(({content:t})=>typeof t==="string"?[t]:t.flatMap((r)=>r.type==="text"?[r.text]:[])).flatMap((t)=>[t.trim(),wee(t).trim()]).filter((t)=>t!==""&&t!==Kd)}function u(e,t){if(typeof e==="string"){let n=i(e,t);return p(n)?void 0:n}let r=e.flatMap((n)=>{if(l(n)){let s=i(n.text,t);return p(s)?[]:[{...n,text:s}]}if(y(n)&&n.content!==void 0)return[{...n,content:u(n.content,t)??""}];return[n]});return r.length===0?void 0:r}function l(e){return e.type==="text"&&"text"in e&&typeof e.text==="string"}function y(e){return e.type==="tool_result"}function i(e,t){let r=e;for(;;){let n=t.keys.find((o)=>r.includes(o));if(n===void 0)return r;let s=r.split(n);t.hits+=s.length-1,r=s.join("")}}function p(e){return wee(e).trim()===""}
export{RQ,eAn};
