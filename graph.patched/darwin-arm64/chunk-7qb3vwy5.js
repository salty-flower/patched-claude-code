// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{l,E,bf}from"./chunk-tnh13g2g.js";import{oe}from"./chunk-7194gg2b.js";import{t}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{P_}from"./chunk-yj45yszw.js";import{$u}from"./chunk-j1zwmk4n.js";import{Ks}from"./chunk-zp1a5mr6.js";import{Evn,_rr,tzt,_Ze,rzt}from"./chunk-c4a5qdvy.js";import{Ge}from"./chunk-zg1rc7g5.js";import{lstat as y,opendir as R}from"fs/promises";import{join as g,sep as D}from"path";async function tMt(){let o=await rzt();if(o!==null)return{root:o,nested:!1,followsShell:!1};let r=await b();return r===null?null:{...r,nested:!0}}var S=256;async function b(){try{if(!Ks()||Ge.isSandboxingEnabled())return null;let o=_Ze();if(P_(o)!==null)return null;let r=oe(),i=Evn();if(i.size>1){let n=_rr(r),e=n===void 0?void 0:i.get(n),p=e!==void 0&&await f(e)==="directory"?await u(e):null;return p===null?null:{root:p,followsShell:!0}}let[a]=i.values();if(a!==void 0){let n=await f(a);if(n==="directory"){let e=await u(a);return e===null?null:{root:e,followsShell:!1}}if(n==="other")return null}let s=[],w=0;for await(let n of await R(o)){if(++w>S)return null;if(!n.isDirectory()||n.name.startsWith("."))continue;let e=g(o,n.name);if(await f(e)!=="absent")s.push(e)}let d=$u(r),m=s.find((n)=>{let e=$u(n);return d===e||d.startsWith(e+D)})??(s.length===1?s[0]:void 0),h=m===void 0?null:await u(m);return h===null?null:{root:h,followsShell:s.length>1}}catch(o){if(bf(o))t(`workspace diff: nested repository scan failed: ${l(o)}`,{level:"warn"});else c(o);return null}}async function f(o){try{return(await y(g(o,".git"))).isDirectory()?"directory":"other"}catch(r){let i=E(r);if(i==="ENOENT"||i==="ENOTDIR")return"absent";throw r}}async function u(o){return tzt(o)===null?null:rzt(void 0,o)}
export{tMt};
