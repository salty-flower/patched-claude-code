// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d,v,lm}from"./chunk-wkh5syvr.js";import{de}from"./chunk-xqs3dvj3.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{YS}from"./chunk-td5pjp2j.js";import{yp}from"./chunk-wrzcmmn0.js";import{JNn,Rbr,RJt,Blt,PJt}from"./chunk-9gxhswjq.js";import{Xe}from"./chunk-3m3pt1z4.js";import{_r}from"./chunk-p28cak91.js";import{lstat as y,opendir as R}from"fs/promises";import{join as g,sep as D}from"path";async function J2t(){let o=await PJt();if(o!==null)return{root:o,nested:!1,followsShell:!1};let r=await b();return r===null?null:{...r,nested:!0}}var S=256;async function b(){try{if(!_r()||Xe.isSandboxingEnabled())return null;let o=Blt();if(YS(o)!==null)return null;let r=de(),i=JNn();if(i.size>1){let n=Rbr(r),e=n===void 0?void 0:i.get(n),p=e!==void 0&&await f(e)==="directory"?await u(e):null;return p===null?null:{root:p,followsShell:!0}}let[a]=i.values();if(a!==void 0){let n=await f(a);if(n==="directory"){let e=await u(a);return e===null?null:{root:e,followsShell:!1}}if(n==="other")return null}let s=[],w=0;for await(let n of await R(o)){if(++w>S)return null;if(!n.isDirectory()||n.name.startsWith("."))continue;let e=g(o,n.name);if(await f(e)!=="absent")s.push(e)}let c=yp(r),m=s.find((n)=>{let e=yp(n);return c===e||c.startsWith(e+D)})??(s.length===1?s[0]:void 0),h=m===void 0?null:await u(m);return h===null?null:{root:h,followsShell:s.length>1}}catch(o){if(lm(o))t(`workspace diff: nested repository scan failed: ${d(o)}`,{level:"warn"});else l(o);return null}}async function f(o){try{return(await y(g(o,".git"))).isDirectory()?"directory":"other"}catch(r){let i=v(r);if(i==="ENOENT"||i==="ENOTDIR")return"absent";throw r}}async function u(o){return RJt(o)===null?null:PJt(void 0,o)}
export{J2t};
