// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d,E,lm}from"./chunk-w7m8nded.js";import{de}from"./chunk-30b5ph10.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{qb}from"./chunk-n1y0nb3t.js";import{_p}from"./chunk-wz19y5sy.js";import{ONn,aSr,mQt,Mlt,hQt}from"./chunk-xhd8rxkk.js";import{Xe}from"./chunk-dwhry0yv.js";import{yr}from"./chunk-mm8dw908.js";import{lstat as y,opendir as R}from"fs/promises";import{join as g,sep as D}from"path";async function $zt(){let o=await hQt();if(o!==null)return{root:o,nested:!1,followsShell:!1};let r=await b();return r===null?null:{...r,nested:!0}}var S=256;async function b(){try{if(!yr()||Xe.isSandboxingEnabled())return null;let o=Mlt();if(qb(o)!==null)return null;let r=de(),i=ONn();if(i.size>1){let n=aSr(r),e=n===void 0?void 0:i.get(n),p=e!==void 0&&await f(e)==="directory"?await u(e):null;return p===null?null:{root:p,followsShell:!0}}let[a]=i.values();if(a!==void 0){let n=await f(a);if(n==="directory"){let e=await u(a);return e===null?null:{root:e,followsShell:!1}}if(n==="other")return null}let s=[],w=0;for await(let n of await R(o)){if(++w>S)return null;if(!n.isDirectory()||n.name.startsWith("."))continue;let e=g(o,n.name);if(await f(e)!=="absent")s.push(e)}let c=_p(r),m=s.find((n)=>{let e=_p(n);return c===e||c.startsWith(e+D)})??(s.length===1?s[0]:void 0),h=m===void 0?null:await u(m);return h===null?null:{root:h,followsShell:s.length>1}}catch(o){if(lm(o))t(`workspace diff: nested repository scan failed: ${d(o)}`,{level:"warn"});else l(o);return null}}async function f(o){try{return(await y(g(o,".git"))).isDirectory()?"directory":"other"}catch(r){let i=E(r);if(i==="ENOENT"||i==="ENOTDIR")return"absent";throw r}}async function u(o){return mQt(o)===null?null:hQt(void 0,o)}
export{$zt};
