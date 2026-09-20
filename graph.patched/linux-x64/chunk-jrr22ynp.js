// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{P}from"./chunk-30p0nwys.js";import{a}from"./chunk-q2vrcqny.js";import{Go,se}from"./chunk-847hpqqs.js";import{m}from"./chunk-kh3dq6rw.js";import{Kue}from"./chunk-v4zgc4qd.js";import{ou}from"./chunk-cs1p3zgm.js";import{mIr}from"./chunk-nayrhff2.js";var d=0.5,f=1600,M=25000;function u(){let e=a.MAX_MCP_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;let t=P("tengu_velvet_ibis",{})?.mcp_tool;if(typeof t==="number"&&Number.isFinite(t)&&t>0)return t;return M}function qY(e){if(!e||typeof e==="string"||!Array.isArray(e))return e;let n=e,t=!1;for(let r of n)if(r.type==="text"&&"_meta"in r&&r._meta){t=!0;break}if(!t)return e;return n.map((r)=>{if(r.type==="text"&&"_meta"in r&&r._meta){let{_meta:o,...s}=r;return s}return r})}function p(e){return e.type==="text"}function C(e){return e.type==="image"}function Xye(e){if(!e)return 0;if(typeof e==="string")return ou(e);if(!Array.isArray(e))return 0;return e.reduce((n,t)=>{if(p(t))return n+ou(t.text);else if(C(t))return n+f;return n},0)}function zae(){return u()*4}function T(){return`

[OUTPUT TRUNCATED - exceeded ${u()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`}async function g(e,n){let t=[],r=0;for(let o of e)if(p(o)){let s=n-r;if(s<=0)break;if(o.text.length<=s)t.push(o),r+=o.text.length;else{let i=se(o.text,s);if(i){let c={type:"text",text:i};if(o._meta)c._meta=o._meta;t.push(c)}break}}else if(C(o)){let s=f*4;if(r+s<=n)t.push(o),r+=s;else{let i=n-r;if(i>0){let c=Math.floor(i*0.75);try{let l=await mIr(o,c);if(t.push(l),l.source.type==="base64")r+=l.source.data.length;else r+=s}catch{}}}}else t.push(o);return t}async function sZe(e,n){if(!e)return!1;let t=Xye(e);if(t<=u()*d)return!1;try{return(await Kue(typeof e==="string"?[{role:"user",content:e}]:[{role:"user",content:e}],[],void 0,{credentials:n})??t)>u()}catch(r){return m(r),t>u()}}async function x(e){if(!e)return e;let n=zae(),t=T();if(typeof e==="string")return Go(e,n)+t;else{let r=await g(e,n);return r.push({type:"text",text:t}),r}}async function y3(e,n){if(!await sZe(e,n))return e;return await x(e)}
export{qY,Xye,zae,sZe,y3};
