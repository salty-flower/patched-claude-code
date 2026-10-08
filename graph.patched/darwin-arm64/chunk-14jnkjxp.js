// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{C}from"./chunk-gcyvvtkw.js";import{a}from"./chunk-70qqbqq4.js";import{Cs,ne}from"./chunk-v2r1tbj3.js";import{c}from"./chunk-tdmgys2e.js";import{o0e}from"./chunk-nwqfvmza.js";import{yd}from"./chunk-q21zbtsq.js";import{Oos}from"./chunk-azaw7yfr.js";var d=0.5,T=4,p=1600,M=25000;function i(){let e=a.MAX_MCP_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;let t=C("tengu_velvet_ibis",{})?.mcp_tool;if(typeof t==="number"&&Number.isFinite(t)&&t>0)return t;return M}function rpe(e){if(!e||typeof e==="string"||!Array.isArray(e))return e;let n=e,t=!1;for(let r of n)if(r.type==="text"&&"_meta"in r&&r._meta){t=!0;break}if(!t)return e;return n.map((r)=>{if(r.type==="text"&&"_meta"in r&&r._meta){let{_meta:o,...s}=r;return s}return r})}function f(e){return e.type==="text"}function P(e){return e.type==="image"}function Vxe(e){if(!e)return 0;if(typeof e==="string")return yd(e);if(!Array.isArray(e))return 0;return e.reduce((n,t)=>{if(f(t))return n+yd(t.text);else if(P(t))return n+p;return n},0)}function qxe(){return i()*4}var x="[OUTPUT TRUNCATED - exceeded ";function _(){return`

${x}${i()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`}async function g(e,n){let t=[],r=0;for(let o of e)if(f(o)){let s=n-r;if(s<=0)break;if(o.text.length<=s)t.push(o),r+=o.text.length;else{let u=ne(o.text,s);if(u){let m={type:"text",text:u};if(o._meta)m._meta=o._meta;t.push(m)}break}}else if(P(o)){let s=p*4;if(r+s<=n)t.push(o),r+=s;else{let u=n-r;if(u>0){let m=Math.floor(u*0.75);try{let l=await Oos(o,m);if(t.push(l),l.source.type==="base64")r+=l.source.data.length;else r+=s}catch{}}}}else t.push(o);return t}async function $Nt(e,n){if(!e)return!1;let t=Vxe(e);if(t<=i()*d)return!1;if(Vxe(typeof e==="string"?e:e.filter(f))>i()*T)return!0;try{return(await o0e(typeof e==="string"?[{role:"user",content:e}]:[{role:"user",content:e}],[],void 0,{credentials:n})??t)>i()}catch(o){return c(o),t>i()}}async function UNt(e){if(!e)return e;let n=qxe(),t=_();if(typeof e==="string")return Cs(e,n)+t;else{let r=await g(e,n);return r.push({type:"text",text:t}),r}}async function Voe(e,n){if(!await $Nt(e,n))return e;return await UNt(e)}
export{rpe,Vxe,qxe,$Nt,UNt,Voe};
