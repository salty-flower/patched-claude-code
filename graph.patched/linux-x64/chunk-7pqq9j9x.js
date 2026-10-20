// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d,E,xm}from"./chunk-ekgz6skk.js";import{pe}from"./chunk-6vj87cqe.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{SS}from"./chunk-32vra4sg.js";import{Hp}from"./chunk-bjv5j0w5.js";import{cr}from"./chunk-4qs43hr1.js";import{C1n,tAr,utn,lut,ftn}from"./chunk-g9wezmnw.js";import{Je}from"./chunk-j8jwkrgq.js";import{lstat as y,opendir as R}from"fs/promises";import{join as g,sep as D}from"path";async function yVt(){let o=await ftn();if(o!==null)return{root:o,nested:!1,followsShell:!1};let r=await b();return r===null?null:{...r,nested:!0}}var S=256;async function b(){try{if(!cr()||Je.isSandboxingEnabled())return null;let o=lut();if(SS(o)!==null)return null;let r=pe(),i=C1n();if(i.size>1){let n=tAr(r),e=n===void 0?void 0:i.get(n),p=e!==void 0&&await f(e)==="directory"?await u(e):null;return p===null?null:{root:p,followsShell:!0}}let[a]=i.values();if(a!==void 0){let n=await f(a);if(n==="directory"){let e=await u(a);return e===null?null:{root:e,followsShell:!1}}if(n==="other")return null}let s=[],w=0;for await(let n of await R(o)){if(++w>S)return null;if(!n.isDirectory()||n.name.startsWith("."))continue;let e=g(o,n.name);if(await f(e)!=="absent")s.push(e)}let c=Hp(r),m=s.find((n)=>{let e=Hp(n);return c===e||c.startsWith(e+D)})??(s.length===1?s[0]:void 0),h=m===void 0?null:await u(m);return h===null?null:{root:h,followsShell:s.length>1}}catch(o){if(xm(o))t(`workspace diff: nested repository scan failed: ${d(o)}`,{level:"warn"});else l(o);return null}}async function f(o){try{return(await y(g(o,".git"))).isDirectory()?"directory":"other"}catch(r){let i=E(r);if(i==="ENOENT"||i==="ENOTDIR")return"absent";throw r}}async function u(o){return utn(o)===null?null:ftn(void 0,o)}
export{yVt};
