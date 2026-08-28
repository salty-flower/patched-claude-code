// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x}from"./chunk-ns0ekkj0.js";import{a}from"./chunk-g0kfvhx3.js";import{Ki,de}from"./chunk-2h7wbm8s.js";import{_}from"./chunk-6ce4s97h.js";import{qge}from"./chunk-hrvkymct.js";import{sc}from"./chunk-rkgfzd8n.js";import{c5n}from"./chunk-z621p8v0.js";var C=0.5,l=1600,d=25000;function c(){let e=a.MAX_MCP_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;let r=x("tengu_velvet_ibis",{})?.mcp_tool;if(typeof r==="number"&&Number.isFinite(r)&&r>0)return r;return d}function mW(e){if(!e||typeof e==="string"||!Array.isArray(e))return e;let n=e,r=!1;for(let t of n)if(t.type==="text"&&"_meta"in t&&t._meta){r=!0;break}if(!r)return e;return n.map((t)=>{if(t.type==="text"&&"_meta"in t&&t._meta){let{_meta:o,...s}=t;return s}return t})}function f(e){return e.type==="text"}function p(e){return e.type==="image"}function ooe(e){if(!e)return 0;if(typeof e==="string")return sc(e);if(!Array.isArray(e))return 0;return e.reduce((n,r)=>{if(f(r))return n+sc(r.text);else if(p(r))return n+l;return n},0)}function uX(){return c()*4}function P(){return`

[OUTPUT TRUNCATED - exceeded ${c()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`}async function M(e,n){let r=[],t=0;for(let o of e)if(f(o)){let s=n-t;if(s<=0)break;if(o.text.length<=s)r.push(o),t+=o.text.length;else{let i=de(o.text,s);if(i){let u={type:"text",text:i};if(o._meta)u._meta=o._meta;r.push(u)}break}}else if(p(o)){let s=l*4;if(t+s<=n)r.push(o),t+=s;else{let i=n-t;if(i>0){let u=Math.floor(i*0.75);try{let m=await c5n(o,u);if(r.push(m),m.source.type==="base64")t+=m.source.data.length;else t+=s}catch{}}}}else r.push(o);return r}async function GFe(e,n){if(!e)return!1;if(ooe(e)<=c()*C)return!1;try{let o=await qge(typeof e==="string"?[{role:"user",content:e}]:[{role:"user",content:e}],[],void 0,{credentials:n});return!!(o&&o>c())}catch(t){return _(t),!1}}async function T(e){if(!e)return e;let n=uX(),r=P();if(typeof e==="string")return Ki(e,n)+r;else{let t=await M(e,n);return t.push({type:"text",text:r}),t}}async function nj(e,n){if(!await GFe(e,n))return e;return await T(e)}
export{mW,ooe,uX,GFe,nj};
